import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { RecadosUtils } from './racados.utils';
export declare class RecadosService {
    private readonly recadoRepository;
    private readonly pessoasService;
    private readonly recadosUtils;
    constructor(recadoRepository: Repository<Recado>, pessoasService: PessoasService, recadosUtils: RecadosUtils);
    throwNotFoundError(): void;
    findAll(paginationDto: PaginationDto): Promise<Recado[]>;
    findOne(id: number): Promise<Recado>;
    create(createRecadoDto: CreateRecadoDto): Promise<{
        de: {
            id: number;
        };
        para: {
            id: number;
        };
        id: number;
        texto: string;
        lido: boolean;
        data: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }>;
    update(id: number, updateRecadoDto: UpdateRecadoDto): Promise<Recado>;
    remove(id: number): Promise<void | Recado>;
}
