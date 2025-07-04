function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Ramos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Rodrigo', 'Ramos');
pessoa.exibirNome();

export { pessoa };
