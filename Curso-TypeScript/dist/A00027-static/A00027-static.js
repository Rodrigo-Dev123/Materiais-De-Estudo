"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    metodoNormal() {
        console.log('Método normal ' + Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}
exports.Pessoa = Pessoa;
Pessoa.idadePadrao = 0;
Pessoa.cpfPadrao = '000.000.000-00';
const pessoa = new Pessoa('Rodrigo', 'Ramos', 22, '000.000.000-00');
pessoa.cpf = '000.000.000-99';
console.log(pessoa);
const pessoa2 = Pessoa.criaPessoa('Ana', 'Souza');
console.log(pessoa2);
console.log(pessoa2.metodoNormal());
//# sourceMappingURL=A00027-static.js.map