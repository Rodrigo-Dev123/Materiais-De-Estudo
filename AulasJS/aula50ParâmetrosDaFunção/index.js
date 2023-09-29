// Este tipo de função tem um variável argumento que sustenta todo os argumentos enviados.
/* function funcao(a, b, c) {
    console.log(arguments[0], a, b, c);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

function funcaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
};

funcaoArray(['Rodrigo', 'Ramos', 20])




/* function funcaoObj({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);

}
let objeto = { nome: 'Rodrigo', sobrenome: 'Ramos', idade: 20 };
funcaoObj(objeto);
 */




/* function soma(a, b = 5, c = 1) {
//  b = b || 0;
    console.log(a + b + c);
}
soma(3, undefined, 10); */