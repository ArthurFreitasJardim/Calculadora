document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    let primeiroNumero = ''; // Mantido como string para facilitar a concatenação
    let segundoNumero = ''; // Mantido como string para facilitar a concatenação
    let operacao = ''; // Inicialmente vazio
    const divNum = document.querySelector('.primeiroNumero');
    let resultado;

    divNum.textContent = '0';
 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.innerText;

            if ((buttonValue >= '0' && buttonValue <= '9') || buttonValue === '.') {
                addNumber(buttonValue);
            } else if (buttonValue === '+') {
                definirOperacao('somando');
            } else if (buttonValue === '−') {
                definirOperacao('subtraindo');
            } else if (buttonValue === '×') {
                definirOperacao('multiplicando');
            } else if (buttonValue === '÷') {
                definirOperacao('dividindo');
            } else if (buttonValue === '%') {
                definirOperacao('porcentagem');
            } else if (buttonValue === 'AC') {
                limpar();
            } else if (buttonValue === '=') {
                calcularResultado();
            }
        });
    });

    function limpar() {
        operacao = '';
        primeiroNumero = '';
        segundoNumero = '';
        divNum.textContent = '0'; // Exibe 0 ao limpar a calculadora
    }

    function calcularResultado() {
        const num1 = parseFloat(primeiroNumero);
        const num2 = parseFloat(segundoNumero);

        if (operacao === 'somando') {
            resultado = num1 + num2;
        } else if (operacao === 'subtraindo') {
            resultado = num1 - num2;
        } else if (operacao === 'multiplicando') {
            resultado = num1 * num2;
        } else if (operacao === 'dividindo') {
            resultado = num1 / num2;
        } else if (operacao === 'porcentagem') {
            resultado = num1 * (num2 / 100);
        }

        divNum.textContent = resultado;
        console.log(resultado); // Exibir resultado no console

        // Prepare para nova operação
        primeiroNumero = resultado.toString();
        segundoNumero = '';
        operacao = '';
    }

    function addNumber(buttonValue) {
        if (operacao === '') {
            if (primeiroNumero === '0') {
                primeiroNumero = ''; // Remove o 0 inicial ao começar a digitar um número
            }
            primeiroNumero += buttonValue;
            divNum.textContent = primeiroNumero;
        } else {
            if (segundoNumero === '0') {
                segundoNumero = ''; // Remove o 0 inicial ao começar a digitar um número
            }
            segundoNumero += buttonValue;
            divNum.textContent = segundoNumero;
        }
    }

    function definirOperacao(novaOperacao) {
        if (primeiroNumero !== '' && segundoNumero !== '') {
            calcularResultado();
        }
        operacao = novaOperacao;
    }
});
