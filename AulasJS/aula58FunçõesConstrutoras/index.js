// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new) // Começa com letra maiúscula
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados.
    const ID = 123456789;
    const metodoInterno = function() {
        
    };


    // Atributos ou métodos públicos.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.medoto = function() {
        console.log(`${this.nome}: sou um médoto`)
    }
}

const p1 = new Pessoa('Rodrigo', 'Ramos');
const p2 = new Pessoa('Juia', 'Santos');

console.log(p1.sobrenome);
p1.medoto();