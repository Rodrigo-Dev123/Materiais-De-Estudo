import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class RecadosController {
    private readonly recadosService;
    constructor(recadosService: RecadosService);
    findAll(paginationDto: PaginationDto, method: string): Promise<import("./entities/recado.entity").Recado[]>;
    findOne(id: number): Promise<import("./entities/recado.entity").Recado>;
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
    update(id: number, updateRecadoDto: UpdateRecadoDto): Promise<import("./entities/recado.entity").Recado>;
    remove(id: number): Promise<void | import("./entities/recado.entity").Recado>;
}
