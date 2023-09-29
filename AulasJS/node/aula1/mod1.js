// const nome = 'Rodrigo';
// const sobrenome = 'Ramos';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Rodrigo';
const sobrenome = 'Ramos';

module.exports = {
    nome, sobrenome, Pessoa
};

exports.outraCoisa = 'Outra coisa';

