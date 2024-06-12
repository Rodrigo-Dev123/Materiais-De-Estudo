"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.cpf;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
class Aluno extends Pessoa {
    constructor(nome, sobrenome, idade, cpf, sala) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }
    getNomeCompleto() {
        console.log('FAZENDO ALGO ANTES');
        const result = super.getNomeCompleto();
        return result + ' HEYYYYYYY!!!';
    }
}
exports.Aluno = Aluno;
class Client extends Pessoa {
    getNomeCompleto() {
        return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}
exports.Client = Client;
const pessoa = new Pessoa('Rodrigo', 'Ramos', 22, '000.000.000-00');
const aluno = new Aluno('Rodrigo', 'Ramos', 22, '000.000.000-00', '0001');
const cliente = new Client('Rodrigo', 'Ramos', 22, '000.000.000-00');
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
//# sourceMappingURL=A00024-super.js.map