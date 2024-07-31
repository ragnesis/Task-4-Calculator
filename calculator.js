const display = document.getElementById('display');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display.textContent = '0';
    adjustFontSize();
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
    adjustFontSize();
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
    adjustFontSize();
}

function appendOperator(operator) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    }
    currentOperator = operator;
    display.textContent = currentOperator;
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.textContent = currentInput;
    adjustFontSize();
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    const result = eval(previousInput + currentOperator + currentInput);
    display.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    adjustFontSize();
}

function adjustFontSize() {
    const displayWidth = display.clientWidth;
    const textWidth = display.scrollWidth;
    
    if (textWidth > displayWidth) {
        display.style.fontSize = '2em';
    } else {
        display.style.fontSize = '2.5em';
    }
}
