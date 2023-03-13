const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.keys');
keys.addEventListener('click', e => {
    const { target } = e;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('key--operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('allClear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

function inputDigit(digit) {
    const { displayValue } = calculator;

    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function inputDecimal(dot){
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

