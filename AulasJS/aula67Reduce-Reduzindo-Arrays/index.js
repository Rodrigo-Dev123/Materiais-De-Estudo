// Some todos os números (reduce)
// Retorna um array com os pares (Filter)
// Retorna um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0); 

/* 
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); 
*/
// console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);