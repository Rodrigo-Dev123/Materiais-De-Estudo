// g - global (Encontra todas as ocorrências)
// i - insensitive
// (()()) - grupos
// | - ou

const { texto } = require('./base');

const regExp1 = /(amada|querida) (namorada)/i;
const found = regExp1.exec(texto);

// console.log(regExp1.exec(texto));
console.log(found[0]);
console.log(found[1]);