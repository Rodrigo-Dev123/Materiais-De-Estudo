"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const pessoa = {
    idade: 20,
    nome: 'Rodrigo',
    salario: 30000,
};
function setCorPreferida(pessoa, cor) {
    return Object.assign(Object.assign({}, pessoa), { corPreferida: cor });
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, 'Azul'));
//# sourceMappingURL=index.js.map