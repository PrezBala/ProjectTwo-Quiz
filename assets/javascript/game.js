const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions =[]

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '45',
        choice2: '3',
        choice3: '4',
        choice4: 'Apple',
        answer: 3,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '45',
        choice2: '3',
        choice3: '4',
        choice4: 'Apple',
        answer: 3,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '45',
        choice2: '3',
        choice3: '4',
        choice4: 'Apple',
        answer: 3,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '45',
        choice2: '3',
        choice3: '4',
        choice4: 'Apple',
        answer: 3,
    },
]
