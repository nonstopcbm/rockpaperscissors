let basicPlayer = prompt("Select Rock, Paper, or Scissors");
let player = basicPlayer.toUpperCase();

let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay(choices) {
    let computer = choices[Math.floor(Math.random() * choices.length)];
    return computer
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Its a tie!");
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        alert("You lose! Computer chose Paper.");
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        alert("You win! Computer chose Scissors.");
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        alert("You win! Computer chose Rock.");
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        alert("You lose! Computer chose Scissors.");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        alert("You win! Computer chose Paper.");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        alert("You lose! Computer chose Rock");
    } else { alert("Error, try again") }
}

const playerSelection = player;
const computerSelection = computerPlay(choices);

playRound(playerSelection, computerSelection)