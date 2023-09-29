/*Aritiméticos (** / * + - %)
* + Adição / Concatenação
* ** pontenciação
* % Resto da divisão
* Incremento = ++
* Decremento = --
*/

/*Precendençia dos Aritiméticos:
()
**
* / %
+ -
let contador = 1;
contador++; É o mesmo de: Contador = contador + 1;
*/

const passo = 50;
let contador = 0;
contador += passo; // contador = contador + 50;

const num1 = 10;
// const num2 = parseInt('5'); // converte a string para inteiro.
const num2 = parseFloat('5.3'); // converte para número float.
console.log(num1 + num2);