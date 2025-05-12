import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { RecadosUtils } from './racados.utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recado]),
    PessoasModule,
    /* MyDynamicModule.register({
      apiKey: '123',
      apiUrl: 'http://localhost:3000',
    }), */
  ],
  controllers: [RecadosController],
  providers: [RecadosService, RecadosUtils],
  exports: [RecadosUtils],
})
export class RecadosModule {}
