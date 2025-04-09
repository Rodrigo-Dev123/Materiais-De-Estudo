import { CreateRecadoDto } from './create-recado.tdo';
declare const UpdateRecadoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRecadoDto>>;
export declare class UpdateRecadoDto extends UpdateRecadoDto_base {
    readonly lido?: boolean;
}
export {};
