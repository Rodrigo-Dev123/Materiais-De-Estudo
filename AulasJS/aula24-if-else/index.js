/* 
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa Tarde
Entre 18 - 23 -> Boa noite
*/


// If pode ser usado sozinho.
// Sempre que utilizo a palavra else, preciso de um if antes.
// Eu posso ter vários else ifs na checagem.
// Só posso ter um else na checagem.
// Podemos usar comdições sem else if, utilizando apenas if e else.

const hora = 15;

if (hora <= 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa tarde!');
} else { 
    console.log('Olá');
}

const tenhoGrana = NaN;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}