import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoTdo } from './create-recado.tdo';

export class UpdateRecadoDto extends PartialType(CreateRecadoTdo) {}
