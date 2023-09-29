class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        
    }
}

const p1 = new Pessoa('Luíz', 'Miranda');
p1.nomeCompleto = 'Rodrigo Ramos Oliveira';
console.log(p1.nome);
console.log(p1.nomeCompleto);
