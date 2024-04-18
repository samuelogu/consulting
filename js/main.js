let num = document.getElementsByClassName("num");
let operator = document.getElementsByClassName("operator");
let eqn = document.getElementById('eqn');
let del = document.getElementById('delete')

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    element.addEventListener('click', () => {
        let value = element.value;
        console.log(value);
    })
}

for (let index = 0; index < operator.length; index++) {
    const element = operator[index];
    element.addEventListener('click', () => {
        let value = element.value;
        console.log(value);
    })
}

eqn.addEventListener('click', calculate)
del.addEventListener('click', backspace)

function calculate() {
    console.log('calculate');
}

function backspace() {
    console.log('backspace');
}