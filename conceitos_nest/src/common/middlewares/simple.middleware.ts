import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class SimpleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Simple Middleware');
    const authorization = req.headers.authorization;

    if (authorization) {
      req['user'] = {
        nome: 'Rodrigo',
        sobreNome: 'Ramos',
      };
    }

    /* if (authorization) {
      throw new BadRequestException('Bla Bla');
    } */

    res.setHeader('CABECALHO', 'Do Middleware');

    next();

    console.log('Fim do Simple Middleware');

    res.on('finish', () => {
      console.log('Resposta finalizada no SimpleMiddleware');
    });
  }
}
