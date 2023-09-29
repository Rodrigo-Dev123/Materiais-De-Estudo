// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Olá! ' + this.nome + ' ' + this.sobrenome;
}


Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

// console.dir(pessoa1);
// console.dir(data);















/* 
if (Pessoa.prototype === pessoa1.__proto__)  {
    console.log('Está linkado');
} */