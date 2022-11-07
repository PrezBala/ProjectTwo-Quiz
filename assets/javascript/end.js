/* set const values start*/
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5; // Set limit to Max scores

/* set const values end*/


/* final highscore save functionaility start*/
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => { 
    e.preventDefault(); 

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    window.localStorage.clear(); //try this to clear all local storage

    
};

/* final highscore save functionaility start*/