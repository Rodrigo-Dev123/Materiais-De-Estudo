// Declarção de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
}

// Firts-class objects (Objetos de priemeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
};
// executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou um arrow function');
};
funcaoArrow()

// Dentro de um objeto
const obj = {
//  falar: funtion {};   
    falar() {
        console.log('Estou falando...');
    }
}
obj.falar();