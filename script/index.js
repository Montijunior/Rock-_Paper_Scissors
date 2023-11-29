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
        return `You draw!! ${computerSelection} equals ${playerSelection}`;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return console.log(`You loose!! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return `You loose!! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return `You loose!! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win!! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win!! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win!! ${playerSelection} beats ${computerSelection}`;
    }
}
// create the playerSelection input and should case insensitive

for (let i = 0; i < 5; i++) {
    const playerSelection1 = String(prompt('Select either Rock,Paper or Scissors'));
    const playerSelection = playerSelection1.toLowerCase();

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));

    let playerScore = 0;
    let computerScore = 0;

    let game = playRound(playerSelection,computerSelection);
    if (game.includes === "You win!!") {
        playerScore++
    } else {
        computerScore++;
    }
}