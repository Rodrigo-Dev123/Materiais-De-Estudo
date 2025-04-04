import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoTdo } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Fulano',
      para: 'Ciclano',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Recado nao encontrado');
  }

  findAll(): Recado[] {
    return this.recados;
  }

  findOne(id: number) {
    const recado = this.recados.find(
      recado => recado.id === Number(id),
    ) as Recado;

    if (recado) return recado;

    // throw new HttpException('Recado nao encontrado', HttpStatus.NOT_FOUND);

    this.throwNotFoundError();
  }

  create(createRecadoDto: CreateRecadoTdo) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };

    this.recados.push(newRecado);
    return newRecado;
  }

  update(id: string, updateRecadoDto: UpdateRecadoDto) {
    const recadoExistenteIndex = this.recados.findIndex(
      recado => recado.id === Number(id),
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...updateRecadoDto,
      };
    }

    return this.recados[recadoExistenteIndex];
  }

  remove(id: number) {
    const recadoExistenteIndex = this.recados.findIndex(
      recado => recado.id === Number(id),
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }
}
