// global vars

// timer
var time = document.querySelector(".timer");
var secondsLeft = 60;

// Array of questions
var questions = [
    {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
    },
    {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
    },
    {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
    },
    {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
    },
    {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
    },
]

// timer function
function startTime() {
    var timeInterval = setInterval(function() {
    if (time > 1) {
        timerEl.textContent = time;
        time--;
        }
        else if (time === 1) {
        timerEl.textContent = time;
        time--;
        }
        else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
        }
    }, 1000);
}

// starting the quiz
function startQuiz() {
    
}