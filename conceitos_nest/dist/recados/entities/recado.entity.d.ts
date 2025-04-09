import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
export declare class Recado {
    id: number;
    texto: string;
    lido: boolean;
    data: Date;
    createdAt?: Date;
    updatedAt?: Date;
    de: Pessoa;
    para: Pessoa;
}
