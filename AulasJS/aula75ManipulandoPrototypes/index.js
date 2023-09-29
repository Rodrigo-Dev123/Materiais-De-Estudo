// new Object -> Object.prototype
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
// p2 vai ter o prototype de p1.

/* p1.aumento(100);
p2.aumento(10);
//p1.desconto(100);
console.log(p1)
console.log(p2);
 */
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },

});
p3.preco = 113;
p3.aumento(10);
console.log(p3);

















/* const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // O objB vai ter o protoType de objA
Object.setPrototypeOf(objC, objB) // O objC vai ter o prototype de objB
console.log(objC.chaveA); */