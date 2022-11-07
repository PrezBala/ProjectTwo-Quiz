/* set const values start*/
const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
/* set const values end*/

/* map highscores list with score data*/
highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");

/* map highscores list with score data* end*/