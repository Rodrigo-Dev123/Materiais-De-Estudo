"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
exports.pessoa = pessoa;
semRetorno('Rodrigo', 'Ramos');
pessoa.exibirNome();
//# sourceMappingURL=A0002-tipo-void.js.map