import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
export declare class PessoasController {
    private readonly pessoasService;
    constructor(pessoasService: PessoasService);
    create(createPessoaDto: CreatePessoaDto): Promise<import("./entities/pessoa.entity").Pessoa | undefined>;
    findAll(): Promise<import("./entities/pessoa.entity").Pessoa[]>;
    findOne(id: string): string;
    update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<import("./entities/pessoa.entity").Pessoa>;
    remove(id: string): Promise<import("./entities/pessoa.entity").Pessoa>;
}
