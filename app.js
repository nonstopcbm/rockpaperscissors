let playerSelection = prompt("Select Rock, Paper, or Scissors");
let finalPlayerSelection = playerSelection.toUpperCase();

let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerSelection(choices) {
    let finalComputerSelection = choices[Math.floor(Math.random() * choices.length)];
    return finalComputerSelection
}