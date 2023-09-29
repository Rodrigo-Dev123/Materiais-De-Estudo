function meuEscopo() {
    const data = new Date();
    const dia = data.getDay();

    function resultadoData() {
        const resultadoDiaSemana = getDiaSemanaTexto();
        const resultadoDiaMes = getDiaMes();
        const resultadoMes = mes();
        const resultadoAno = ano();
        const resultadoHora = hora();
        const resultadoMinuto = minuto();
        
        return `${resultadoDiaSemana}, ${resultadoDiaMes} de ${resultadoMes} de ${resultadoAno}<br> ${resultadoHora}:${resultadoMinuto}`;
    }

    function getDiaSemanaTexto() {
        let diaSemana = dia;
        let diaSemanaTexto;
        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'Segunda-feira';
                return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Terça-feira';
                return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quarta-feira';
                return diaSemanaTexto;
            case 4:
                diaSemanaTexto = 'Quinta-feira';
                return diaSemanaTexto;
            case 5:
                diaSemanaTexto = 'Sexta-feira';
                return diaSemanaTexto;
            case 6:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;
            default:
                diaSemanaTexto = '';
                return diaSemanaTexto;
        }

    }
    function getDiaMes() {
        const diaMes = data.getDate();
        return diaMes;
    }

    function mes() {
        const mes = data.getMonth();
        let nomeMes;
        switch (mes) {
            case 0:
                nomeMes = 'Janeiro';
                return nomeMes;
            case 1:
                nomeMes = 'Fevereiro';
                return nomeMes;
            case 2:
                nomeMes = 'Março';
                return nomeMes;
            case 3:
                nomeMes = 'Abril';
                return nomeMes;
            case 4:
                nomeMes = 'Maio';
                return nomeMes;
            case 5:
                nomeMes = 'Junho';
                return nomeMes;
            case 6:
                nomeMes = 'Julho';
                return nomeMes;
            case 7:
                nomeMes = 'Agosto';
                return nomeMes;
            case 8:
                nomeMes = 'Setembro';
                return nomeMes;
            case 9:
                nomeMes = 'Outubro';
                return nomeMes;
            case 10:
                nomeMes = 'Novembro';
                return nomeMes;
            case 11:
                nomeMes = 'Dezembro';
                return nomeMes;
            default:
                nomeMes = '';
                return nomeMes;

        }
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

    const resultado = resultadoData();
    return resultado;

}



const resultadohtml = document.querySelector('#resultado');
const p = document.createElement('p');
p.innerHTML = meuEscopo();
resultadohtml.appendChild(p);
