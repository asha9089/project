document.addEventListener("DOMContentLoaded", function () {
    // Load prior scores from local storage when the page loads
    loadPriorScores();
});

function startGame() {
    document.getElementById('play').classList.add('hidden');
    document.getElementById('guess').classList.remove('hidden');
    Game();
    
        }


function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const randomNumber = parseInt(localStorage.getItem('randomNumber'));

    if (userGuess === randomNumber) {
        document.getElementById('result').innerText = "Congratulations! you got it.";
        saveScore(userGuess);
    } else {
        document.getElementById('result').innerText = "oops try again.";
        if (userGuess > randomNumber) {
            document.getElementById('result').innerText = "too high.";
            saveScore(userGuess);
        } else {document.getElementById('result').innerText = "too low.";

        }}
    }
function Game() {
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem('randomNumber', randomNumber);
}



function saveScore(score) {
    const priorScores = JSON.parse(localStorage.getItem('priorScores')) || [];
    priorScores.push(score);
    localStorage.setItem('priorScores', JSON.stringify(priorScores));
}

function loadPriorScores() {
    const scoresList = document.getElementById('scoresList');
    scoresList.innerHTML = '';

    const priorScores = JSON.parse(localStorage.getItem('priorScores')) || [];
    priorScores.forEach(score => {
        const listItem = document.createElement('li');
        listItem.textContent = `Score: ${score}`;
        scoresList.appendChild(listItem);
    });
}

function showScores() {
    document.getElementById('guess').classList.add('hidden');
    document.getElementById('scores').classList.remove('hidden');
    loadPriorScores();
}

function hideScores() {
    document.getElementById('guess').classList.add('hidden');
    document.getElementById('scores').classList.add('hidden');
}
function resetGame() {
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("scores").classList.add("hidden");
}
