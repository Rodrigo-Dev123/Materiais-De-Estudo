// Escreva uma função que recebe 2 números e retorne o maior deles.

/* function retornaMaiorNumero (num1, num2) {
    if (num1 > num2) return num1;
    return num2;
} */

/* function retornaMaiorNumero (num1, num2) {
    return num1 > num2 ? num1 : num2; 
} */
const max2 = (num1, num2) => num1 > num2 ? num1 : num2;


console.log(max2(80, 90));