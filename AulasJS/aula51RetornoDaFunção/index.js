// return.
// Retorna um valor.
// Termina a função.

function criaMultiplicador(multiplicador) {
    function multiplica(n) {
        return n * multiplicador; 
    }
    return multiplica;
}

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);
console.log(quadruplica(10));
console.log(triplicador(2));
console.log(duplicador(4));



/* 
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const funcao = falaFrase('Olá');

console.log(funcao('Rodrigo'));

*/
/* 
function soma(a, b) {
    return a + b;
}
*/

/* 
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Rodrigo', 'Ramos');
const p2 = criaPessoa('Mariana', 'Souza');
console.log(p1, p2);
*/