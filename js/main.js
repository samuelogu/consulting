let num = document.getElementsByClassName("num");
let operator = document.getElementsByClassName("operator");
let eqn = document.getElementById('eqn');
let del = document.getElementById('delete')
let resultBox = document.getElementById('result');

let newResult = false;

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    element.addEventListener('click', () => {
        let value = element.value;
        if (newResult) {
            newResult = false
            return input(value, true);
        }
        input(value)
    })
}

for (let index = 0; index < operator.length; index++) {
    const element = operator[index];
    element.addEventListener('click', () => {
        let value = element.value;
        if (newResult) {
            newResult = false
            return input(value, true);
        }
        input(value)
    })
}

eqn.addEventListener('click', calculate)
del.addEventListener('click', backspace)

function calculate() {
    const inputBox = resultBox.innerHTML;
    const result = eval(inputBox)
    input(result, true)
    newResult = true;
}

function backspace() {

    if (newResult) {
        newResult = false
        return input('', true);
    }

    const inputBox = resultBox.innerHTML;
    const newInput = inputBox.slice(0, -1);
    input(newInput, true);

}

function input(value, clear = false) {
    const inputBox = resultBox.innerHTML;

    if (inputBox === '' && value === '0') {
        return;
    }

    clear ? resultBox.innerHTML = value : resultBox.innerHTML += value
}