function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playerInput(){
    let answer = prompt("Please enter rock, paper or scissors").toLowerCase();    
    if(answer === "rock" || answer === "scissors" || answer === "paper") {    
        return answer;
    }
    else {
        return null;
    }
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
                outcome = "win";
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
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case "lose":
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case "draw":
            return `Draw! We both played ${computerSelection}`;
    }
}

function game(){
    for (let count = 0; count < 5; count++) {

        playerSelection = playerInput();
        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}

var computerSelection;
var playerSelection;

game();