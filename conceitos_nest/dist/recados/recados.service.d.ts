import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
export declare class RecadosService {
    private readonly recadoRepository;
    private readonly pessoasService;
    constructor(recadoRepository: Repository<Recado>, pessoasService: PessoasService);
    throwNotFoundError(): void;
    findAll(): Promise<Recado[]>;
    findOne(id: number): Promise<Recado | undefined>;
    create(createRecadoDto: CreateRecadoDto): Promise<Recado>;
    update(id: number, updateRecadoDto: UpdateRecadoDto): Promise<void | Recado>;
    remove(id: number): Promise<void | Recado>;
}
