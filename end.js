const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []; 
//To either load the highscore from storage of available, or if using for the first time, initializes an empty array
const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log('btn clicked!');
    e.preventDefault();
    const score  ={
        score: Math.floor(Math.random()*100),
        user: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score-a.score);
    highScores.splice(5);

    console.log(highScores);
};

