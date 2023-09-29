//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// Unshift
const removidos = nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);
// Push
// const removidos = nomes.splice(nomes.length, 0, 'Luiz', 'Otávio')


// nomes.splice(indice, quantidade de elemetos à serem removidos , elem, elem2, elem3);
// pop
// const removidos = nomes.splice(3, 2, 'Ferdinando', 'Roremilto');


// shift
// const removidos = nomes.splice(0, 1);

