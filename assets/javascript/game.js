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
        question: 'Who is Tony Stark’s father?',
        choice1: 'Lance Stark',
        choice2: 'Peter Stark',
        choice3: 'Howard Stark',
        choice4: 'Jimmy Stark',
        answer: 3,
    },
    {
        question: 'What type of doctor is Doctor Strange?',
        choice1: 'Dentist',
        choice2: 'Neurosurgeon',
        choice3: 'Anaesthetist',
        choice4: 'Psychiatrist',
        answer: 3,
    },
    {
        question: 'Who was able to pick up Thor’s hammer in Endgame?',
        choice1: 'Batman',
        choice2: 'Thanos',
        choice3: 'Spiderman',
        choice4: 'Captain America',
        answer: 4,
    },
    {
        question: 'Black Panther is set in which fictional country?',
        choice1: 'Wakanda',
        choice2: 'Jinbostan',
        choice3: 'Codeinsitute Kingdom',
        choice4: 'Tacoandpizzastan',
        answer: 1,
    },
    {
        question: 'Who is the Winter Soldier?',
        choice1: 'Bucky',
        choice2: 'Bruce',
        choice3: 'Natasha',
        choice4: 'Prasena',
        answer: 1,
    },
    {
        question: 'Stan Lee made his final cameo in which Marvel movie?',
        choice1: 'Spiderman No Way Home',
        choice2: 'Avengers: Endgame',
        choice3: 'Black Panther',
        choice4: 'Iron Man 3',
        answer: 2,
    },
    {
        question: 'Whos the villain in Thor: Love and Thunder?',
        choice1: 'Surtur',
        choice2: 'Thanos',
        choice3: 'Adam',
        choice4: 'Gorr the God Butcher',
        answer: 4,
    },
    {
        question: 'Who is the firstborn child of Odin?',
        choice1: 'Loki',
        choice2: 'Hela',
        choice3: 'Thor',
        choice4: 'Hank',
        answer: 2,
    }, 
    {
        question: 'What are the names of Wandas twins?',
        choice1: 'Violet and Scarlett',
        choice2: 'Thorim and Samson',
        choice3: 'Billy and Tommy',
        choice4: 'Jack and Jill',
        answer: 3,
    }, 
    {
        question: 'What does TVA stand for?',
        choice1: 'Time Villains Association',
        choice2: 'Time Variance Authority',
        choice3: 'Thunder Victims Abandoned',
        choice4: 'Thunder Variance Aberration',
        answer: 2,
    }, 


]
questionCounter
const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

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
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

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