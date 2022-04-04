// global vars

// timer
var timerEl = document.querySelector(".timer");
var secondsLeft = 60;

// start screen
var startScreen = document.querySelector("#start-screen");

// to start quiz
var start = document.querySelector("#start-quiz");

// questions
var questionsEl = document.querySelector(".quest-asked");
var questionBoxEl = document.querySelector("#all-questions");
var answersEl = document.querySelector(".question-list");

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

questionsEl.style.display = "none";
answersEl.style.display = "none";

// starting the quiz
function startQuiz() {
    startScreen.style.display = "none";
    questionsEl.style.display = "block";
    answersEl.style.display = "block";
    questionNumber = 0
    startTime();
    setQuestion(questionNumber);
}

// timer function
function startTime() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time Left: " + secondsLeft;
        secondsLeft--;
        if (secondsLeft === 0 || questionNumber === questions.length) {
        secondsLeft--;
        clearInterval(timeInterval);
        questionsEl.style.display = "none";
        }
    }, 1000);
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

// checking the answer
function checkAnswer(event) {
    event.preventDefault();

    // creating an element inside html
}

// Events
start.addEventListener("click", startQuiz);