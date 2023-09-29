/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados.
*/

/* 
Referência (mutável) - array, object, function - Valores passados por referência, ou seja: apontam para o mesmo lugar.
*/
var a = [1, 2, 3];
let b = [...a]; // Faz a variável obter o mesmo valor ao invés de somente apontar.
let c = b;

console.log(c);
