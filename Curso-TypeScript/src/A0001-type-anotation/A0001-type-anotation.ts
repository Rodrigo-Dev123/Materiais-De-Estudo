/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Rodrigo'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
// let arrayDeStrings: string[] = ['a', 'b', 'c'];

// objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = { // A interrogação depois da chave significa que o valor é opcional.
  idade: 30,
  nome: 'Rodrigo',
}

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
             /* ------------ Tipo -----------*/  /*--- Função --- */
const soma2: (x: number, y: number) => number = (x, y) => x + y; // Tudo depois dos : é type-anotation
