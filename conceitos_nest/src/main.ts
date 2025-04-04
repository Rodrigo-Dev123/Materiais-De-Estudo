import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove os campos não declarados no DTO
      forbidNonWhitelisted: true, // levante erro quando a chave não for declarada no DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
