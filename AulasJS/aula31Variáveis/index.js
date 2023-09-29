const verdadeira = true;

// Let tem escopo de bloco {... bloco }
// Var só tem escopo de função

/* let nome = 'Rodrigo'; // criando
var nome2 = 'Ramos';
var nome2 = 'Miguel'; // Redeclarada

if (verdadeira) {
    let nome = 'Gabriela'; // criando
    console.log(nome, nome2);
} */

/* function aaa () {
    var nome = 'Rodrigo';
    let sobrenome = 'Ramos';
} */

if (verdadeira) {
    var nome = 'Rodrigo';
    let sobrenome = 'Ramos';
}
console.log(nome);
console.log(sobrenome);