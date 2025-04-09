import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.tdo';
import { UpdateRecadoDto } from './dto/update-recado.tdo';

// DTO - Data Transfer Object
// DTO -> Objeto simples -> Validar dados / Transformar dados

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  // Encontrar todos os recados
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    console.log(createRecadoDto);
    return this.recadosService.create(createRecadoDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
