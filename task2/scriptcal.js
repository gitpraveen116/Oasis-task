let currentValue = '';
let calculatedResult = '';

const insertValue = value => {
    currentValue += value;
    updateResult();
}

const clearResult = () => {
    currentValue = '';
    calculatedResult = '';
    updateResult();
}

const calculateResult = () => {
    try {
        calculatedResult = eval(currentValue);
        updateResult();
    } catch (error) {
        calculatedResult = 'Error';
        updateResult();
    }
}

const updateResult = () => {
    const result = document.getElementById('result');
    result.value = calculatedResult !== '' ? calculatedResult : currentValue;
}
