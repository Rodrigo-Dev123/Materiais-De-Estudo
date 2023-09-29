// defineProperty -> Getter e Setters
function Produtos(nome, preco, estoque) {
    this.nome = nome;
    this.preço = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
     // value: estoque, // valor
     // writable: true,  // pode alterar
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem');
            }

            estoquePrivado = valor;
        }
    });

}

// factory functions
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);
/* 
const p1 = new Produtos('Camiseta', 20, 3);
p1.estoque = 10;
console.log(p1);
console.log(p1.estoque); 
*/