function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta); // Esta função realiza os calculos que estão no formato de string.

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        };
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {

            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.cliqueBotoes = () => {
        // this -> calculadora // this é quem chama a função.
        document.addEventListener('click', e => { // Arrow functions não permite a alteração do this.
            const el = e.target;

            if (el.classList.contains('btn-num')) this.bntParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteOne()
            if (el.classList.contains('btn-eq')) this.realizaConta();
            
            this.display.focus();
        });

    };

    this.bntParaDisplay = (valor) => {
        this.display.value += valor;
    }

};

const calculadora = new Calculadora();
calculadora.inicia();
