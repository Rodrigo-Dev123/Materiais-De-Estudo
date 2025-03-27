import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados

  @Get()
  findAll() {
    return 'Encontrar todos os recados';
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
}
