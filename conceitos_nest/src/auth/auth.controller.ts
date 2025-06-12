import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthTokenGuard } from './guards/auth-token.guard';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { TokenPayloadParam } from './params/token-payload.params';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly pessoasService: PessoasService,
  ) {}

  @UseGuards(AuthTokenGuard)
  @Get('me')
  async findOne(@TokenPayloadParam() tokenPayload: TokenPayloadDto) {
    const person = await this.pessoasService.findOne(tokenPayload.sub);
    return {
      id: person.id,
      nome: person.nome,
      email: person.email,
      createdAt: person.createdAt,
      updatedAt: person.updatedAt,
    };
  }

  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
