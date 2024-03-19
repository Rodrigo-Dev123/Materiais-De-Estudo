const { texto } = require('./base');

const regExp1 = /Rodrigo|Maria/gi;

// (...(()))(...)(...) $1 $2 $3

// console.log(texto);
// console.log(texto.match(regExp1));
console.log(texto.replace(/(rodrigo)/ig, '<b>$1</b>'));
/* console.log(texto.replace(/(rodrigo)/ig, function(input) {
    return '######## ' + input.toUpperCase() +' #########';
})); */

// console.log(texto.match(/-/));