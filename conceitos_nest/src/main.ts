import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ParseIntIdPipe } from './common/pipes/parse-int-id.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove os campos não declarados no DTO
      forbidNonWhitelisted: true, // levante erro quando a chave não for declarada no DTO
      transform: false, // tenta transformar os tipos de dados de params e dtos
    }),
    new ParseIntIdPipe(),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
