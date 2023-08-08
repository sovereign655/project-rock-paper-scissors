//Game variables
let roundNumberUI = 1;
let playerScoreUI = 0;
let computerScoreUI = 0;
let option = "";

const roundsInfo = document.getElementById('roundsInfo');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const computerChoice = document.getElementById('computerChoice');
const gameResult = document.getElementById('gameResult');
const CCrock = document.getElementById('CCrock');
const CCpaper = document.getElementById('CCpaper');
const CCscissors = document.getElementById('CCscissors');
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playersScissors = document.getElementById('playersScissors');
const year = document.getElementById('year');
const restart = document.getElementById('restart');

restart.addEventListener("click", () => restartGame());
playerRock.addEventListener("click", () => playMatch('rock'));
playerPaper.addEventListener("click", () => playMatch('paper'));
playersScissors.addEventListener("click", () => playMatch('scissors'));

const restartGame = () => {

    restart.style.visibility = "hidden";
    playerRock.style.visibility = "visible";
    playerPaper.style.visibility = "visible";
    playersScissors.style.visibility = "visible";
    computerChoice.textContent = "What will the AI pick?";
    gameResult.textContent = "who will win round one?";
    roundNumberUI = 1;
    playerScoreUI = 0;
    computerScoreUI = 0;
    roundsInfo.textContent = "round: " + roundNumberUI;
    playerScore.textContent = "Player: " + playerScoreUI;
    computerScore.textContent = "computer: " + computerScoreUI;
    option = "";
    CCrock.style.backgroundColor = "#1f2c39";
    CCpaper.style.backgroundColor = "#1f2c39";
    CCscissors.style.backgroundColor = "#1f2c39";
}

const gameOver = () => {

    restart.style.visibility = "visible";
    playerRock.style.visibility = "hidden";
    playerPaper.style.visibility = "hidden";
    playersScissors.style.visibility = "hidden";
}

const computerOption = () => {

    let Selector = Math.floor(Math.random() * 3);
    let Option;

    if (Selector === 0) {
        Option = "rock";
        CCrock.style.backgroundColor = "#bdc3c7";
        CCpaper.style.backgroundColor = "#1f2c39";
        CCscissors.style.backgroundColor = "#1f2c39";
    } else if (Selector === 1) {
        Option = "paper";
        CCrock.style.backgroundColor = "#1f2c39";
        CCpaper.style.backgroundColor = "#6ca6c1ff";
        CCscissors.style.backgroundColor = "#1f2c39";
    } else if (Selector === 2) {
        Option = "scissors";
        CCrock.style.backgroundColor = "#1f2c39";
        CCpaper.style.backgroundColor = "#1f2c39";
        CCscissors.style.backgroundColor = "#ffe66dff";
    }

    return Option;
}

const playMatch = (playerChoice) => {

    option = computerOption();

    if (option === playerChoice) {

        updateUI("draw");

    } else if (playerChoice === "rock" && option === "scissors" ||
        playerChoice === "scissors" && option === "paper" ||
        playerChoice === "paper" && option === "rock") {

        updateUI("won")

    } else if (playerChoice === "scissors" && option === "rock" ||
        playerChoice === "paper" && option === "scissors" ||
        playerChoice === "rock" && option === "paper") {

        updateUI("lost")
    }
}

const updateUI = (result) => {
    roundNumberUI++;
    roundsInfo.textContent = "round: " + roundNumberUI;

    if (result === "draw") {

        computerChoice.textContent = "The AI picked: " + option;
        gameResult.textContent = "the last round was a draw"


    } else if (result === "won") {
        playerScoreUI++;
        playerScore.textContent = "Player: " + playerScoreUI;
        if (playerScoreUI > 4) {
            playerScoreUI++;
            roundsInfo.textContent = "YOU WON!";
            gameResult.textContent = "Congratulations! You beat me!";
            gameOver();
        } else {
            computerChoice.textContent = "The AI picked: " + option;
            gameResult.textContent = "You won last round"
        }

    } else if (result === "lost") {
        computerScoreUI++;
        computerScore.textContent = "computer: " + computerScoreUI;
        if (computerScoreUI > 4) {
            computerScoreUI++;
            roundsInfo.textContent = "YOU LOST";
            gameResult.textContent = "Beaten by an AI 🤦";
            gameOver();
        } else {
            computerChoice.textContent = "The AI picked: " + option;
            gameResult.textContent = "You lost last round"
        }
    }
}