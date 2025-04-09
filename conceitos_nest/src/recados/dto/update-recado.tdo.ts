import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.tdo';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
