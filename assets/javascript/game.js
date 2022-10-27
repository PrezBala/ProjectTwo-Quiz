const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
        question: 'What is Ashers middle name',
        choice1: 'Taco',
        choice2: 'Pinto',
        choice3: 'Daniel',
        choice4: 'Herbert',
        answer: 3,
    },
    {
        question: 'Capital of the UK',
        choice1: 'Bombay',
        choice2: 'Mumbai',
        choice3: 'Sweden',
        choice4: 'London',
        answer: 4,
    },
    {
        question: 'When is Sabs birthday?',
        choice1: '22nd June 1988',
        choice2: '31st December 1912',
        choice3: '04th July 1455',
        choice4: '12th July 1988',
        answer: 1,
    },
]
questionCounter
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {

        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset ['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {

            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {

            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000) 
    })
})

incrementScore = num => {
        score +=num
        scoreText.innerText = score
}

startGame()