/* 
Objetos.values
Objetos.entries / Retorna chave e valor.
Objetos.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (conjela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
     writable: false, // pode alterar
     configurable: false, // configurável
     value: 'Qualquer outra coisa'
});
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(produto);

























//const caneca = { nome: produto.nome, preco: produto.preco };
//const caneca = Object.assign({}, produto, {material: 'Porcelana'});
/* 
const caneca = {
     ...produto,
     material: 'Porcelana'
}; */

// Object.freeze(caneca);

/* 
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

*/