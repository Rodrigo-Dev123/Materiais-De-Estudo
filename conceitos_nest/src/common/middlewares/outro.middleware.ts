import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class OutroMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Outro Middleware');
    const authorization = req.headers.authorization;

    if (authorization) {
      req['user'] = {
        nome: 'Rodrigo',
        sobreNome: 'Ramos',
      };
    }

    res.setHeader('CABECALHO', 'Do Middleware');

    next();

    console.log('Fim do Outro Middleware');
  }
}
