// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usário VIP' : 'Usário normal';



const corUsuario = 'Pink';
const corPadrao = corUsuario || 'preta';
console.log(nivelUsuario, corPadrao);



/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */