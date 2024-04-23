let num = document.getElementsByClassName("num");
let operator = document.getElementsByClassName("operator");
let eqn = document.getElementById('eqn');
let del = document.getElementById('delete')
let resultBox = document.getElementById('result');

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    element.addEventListener('click', () => {
        let value = element.value;
        input(value)
    })
}

for (let index = 0; index < operator.length; index++) {
    const element = operator[index];
    element.addEventListener('click', () => {
        let value = element.value;
        input(value)
    })
}

eqn.addEventListener('click', calculate)
del.addEventListener('click', backspace)

function calculate() {
    console.log('calculate');
}

function backspace() {
    const inputBox = resultBox.innerHTML;
    const newInput = inputBox.slice(0, -1);
    input(newInput, true);
}

function input(value, clear = false) {
    // if (clear) {
    //     resultBox.innerHTML = value
    // }else {
    //     resultBox.innerHTML += value
    // }
    // if (clear) {
    //     return resultBox.innerHTML = value
    // }
    // resultBox.innerHTML += value

    clear ? resultBox.innerHTML = value : resultBox.innerHTML += value
}