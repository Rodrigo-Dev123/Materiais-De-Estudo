"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcao = void 0;
function funcao(nome, age) {
    console.log(this);
    console.log(nome, age);
}
exports.funcao = funcao;
funcao.call(new Date(), 'Rodrigo', 22);
funcao.apply(new Date(), ['Rodrigo', 30]);
//# sourceMappingURL=A00020-this-em-funcoes.js.map