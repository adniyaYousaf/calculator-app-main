const keyBtn = document.querySelectorAll('#addExpression');
const delBtn = document.querySelector('#del');
const equalBtn = document.querySelector('#equal');
const resetBtn = document.querySelector('#reset');
const text = document.querySelector('#text');
const theme = document.querySelector('#themeBtn');
const numbers = document.querySelector('#numbers');
const btn = document.querySelector('#btns');
let str = "";
text.textContent = str;
let x = 0;

keyBtn.forEach((key) => {
    key.addEventListener('click', () => {
        text.innerHTML += key.textContent;
    })
})

delBtn.addEventListener('click', () => {
    const input = text.textContent;
    text.textContent = input.slice(0, -1);
})

resetBtn.addEventListener('click', () => {
    text.textContent = '';
})

equalBtn.addEventListener('click', () => {
    if (text.textContent !== "") {
        text.textContent = eval(text.textContent);
    }
})
theme.addEventListener('click', () => {
    if (x === 0) {
        document.documentElement.style.setProperty("--left", `93.7%`);
        document.querySelector('#body').style.background = ' hsl(0, 0%, 90%)';
        text.style.background = 'white';
        text.style.color = 'hsl(224, 36%, 15%)'
        numbers.style.background = 'hsl(0, 5%, 81%)';
        btn.style.background = 'hsl(0, 5%, 81%)';
        x = 1;

    } else {
        document.documentElement.style.setProperty("--left", `89.7%`);
        document.querySelector('#body').style.background = 'hsl(222, 26%, 31%)';
        text.style.background = 'hsl(224, 36%, 15%)';
        numbers.style.background = 'hsl(223, 31%, 20%)';
        btn.style.background = 'hsl(223, 31%, 20%)';
        text.style.color = 'white';
        x = 0;

    }
})
