// global vars

// timer
var time = document.querySelector(".timer");
var secondsLeft = 60;

// to start quiz
var start = document.querySelector("#start-quiz");

// questions
var questionsEl = document.querySelector("#questions");

// Array of questions
var questions = [
    {
    question: "What does HTML stand for?",
    answers: ["Home Tool Markup Language", "Hyper Text Markup Language", "Housing Traps Making Losers", "Hyperlinks Text Makes Language"],
    correct: "1"
    },
    {
    question: "What does CSS stand for?",
    answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: "2"
    },
    {
    question: "What is the correct HTML for referring to an external style sheet?",
    answers: ["<css src='stylesheet.css'>", "<stylesheet>mystyle.css</stylesheet>", "<style src='mystyle.css'>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>"],
    correct: "3"
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<scripting>", "<js>", "<javascript>"],
    correct: "0"
    },
    {
    question: "How can you add a comment in a JavaScript?",
    answers: ["//This is a comment", "'This is a comment", "<!--This is a comment-->", "/*This is a question"],
    correct: "0"
    },
]

// calling answers
var ans0 = document.querySelector("#answer-0");
var ans1 = document.querySelector("#answer-1");
var ans2 = document.querySelector("#answer-2");
var ans3 = document.querySelector("#answer-3");

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
    questionNumber = 0
    startTime();
    setQuestion(questionNumber);
}

// setting question ID's
function setQuestion(id) {
    if (id < questions.length) {
        questionsEl.textContent = questions[id].question;
        ans0.textContent = questions[id].answers[0];
        ans1.textContent = questions[id].answers[1];
        ans2.textContent = questions[id].answers[2];
        ans3.textContent = questions[id].answers[3];
    }
}

// Events
start.addEventListener("click", startQuiz);