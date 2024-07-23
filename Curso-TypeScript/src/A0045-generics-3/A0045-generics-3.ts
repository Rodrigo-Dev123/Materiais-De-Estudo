interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Rodrigo',
  sobrenome: 'Ramos',
  idade: 22
}

const aluno2: PessoaProtocolo2<string, number> = {
  nome: 'Rodrigo',
  sobrenome: 'Ramos',
  idade: 22
}
