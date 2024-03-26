// Tuple
const dadosCliente: readonly [number, string] = [1, 'Rodrigo'];
const dadosCliente2: [number, string, string] = [1, 'Rodrigo', 'Ramos'];
const dadosCliente3: [number, string, string?] = [1, 'Rodrigo'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Rodrigo',
  'Ramos',
  'Oliveira',
];

/* dadosCliente[0] = 100;
dadosCliente.pop(); */

// dadosCliente[1] = 100; // Não pode ser atribuido por não ser do mesmo tipo.
console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Rodrigo', 'Ramos'];
const array2: ReadonlyArray<string> = ['Rodrigo', 'Ramos'];

console.log(array1);
console.log(array2);
