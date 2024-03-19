const { texto, arquivos } = require('./base');

// * (opicionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n, m} mínimo e máximo
// {10,} no mínimo 10
// {0,10} de 0 a 10

/* console.log(texto);
const regExp1 = /Ro+drigo+/gi;
console.log(texto.match(regExp1)); */

const regExp2 = /\.jpe{0,1}g/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2)

    if(!valido) continue;

    console.log(arquivo, valido);
}