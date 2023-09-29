/* function meuEscopo() {
    const data = new Date();
    const dia = data.getDay();

    function resultadoData() {
        const resultadoDiaSemana = getDiaSemanaTexto();
        const resultadoDiaMes = getDiaMes();
        const resultadoMes = getNomeMes();
        const resultadoAno = ano();
        const resultadoHora = hora();
        const resultadoMinuto = minuto();

        return `${resultadoDiaSemana}, ${resultadoDiaMes} de ${resultadoMes} de ${resultadoAno}<br> ${zeroAEsquerda(resultadoHora)}:${zeroAEsquerda(resultadoMinuto)}`;
    }

    function getDiaSemanaTexto() {
        const diaSemanaTexto = ['domingo', 'segunda-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        return diaSemanaTexto[dia];
    }
    function getDiaMes() {
        const diaMes = data.getDate();
        return diaMes;
    }

    function getNomeMes() {
        const mes = data.getMonth();
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return meses[mes];
    }
        function ano() {
            const ano = data.getFullYear();
            return ano;
        }
        function hora() {
            const hora = data.getHours();
            return hora;
        }

        function minuto() {
            const minuto = data.getMinutes();
            return minuto;
        }
        function zeroAEsquerda(num) {
            return num >= 10 ? num : `0${num}`;
        }

    const resultado = resultadoData();
    return resultado;
}


const h1 = document.querySelector('.container h1');

h1.innerHTML = meuEscopo(); */

// Outra maneira de obter o mesmo resultado simplificado:
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});