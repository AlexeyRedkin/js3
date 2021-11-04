const defaultMinValue = -1000
const defaultMaxValue = 1000

let minValue = getValue('Минимальное знание числа для игры', defaultMinValue)
let maxValue = getValue('Максимальное знание числа для игры', defaultMaxValue)
function getValue(message, Value) {
    let UserValue = prompt(message, Value)
    return UserValue
}
// let minValue = parseInt(prompt('Минимальное знание числа для игры','-1000'));
// let maxValue = parseInt(prompt('Максимальное знание числа для игры','1000'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -1000;
    maxValue = 1000;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            showQuestion()
            // const questions = [`ОНО ${answerNumber }?`, `НЕ ${answerNumber }?`, `Даладно ${answerNumber }?` ] 
            // var item = questions[Math.floor(Math.random()*questions.length)];
            // answerField.innerText = item;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === + 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            showQuestion()
            // const questions = [`ОНО ${answerNumber }?`, `НЕ ${answerNumber }?`, `Даладно ${answerNumber }?` ] 
            // var item = questions[Math.floor(Math.random()*questions.length)];
            // answerField.innerText = item;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answers = [`Да это легко! Ты загадал... ${answerNumber }`, `Наверное, это число...${answerNumber }`, `Вот ОНО ${answerNumber }` ] 
        var item = answers[Math.floor(Math.random()*answers.length)];
        answerField.innerText = item
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click',  function refreshPage() {
    if (confirm("Выхотите начать заново")) {
        location.reload();
    }
} )

function showQuestion() {
    const questions = [`ОНО ${answerNumber }?`, `НЕ ${answerNumber }?`, `Даладно ${answerNumber }?` ] 
            var item = questions[Math.floor(Math.random()*questions.length)];
            answerField.innerText = item;
    
}