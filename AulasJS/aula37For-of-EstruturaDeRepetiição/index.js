// For Clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array, ou objetos)
// For of - Retorna o valor em si (interáveis, arrays ou strings)

const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Ramos',
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}




/* const nomes = ['Rodrigo', 'Ramos', 'Oliveira'];


for (let valor of nomes) {
    console.log(valor);
};

console.log('#############################');

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
};

console.log('#############################');

for (let i in nomes) {
    console.log(nomes[i]);
};

console.log('#############################');

nomes.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array);
}) */