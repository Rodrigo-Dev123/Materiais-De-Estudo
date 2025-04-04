import { RecadosService } from './recados.service';
import { CreateRecadoTdo } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';
export declare class RecadosController {
    private readonly recadosService;
    constructor(recadosService: RecadosService);
    findAll(pagination: any): import("./entities/recado.entity").Recado[];
    findOne(id: number): import("./entities/recado.entity").Recado | undefined;
    create(createRecadoDto: CreateRecadoTdo): {
        lido: boolean;
        data: Date;
        texto: string;
        de: string;
        para: string;
        id: number;
    };
    update(id: string, updateRecadoDto: UpdateRecadoDto): import("./entities/recado.entity").Recado;
    remove(id: string): import("./entities/recado.entity").Recado;
}
