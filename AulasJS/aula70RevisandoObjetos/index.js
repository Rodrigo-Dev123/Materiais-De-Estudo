// Factory functions / construtor functions Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) // Impede a modificação de atributos e valores de propriedade existentes e impede a adição de novas propriedades.
}

const p1 = new Pessoa('Rodrigo', 'Ramos');
p1.nome = 'Outra coisa';
p1.sobrenome = 'Qlq';
p1.fala = function() {console.log('Oi')};
console.log(p1);








/* 
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falaNome = function() {
    return `${this.nome} está falando seu nome.`;
}
pessoa1.getDataNascimento = function() {
    const data = new Date;
    const ano = data.getFullYear();
    return ano - this.idade;
    
}

for (let chave in pessoa1) {
    console.log(chave);
}
*/
// pessoa1.falaNome();
// console.log(pessoa1.getDataNascimento());

/* 
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
*/