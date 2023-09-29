// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
    idade: 20
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const chave = 'nome';
// console.log(pessoa[chave]);




/* const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
} */

// Forma clássica
/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

