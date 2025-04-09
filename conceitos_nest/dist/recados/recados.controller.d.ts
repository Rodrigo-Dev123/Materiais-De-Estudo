import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';
export declare class RecadosController {
    private readonly recadosService;
    constructor(recadosService: RecadosService);
    findAll(pagination: any): Promise<import("./entities/recado.entity").Recado[]>;
    findOne(id: number): Promise<import("./entities/recado.entity").Recado | undefined>;
    create(createRecadoDto: CreateRecadoDto): Promise<import("./entities/recado.entity").Recado>;
    update(id: number, updateRecadoDto: UpdateRecadoDto): Promise<void | import("./entities/recado.entity").Recado>;
    remove(id: number): Promise<void | import("./entities/recado.entity").Recado>;
}
