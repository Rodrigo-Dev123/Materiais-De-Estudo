import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class AddHeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const response = context.switchToHttp().getResponse();

    response.setHeader('X-Custom-head', 'O Valor do Cabeçalho');
    return next.handle();
  }
}
