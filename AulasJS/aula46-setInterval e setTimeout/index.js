function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDointerval() {
    console.log(mostraHora());
}

const timer = setInterval(function() {
   console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log('Olá mundo!')
}, 3000);





// setInterval(funcaoDointerval, 1000);