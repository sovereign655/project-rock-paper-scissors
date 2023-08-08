
// const playerSelection = () => {
//     let playerChoice = prompt("Hey, lets play rock-paper-scissors, pick one").toLowerCase();

//     while (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
//         console.log(playerChoice + " is not an option... try again")
//         playerChoice = prompt("rock-paper-scissors, pick one").toLowerCase();
//     }

//     console.log(playerChoice);
//     return playerChoice;
// }



// const play_RPS = () => {
//     let result;
//     let computerChoice = letComputerChoice();
//     let playerResult = playerSelection();

//     if (computerChoice === playerResult) {
//         result = "draw!";

//     } else if (playerResult === "rock" && computerChoice === "scissors" ||
//         playerResult === "scissors" && computerChoice === "paper" ||
//         playerResult === "paper" && computerChoice === "rock") {
//         result = "you won";

//     } else if (playerResult === "scissors" && computerChoice === "rock" ||
//         playerResult === "paper" && computerChoice === "scissors" ||
//         playerResult === "rock" && computerChoice === "paper") {
//         result = "you lost";
//     }

//     console.log(computerChoice);
//     console.log(result)

// }
//Game stats
let roundNumberUI = 1;
let playerScoreUI = 0;
let computerScoreUI = 0;
let option = "";


// UI

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

/*
 * if game isn't over
 * player clicks a option
 * option tell AI to roll an option
 * after both are rolled,
 * update all scoreboards
 * if game is over disable options and add one to restart.
 */

playerRock.addEventListener("click",() => playMatch('rock'));
playerPaper.addEventListener("click",() => playMatch('paper'));
playersScissors.addEventListener("click",() => playMatch('scissors'));

const computerOption = () => {

    let Selector = Math.floor(Math.random() * 3); // select a random number between 0 & 3, rounded down.
    let Option;

    if (Selector === 0) {
        Option = "rock";
    } else if (Selector === 1) {
        Option = "paper";
    } else if (Selector === 2) {
        Option = "scissors";
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

    if (result === "draw" ) {

        computerChoice.textContent = "The AI picked: " + option;
        gameResult.textContent = "the last round was a draw"

        
    } else if (result === "won") {
        playerScoreUI++;
        playerScore.textContent = "Player " + playerScoreUI;
        computerChoice.textContent = "The AI picked: " + option;
        gameResult.textContent = "You won last round"
        
    } else if (result === "lost") {
        computerScoreUI++;
        computerScore.textContent = "computer: " + computerScoreUI;
        computerChoice.textContent = "The AI picked: " + option;
        gameResult.textContent = "You lost last round"
        
    }

    

}