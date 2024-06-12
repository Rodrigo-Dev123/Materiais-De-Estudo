"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Udemy = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    mostraColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11');
    }
    popColaborador() {
        const colaborador = this.colaboradores.pop();
        if (colaborador)
            return colaborador;
        return null;
    }
}
exports.Udemy = Udemy;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Rodrigo', 'Ramos');
const colaborador2 = new Colaborador('Mariana', 'Souza');
const colaborador3 = new Colaborador('Ana', 'Oliveira');
console.log(empresa1);
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
//# sourceMappingURL=A00025-protected.js.map