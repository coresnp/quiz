let questions = [
    {
        ask: `How to say "cachorro" in english?`,
        answerOne: "Dog",
        answerTwo: "Fish",
        answerThree: "Monkey",
        answerFour: "Cat",
        correct: "Dog",
    },
    {
        ask: `How to say "rato" in english?`,
        answerOne: "Key",
        answerTwo: "Phone",
        answerThree: "Mouse",
        answerFour: "Dog",
        correct: "Mouse",
    },
    {
        ask: `How to say "agua" in english?`,
        answerOne: "Earth",
        answerTwo: "Water",
        answerThree: "Fire",
        answerFour: "Wind",
        correct: "Water",
    }
];

let question = document.querySelector('.question');
let optionA = document.querySelector('.optionA');
let optionB = document.querySelector('.optionB');
let optionC = document.querySelector('.optionC');
let optionD = document.querySelector('.optionD');
let clickedOption = false;
let correctAnswer = 0;
let score = document.querySelector('.score');
score.innerText = correctAnswer + '/' + questions.length;

let i = 0
addQuestions(question, optionA, optionB, optionC, optionD);

function next() {
    if (i < (questions.length - 1)) {
        removeClass();
        i++
        addQuestions(question, optionA, optionB, optionC, optionD);
        startTimer();
        clickedOption = false;
    }
}
function pages() {
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('next')) {
            next();
        }

        if (el.classList.contains('option')) {
            delayTimer()
            clickedOption = true;

            if (el.innerText === questions[i].correct) {
                el.classList.add('green');
                correctAnswer++;
                score.innerText = correctAnswer + '/' + questions.length;
            } else {
                el.classList.add('red');

                if (optionA.innerText === questions[i].correct) {
                    optionA.classList.add('green');
                }
                if (optionB.innerText === questions[i].correct) {
                    optionB.classList.add('green');
                }
                if (optionC.innerText === questions[i].correct) {
                    optionC.classList.add('green');
                }
                if (optionD.innerText === questions[i].correct) {
                    optionD.classList.add('green');
                }
            }
        }

        // if (el.classList.contains('back') && i > 0) {
        //     removeClass();
        //     i--
        //     addQuestions(question, optionA, optionB, optionC, optionD);
        // }

    })
};

function addQuestions(ask, optionOne, optionTwo, optionThree, optionFour) {
    ask.innerText = questions[i].ask;
    optionOne.innerText = questions[i].answerOne;
    optionTwo.innerText = questions[i].answerTwo;
    optionThree.innerText = questions[i].answerThree;
    optionFour.innerText = questions[i].answerFour;
}

function removeClass() {
    if (optionA.classList.contains('green')) {
        optionA.classList.remove('green');
    }
    if (optionB.classList.contains('green')) {
        optionB.classList.remove('green');
    }
    if (optionC.classList.contains('green')) {
        optionC.classList.remove('green');
    }
    if (optionD.classList.contains('green')) {
        optionD.classList.remove('green');
    }
    if (optionA.classList.contains('red')) {
        optionA.classList.remove('red');
    }
    if (optionB.classList.contains('red')) {
        optionB.classList.remove('red');
    }
    if (optionC.classList.contains('red')) {
        optionC.classList.remove('red');
    }
    if (optionD.classList.contains('red')) {
        optionD.classList.remove('red');
    }
}

let p = document.querySelector('p');


function createSeconds(second) {
    const data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTimer() {
    let second = 20;
    const timer = setInterval(function () {
        if (!clickedOption) {
            second--;
        } else {
            clearInterval(timer);
        }
        p.innerHTML = second;
        if (second <= 0) {
            console.log('Anything');
            clearInterval(timer);
        }
    }, 1000);
}
function delayTimer() {
    let second = 0;
    const timer = setInterval(function () {
        second++;
        if (second === 1) {
            next();
        }
    }, 1000);
}


startTimer();
pages();

