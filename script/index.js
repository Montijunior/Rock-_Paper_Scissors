let section = document.querySelector('section');
let buttons = document.querySelectorAll('button');
let scorePlayer = document.querySelector('.P-score');
let scoreComputer = document.querySelector('.C-score');

let resultText = document.createElement('div');
resultText.classList.add('roundResult');
section.insertBefore(resultText,section.lastElementChild);

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
       let round = playRound(button.id,getComputerChoice());
        resultText.textContent = round;
        isGameOver();
    })
});




function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === computerSelection) {
        // resultText.textContent = round;
        resultText.style.color = 'white';
        resultText.style.backgroundColor = 'black';
        return `Tie !! ${playerSelection} equals ${computerSelection}`;

    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerScore === 'Rock')) {
            playerScore++;
            scorePlayer.textContent = playerScore;
            resultText.style.backgroundColor = 'green';
            resultText.style.color = 'white';
            return `You win !! ${playerSelection} beats ${computerSelection}.`
        } else {
            computerScore++;
            scoreComputer.textContent = computerScore;
            resultText.style.backgroundColor = 'red';
            resultText.style.color = 'white';
            return `You loose !! ${computerSelection} beats ${playerSelection}.`

        }
        
    
    }
    function isGameOver() {
        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach((button)=>{
                button.disabled = true;
            });
        }
    }


