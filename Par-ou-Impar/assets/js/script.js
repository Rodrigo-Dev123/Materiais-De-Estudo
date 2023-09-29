function meuEscopo () {
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');
    let p = document.createElement('p');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const inputNumero = event.target.querySelector('#numero');
        
        const numero = parseFloat(inputNumero.value.replace(",", "."));
        parImpar(numero);
    })

    function parImpar (numero) {
        let msg = ``;
        if (!numero) {
            msg = `Isto não é um número!`;
            p.classList.remove('green')
            p.classList.add('red');
        }
        else if (numero % 2 === 0) {
            msg = `${numero} é Par.`;
            p.classList.add('green');
        } else {
            msg = `${numero} é ímpar.`;
            p.classList.add('green');
            p.classList.remove('red');
        }
        resultadoFinal(msg);
    }
    function resultadoFinal (msg) {
        p.innerHTML = msg;
        resultado.appendChild(p)
    }
    
}

meuEscopo();
