type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'c';
type AD = 'D' | 'A';
type Itersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Ramos',
  idade: 22,
};

console.log(pessoa);

// Module mode
export { pessoa };
