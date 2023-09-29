// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix.

// const data = new Date(2023, 2); // Ano, Mês, Dia, Horas, Minutos, Segundos, Milésimos de Segundos.
/* const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // + 1 porque no javascript os meses são contados apartir do 0.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 é domingo e 6 é sábado.
console.log(data.toString()); */
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`; 
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDay());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
console.log(data);