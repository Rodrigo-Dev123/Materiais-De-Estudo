const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
    idade: 20,
    endereço: {
        rua: 'Gorgulho',
        numero: 00
    }
};


// Atribuição via desetruturação

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);

/* 
const { endereço: {rua, numero}, endereço} = pessoa;
*/

/* 
const { nome: n, sobrenome, idade } = pessoa;
console.log(n, sobrenome);
*/

/* 
const { nome = '', sobrenome, idade } = pessoa;
console.log(nome, sobrenome); 
*/
