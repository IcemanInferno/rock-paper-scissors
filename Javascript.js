function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    let outcome = "";
    if(playerSelection === "rock"){
        switch(computerSelection){
            case "rock":
                outcome = "draw";
                break;
            case "paper":
                outcome = "lose";     
                break;
            case "scissors":
                outcome = "win"
                break;
        }
    }
    else if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                outcome = "win";
                break;
            case "paper":
                outcome = "draw";
                break;
            case "scissors":
                outcome = "lose";
                break;
        }
    }
    else if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                outcome = "lose";
                break;
            case "paper":
                outcome = "win";
                break;
            case "scissors":
                outcome = "draw";
                break;
        }
    }

    switch(outcome){
        case "win":
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;            
        case "lose":
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;            
        case "draw":
            return `Draw! We both played ${computerSelection}`;
    }
}

function resetScoreboard() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";   
    result.style.color = "red";
}

function updateScoreboard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(playerScore >= 5) {
        result.textContent = "You Win!";
        result.style.color = "green";
    }
    else if(computerScore >= 5) {
        result.textContent = "You Lose!";
        result.style.color = "blue";
    }
}

function play(playerSelection) {    
    var computerSelection = computerPlay();

    if(playerScore >= 5 || computerScore >= 5) resetScoreboard();

    result.textContent = playRound(playerSelection, computerSelection);
    updateScoreboard();
    
}

// Execute game on button click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id);
    });
});

//Results Scoreboard
let playerScore = 0;
let computerScore = 0;

const computerScoreDisplay = document.querySelector('#computerScore');
const playerScoreDisplay = document.querySelector('#playerScore');
const scoreboard = document.querySelector('#scoreboard');
const result = document.querySelector('#result');

updateScoreboard();


/*
    --SCORE--
PLAYER      COMPUTER
   5           4

   PLAYER WINS!
*/

