import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { RecadosUtils, RecadosUtilsMock } from './racados.utils';
import { SERVER_NAME } from 'src/common/constants/server-name.constants';
import { RegexProtocal } from 'src/common/regex/regex.protocol';
import { RemoveSpacesRegex } from 'src/common/regex/remove-spaces.regex';
import { OnlyLowercaseLettersRegex } from 'src/common/regex/only-lowercase-letters.regex';

@Module({
  imports: [TypeOrmModule.forFeature([Recado]), PessoasModule],
  controllers: [RecadosController],
  providers: [
    RecadosService,
    {
      provide: RecadosUtils, // Token
      useValue: new RecadosUtilsMock(),
    },
    {
      provide: SERVER_NAME,
      useValue: 'My Name Is NestJS',
    },
    {
      provide: RegexProtocal,
      useClass: 1 === 1 ? RemoveSpacesRegex : OnlyLowercaseLettersRegex,
    },
  ],
  exports: [RecadosUtils, SERVER_NAME],
})
export class RecadosModule {}
