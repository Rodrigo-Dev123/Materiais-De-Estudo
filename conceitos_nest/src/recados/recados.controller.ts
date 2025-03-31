import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit = 10, offset = 0 } = pagination;
    return `Encontrar todos os recados Limit ${limit} e Offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    console.log(id);
    return `Essa rota retorna um recado ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota apaga o recado ${id}`;
  }
}
