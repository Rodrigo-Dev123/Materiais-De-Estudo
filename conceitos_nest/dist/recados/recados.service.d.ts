import { Recado } from './entities/recado.entity';
import { CreateRecadoTdo } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';
export declare class RecadosService {
    private lastId;
    private recados;
    throwNotFoundError(): void;
    findAll(): Recado[];
    findOne(id: number): Recado | undefined;
    create(createRecadoDto: CreateRecadoTdo): {
        lido: boolean;
        data: Date;
        texto: string;
        de: string;
        para: string;
        id: number;
    };
    update(id: string, updateRecadoDto: UpdateRecadoDto): Recado;
    remove(id: string): Recado;
}
