const nome = 'Rodrigo';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Ramos';
    falaNome();
}
usaFalaNome();