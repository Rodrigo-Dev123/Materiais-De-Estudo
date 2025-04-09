import { Recado } from 'src/recados/entities/recado.entity';
export declare class Pessoa {
    id: number;
    email: string;
    passwordHash: string;
    nome: string;
    createdAt?: Date;
    updatedAt?: Date;
    recadosEnviados: Recado[];
    recadosRecebidos: Recado[];
}
