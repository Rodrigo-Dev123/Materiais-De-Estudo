// IIFE -> Imediately invoked function expression
(function() {

    const sobrenome = 'Ramos';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Rodrigo'));
    }

    falaNome();

})();
