// g - global (Encontra todas as ocorrências)
// i - insensitive

const { texto } = require('./base');

const regExp1 = /exelente/i;

console.log(regExp1.exec(texto));