// console.log("hello from console");

/*
CC is short for "Computer controlled player"
step 1
how rock-paper-scissors is played:

    two players agree and begin to play,

    they decide if they are going to show 1 of three options:
    rock
    paper
    scissors

    from either perspective:
    if rock is played {
        it will win scissors is played.
        it will lose if paper is played.
    }
    if paper is played {
        it will win if rock is played.
        it will lose if scissors is played.
    }
    if scissors is played {
        it will win if paper is played.
        it will lose if rock is played.
    }

    if both players close the same option, it is a draw and a
    reroll can be decided.

*/

let player, CC;


const playerSelection = () => {
    let playerChoice = prompt("Hey, lets play rock-paper-scissors, pick one").toLowerCase();

    while (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper" ) {
        console.log(playerChoice + " is not an option... try again")
        playerChoice = prompt("rock-paper-scissors, pick one").toLowerCase();
    }

    console.log(playerChoice);
    return playerChoice;  
}

const letComputerChoice = () => {

    let Selector = Math.floor(Math.random() * 3); // select a random number between 0 & 3, rounded down.
    let Option;

    if (Selector === 0){
        Option = "rock";
    } else if (Selector === 1){
        Option = 'paper'
    } else if (Selector === 2) {
        Option = 'scissors'
    }

    console.log(Option);
    return Option;


}

playerSelection();
letComputerChoice();