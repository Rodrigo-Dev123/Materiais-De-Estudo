// defineProperty - defineProperties
function Produtos(nome, preco, estoque) {
    this.nome = nome;
    this.preço = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true,  // pode alterar
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: true,  // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: true,  // pode alterar
            configurable: true // configurável
        }
    })
}

const p1 = new Produtos('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}