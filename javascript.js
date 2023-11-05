//variables
let winCount = 0;
let lostCount = 0;
let drawCount = 0;

//prompt for player choicef

document.addEventListener("DOMContentLoaded", function() {
    const selection = document.querySelector(".selection");

    playerChoice = selection.addEventListener("click", (event) => {
    let target = event.target.id;
    console.log(target);
    return target;
    });

//generating comptuer choice
function getComputerChoice() {
    let i = 0;
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
//Output for decision
function youWin(playerChoice, compChoice) {
    winCount++
    return "You won! " + playerChoice + " beats " + compChoice
}
function youLost(playerChoice, compChoice) {
    lostCount++
    return "You lost! " + compChoice + " beats " + playerChoice
}
//Glboalizing variable
    const compChoice = getComputerChoice();
//Decision check
function playGame(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        drawCount++
        return "You drew! " + playerChoice + " is the same as " + compChoice
    }
    else if (playerChoice == "Rock" && compChoice == "Paper") {
        return youLost(playerChoice, compChoice)
    }
    else if (playerChoice == "Rock" && compChoice == "Scissors") {
        return youWin(playerChoice, compChoice)
    }
    else if (playerChoice == "Paper" && compChoice == "Scissors") {
        return youLost(playerChoice, compChoice)
    }
    else if (playerChoice == "Paper" && compChoice == "Rock") {
        return youWin(playerChoice, compChoice)
    }
    else if (playerChoice == "Scissors" && compChoice == "Rock")
        return youLost(playerChoice, compChoice)
    else if (playerChoice == "Scissors" && compChoice == "Paper") {
        return youWin(playerChoice, compChoice)
    }
}

const results = document.createElement("div");

console.log(playGame(compChoice, playerChoice))

function game(lostCount, winCount) {
    if (winCount > lostCount) {
        console.log("Lost count: " + lostCount);
        console.log("Win count: " + winCount);
        return "Congrats, you won this BO5!"
    }
    else if (winCount < lostCount ) {
        console.log("Lost count: " + lostCount);
        console.log("Win count: " + winCount);
        return "Oh NOOO! You lost this BO5!"
    }
    else { 
        console.log("Lost count: " + lostCount);
        console.log("Win count: " + winCount);
        console.log("Draw count: " + drawCount);
        return "Wow... You tied?"
    }
}
});