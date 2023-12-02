//Random computer choice
function getComputerChoice() {
    let values = ['rock','paper','scissors'];
    let random = Math.floor((Math.random() * values.length));
    let choice = values[random];
    return choice;
}




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
        return `You Win !! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win !! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win !! ${playerSelection} beats ${computerSelection}`;
    }
}