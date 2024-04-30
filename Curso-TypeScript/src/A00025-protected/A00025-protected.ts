export class Empresa {
  public readonly nome: string; // se a palavra public for omitida a propriedade ainda continuará sendo pública por padrão
  protected readonly colaboradores: Colaborador[] = []; // protected pode ser acessado nas subclasses por herança
  private readonly cnpj: string; // private é acessado somente na classe que foi criado.

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    // A classe também pode ser passada como tipo
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    // Outra forma de declarar as propriedades da classe
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Rodrigo', 'Ramos');
const colaborador2 = new Colaborador('Mariana', 'Souza');
const colaborador3 = new Colaborador('Ana', 'Oliveira');
console.log(empresa1);
// empresa1.nome = 'Facebook'; // A propriedade nome não pode ser atribuida porque é readonly
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Rodrigo',
  sobrenome: 'Ramos',
});
console.log(empresa1);
empresa1.mostraColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log('Pop: ', colaboradorRemovido);
