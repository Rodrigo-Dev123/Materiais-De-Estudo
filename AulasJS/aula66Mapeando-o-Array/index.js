// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave id em cada objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }))
//delete obj.nome;
//return obj;
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(comIds);


