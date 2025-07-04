import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { TokenPayloadDto } from 'src/auth/dto/token-payload.dto';

// Scope.DEFAULT -> O provider em questão é um singleton
// Scope.REQUEST -> O provider em questão é instanciado a cada requisição
// Scope.TRANSIENT -> É criada uma instancia do provider para cada classe que injetar este provider

@Injectable({ scope: Scope.DEFAULT })
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
    private readonly pessoasService: PessoasService,
  ) {}

  throwNotFoundError() {
    throw new NotFoundException('Recado nao encontrado!');
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const recados = await this.recadoRepository.find({
      take: limit, // Limita a quantidade de recados
      skip: offset, // Pula a quantidade de recados
      relations: ['de', 'para'],
      order: {
        id: 'desc',
      },
      select: {
        de: {
          id: true,
          nome: true,
        },
        para: {
          id: true,
          nome: true,
        },
      },
    });

    return recados;
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: { id },
      relations: ['de', 'para'],
      select: {
        de: {
          id: true,
          nome: true,
        },
        para: {
          id: true,
          nome: true,
        },
      },
    });

    if (!recado) {
      throw new NotFoundException('Recado nao encontrado');
    }

    return recado;
  }

  async create(
    createRecadoDto: CreateRecadoDto,
    tokenPayload: TokenPayloadDto,
  ) {
    const { paraId } = createRecadoDto;

    const de = await this.pessoasService.findOne(tokenPayload.sub);
    const para = await this.pessoasService.findOne(paraId);

    const newRecado = {
      texto: createRecadoDto.texto,
      de: de,
      para: para,
      lido: false,
      data: new Date(),
    };

    const recado = this.recadoRepository.create(newRecado);

    await this.recadoRepository.save(recado);

    return {
      ...recado,
      de: {
        id: recado.de.id,
        nome: recado.de.nome,
      },
      para: {
        id: recado.para.id,
        nome: recado.para.nome,
      },
    };
  }

  async update(
    id: number,
    updateRecadoDto: UpdateRecadoDto,
    tokenPayload: TokenPayloadDto,
  ) {
    const recado = await this.findOne(id);

    if (recado.de.id !== tokenPayload.sub) {
      throw new ForbiddenException(
        'Você não tem permissão para editar este recado.',
      );
    }

    recado.texto = updateRecadoDto?.texto ?? recado.texto;
    recado.lido = updateRecadoDto?.lido ?? recado.lido;

    return recado && (await this.recadoRepository.save(recado));
  }

  async remove(id: number, tokenPayload: TokenPayloadDto) {
    const recado = await this.findOne(id);

    if (recado?.de.id !== tokenPayload.sub) {
      throw new ForbiddenException('Este recado não pertence a você.');
    }

    if (!recado) return this.throwNotFoundError();

    return this.recadoRepository.remove(recado);
  }
}
