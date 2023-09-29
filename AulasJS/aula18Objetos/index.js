// Objeto:
/* const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
    idade: 20
}
console.log(pessoa1.idade); */

// Funcão de criar objetos.
/* function criaPessoa (nome, sobrenome, idade) {
    return {
        Nome: nome,
        Sobrenome: sobrenome,
        Idade: idade
    };
}
 */
/* const pessoa2 = criaPessoa('Cloridralto', 'Cabral', 30)
console.log(pessoa2);
 */
const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
    idade: 20,
    
    // Médoto.
    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`)
    }
};

pessoa1.fala()