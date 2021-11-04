const defaultMinValue = -1000
const defaultMaxValue = 1000

let minValue = getValue('Минимальное знание числа для игры', defaultMinValue)
let maxValue = getValue('Максимальное знание числа для игры', defaultMaxValue)
function getValue(message, Value) {
    let UserValue = prompt(message, Value)
    UserValue = +UserValue;
    if (isNaN(UserValue)) {
        console.log(UserValue + ' не число');
        UserValue = Value 
    } else {
        console.log("num");
    }
    if (UserValue >= 1000){UserValue = 999}
    if (UserValue <= -1000){UserValue = -999}
    return UserValue
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// minValue=100
// maxValue=200
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
let answerNumberText = numberToWord(answerNumber)
answerField.innerText = `Вы загадали число ${answerNumberText }?`;

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
            showQuestion(answerNumber)
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
            showQuestion(answerNumber)
            // const questions = [`ОНО ${answerNumber }?`, `НЕ ${answerNumber }?`, `Даладно ${answerNumber }?` ] 
            // var item = questions[Math.floor(Math.random()*questions.length)];
            // answerField.innerText = item;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let answerNumberText = numberToWord(answerNumber)
        const answers = [`Да это легко! Ты загадал... ${answerNumberText }`, `Наверное, это число...${answerNumberText }`, `Вот ОНО ${answerNumberText }` ] 
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

function showQuestion(answerNumber) {
    let answerNumberText = numberToWord(answerNumber)
    const questions = [`ОНО ${answerNumberText}?`, `НЕ ${answerNumberText }?`, `Даладно ${answerNumberText}?` ] 
            var item = questions[Math.floor(Math.random()*questions.length)];
            answerField.innerText = item;
    
}

function numberToWord(number) {
    const words20 = {
        0: "",
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восомь",
        9: "девять",
        10: "десять",
        11: "одинадцат",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шетнадцать",
        17: "семнадцать",
        18: "восемнадцат",
        19: "девятнадцать"
        
    }
    const words100 = {
        0: "",
        2: "двадцать",
        3: "традцать",
        4: "сорок",
        5: "пятьдесят",
        6: "шетьдесят",
        7: "семдесят",
        8: "восемьдесят",
        9: "девяноста"
    }
    const words1000 = {
        1:"сто",
        2:"двести",
        3:"триста",
        4:"четыресто",
        5:"пятьсот",
        6:"шестьсот",
        7:"семьсот",
        8:"восемьсот",
        9:"девятсот"
    }
    let numberText = ""

    let minuse = ""
    if (Math.sign(number) == -1){
        minuse = "минус "
    }
    numberText += minuse
    number = Math.abs(number)
    if (number == 0){
        numberText += "ноль"
    }
    if (number > 0 && number <=19){
        numberText += words20[number]
    }
    if (number >= 20 && number <=99){
        // numberText = words100[number]
        var digits = number.toString().split('');
        var realDigits = digits.map(Number)
        // console.log(realDigits);
        numberText += words100[realDigits[0]] + " " + words20[realDigits[1]]
    }
    if (number >= 100 && number <=999){
        // numberText = words100[number]
        var digits = number.toString().split('');
        var realDigits = digits.map(Number)
        // console.log(realDigits);
        numberText += words1000[realDigits[0]] + " " + words100[realDigits[1]] + " " +  words20[realDigits[2]]
    }
    console.log(numberText);
    return numberText
  }
  numberToWord(0)
  numberToWord(-7)
  numberToWord(346)
  numberToWord(101)