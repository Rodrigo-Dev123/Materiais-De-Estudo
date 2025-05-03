import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';

@Catch(BadRequestException)
export class MyExceptionsFilter<T extends BadRequestException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest();
    const response = context.getResponse();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof response === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as object);

    response.status(404).json({
      ...error,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
