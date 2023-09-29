// let umaString = "um \"texto\"";
let umaString = 'Um texto, o rato roeu a roupa do rei de Roma';

console.log(umaString.indexOf('texto')); // Onde começa a apalavra 'texto'.
console.log(umaString.indexOf('texto', 3)); // procurando a palavra 'texto' à partir do índice 3.
console.log(umaString.indexOf('t', 4)); // procurando a letra 't' à partir do índice 4.
console.log(umaString.replace('Um', 'Outra')); // Substitui a primeira palavra pela segunda palavra.
console.log(umaString.replace(/r/, '#')); // Substitui o primeiro a letra selecionada pelo segundo caractere.
console.log(umaString.replace(/r/g, '#')); // Substitui todas as letras selecionadas pelo segundo caractere entre ''.
console.log(umaString.length); // mostra a quantidade de caracteres.
console.log(umaString.slice(-3)); // Fatiamento de string por índice.
console.log(umaString.split('r')); // separa as letras pelo caractere selecionado no ''.
console.log(umaString.toUpperCase()); // trasforma as letras em letras maiúsculas.
console.log(umaString.toLowerCase); // trasforma as letras em letras minúsculas.





