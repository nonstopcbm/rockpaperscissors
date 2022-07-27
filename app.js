let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay(choices) {
    let computer = choices[Math.floor(Math.random() * choices.length)];
    return computer
}

function playRound(computerSelection) {
    let playerSelection = prompt("Select Rock, Paper, or Scissors").toUpperCase();
    if (playerSelection === computerSelection) {
        console.log("Its a tie!");
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        console.log("You lose! Computer chose Paper.");
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log("You win! Computer chose Scissors.");
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log("You win! Computer chose Rock.");
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log("You lose! Computer chose Scissors.");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log("You win! Computer chose Paper.");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log("You lose! Computer chose Rock");
    } else { console.log("Error, try again") }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay(choices);
        playRound(computerSelection);
    }
}

game()

// let choicesObject = {
//   'rock' : {
//     'rock' : 'draw',
//     'scissor' : 'win',
//     'paper' : 'lose'
//   },
//   'scissor' : {
//     'rock' : 'lose',
//     'scissor' : 'draw',
//     'paper' : 'win'
//   },
//   'paper' : {
//     'rock' : 'win',
//     'scissor' : 'lose',
//     'paper' : 'draw'
//   }
// }


// function game(input){
//     let choices = ["rock", "paper", "scissor"];
//     let num = Math.floor(Math.random()*3);

//     let computerChoice = choices[num];
//         let result

//     switch(choicesObject[input][computerChoice]){
//         case 'win':
//         result = "YOU WIN";
//         break;
//       case 'lose':
//         result = "YOU LOSE";
//         break;
//       default:
//         result = "DRAW";
//         break;
//     }
//     console.log(result);
//         //document.getElementById('result').textContent = result;
// }

// game('paper');