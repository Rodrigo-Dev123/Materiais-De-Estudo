// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 15, 22, 27];

/*
 function callbackFilter(valor, indice, array) {
    return valor > 10;
} 
*/


/* const numerosFiltrados = numeros.filter((valor, indice, array) => {
    return valor > 10;
});
console.log(numerosFiltrados);

*/



/*
function returnMaiorque10(numeros)  {
    const numsMaior10 = []
    for (let numero of numeros) {
        if (numero > 10) {
            numsMaior10.push(numero)
        }
    }
    return numsMaior10;
}

console.log(returnMaiorque10(numeros)); 
*/
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
const maisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const terminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(terminaComA);































