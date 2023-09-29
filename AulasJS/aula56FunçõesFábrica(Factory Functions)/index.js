// Factory function (Função fábrica)
// Construtor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // Getter // Esta função é chamada de médoto, porque está dentro de um objeto.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
        },

        fala: function(assunto = 'falando!') { 
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Rodrigo', 'Ramos', 1.84, 67);
const p2 = criaPessoa('Mariana', 'Souza', 1.70, 67);
const p3 = criaPessoa('Miguel', 'Oliveira', 1.64, 70);
// console.log(p1.fala('falando sobre JS'));
// console.log(p1.imc);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);