export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log('Método normal ' + Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Rodrigo', 'Ramos', 22, '000.000.000-00');
pessoa.cpf = '000.000.000-99';
console.log(pessoa);
const pessoa2 = Pessoa.criaPessoa('Ana', 'Souza');
console.log(pessoa2);
console.log(pessoa2.metodoNormal());
