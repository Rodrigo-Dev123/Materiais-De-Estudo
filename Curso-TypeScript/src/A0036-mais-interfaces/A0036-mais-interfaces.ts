// Declaration merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Ramos',
  enderecos: ['Caeté-Açu'],
};

console.log(pessoa);
