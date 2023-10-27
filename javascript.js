//variables
let i = 0;
//prompt for player choicef
let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let upPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

//generating comptuer choice
function getComputerChoice() {
    i = Math.floor(Math.random() * 3);
    let compChoice;
    if (i == 0) {
        compChoice = "Rock";    
    }
    else if (i == 1) {
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissors"
    }
    return compChoice;
}

function youWin(upPlayerChoice, compChoice) {
    return "You won! " + upPlayerChoice + " beats " + compChoice;
}
function youLost(upPlayerChoice, compChoice) {
    return "You lost! " + compChoice + " beats " + upPlayerChoice;
}

    const compChoice = getComputerChoice();

function playGame(compChoice, upPlayerChoice) {
    if (upPlayerChoice == compChoice) {
        "You drew! " + upPlayerChoice + " is the same as " + compChoice
    }
    else if (upPlayerChoice == "Rock" && compChoice == "Paper") {
        return youLost(upPlayerChoice, compChoice)
    }
    else if (upPlayerChoice == "Rock" && compChoice == "Scissors") {
        return youWin(upPlayerChoice, compChoice)
    }
    else if (upPlayerChoice == "Paper" && compChoice == "Scissors") {
        return youLost(upPlayerChoice, compChoice)
    }
    else if (upPlayerChoice == "Paper" && compChoice == "Rock") {
        return youWin(upPlayerChoice, compChoice)
    }
    else if (upPlayerChoice == "Scissors" && compChoice == "Rock")
        return youLost(upPlayerChoice, compChoice)
    else if (upPlayerChoice == "Scissors" && compChoice == "Paper") {
        return youWin(upPlayerChoice, compChoice)
    }
}

console.log(playGame(compChoice, upPlayerChoice))