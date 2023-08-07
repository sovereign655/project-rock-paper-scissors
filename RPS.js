let count = 0;


const playerSelection = () => {
    let playerChoice = prompt("Hey, lets play rock-paper-scissors, pick one").toLowerCase();

    while (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
        console.log(playerChoice + " is not an option... try again")
        playerChoice = prompt("rock-paper-scissors, pick one").toLowerCase();
    }

    console.log(playerChoice);
    return playerChoice;
}

const letComputerChoice = () => {

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

const play_RPS = () => {
    let result;
    let computerChoice = letComputerChoice();
    let playerResult = playerSelection();

    if (computerChoice === playerResult) {
        result = "draw!";

    } else if (playerResult === "rock" && computerChoice === "scissors" ||
        playerResult === "scissors" && computerChoice === "paper" ||
        playerResult === "paper" && computerChoice === "rock") {
        result = "you won";

    } else if (playerResult === "scissors" && computerChoice === "rock" ||
        playerResult === "paper" && computerChoice === "scissors" ||
        playerResult === "rock" && computerChoice === "paper") {
        result = "you lost";
    }

    console.log(computerChoice);
    console.log(result)

}

// while (count < 5) {
//     play_RPS();
//     count += 1;
// }
