// getComputerChoice : function,that randomly returns rock,paper or scissors.

function getComputerChoice() {
    let values = ['rock','paper','scissors'];
    let random = Math.floor((Math.random() * values.length));
    let choice = values[random];
    return choice;
}
// console.log(getComputerChoice()); working

// playRound(playerSelection,computerSelection) : function that plays a single round of RPS and returns the winner

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`You draw!! ${playerSelection} equals ${computerSelection}.`);
        // conditionals for player as winner
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'); {
        console.log(`You win!! ${playerSelection} beats ${computerSelection}`); 
    }  if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log(`YOu loose!! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log(`You loose!! ${computerSelection} beats ${playerSelection}`);
    } else  {
        console.log(`You loose again!! ${computerSelection} beats ${playerSelection}`);
    };
}

// create the playerSelection input and should case insensitive

const playerSelection1 = String(prompt('Select either Rock,Paper or Scissors'));
const playerSelection = playerSelection1.toLowerCase();
// console.log(playerSelection); working and case insensitive

const computerSelection = getComputerChoice();
// console.log(computerSelection); working
// console.log(playerSelection); working
