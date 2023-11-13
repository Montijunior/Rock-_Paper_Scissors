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
    // let's start with computerSelection
    if (computerSelection === playerSelection) {
        return console.log(`You draw!! ${computerSelection} equals ${playerSelection}`);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return console.log(`You loose!! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return console.log(`You loose!! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return console.log(`You loose!! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
    }
}
// create the playerSelection input and should case insensitive

const playerSelection1 = String(prompt('Select either Rock,Paper or Scissors'));
const playerSelection = playerSelection1.toLowerCase();
// console.log(playerSelection); working and case insensitive

const computerSelection = getComputerChoice();
// console.log(computerSelection); working
// console.log(playerSelection); working


console.log(playRound(playerSelection,computerSelection));

// game function for the number of rounds
// see loops