//variables
let winCount = 0;
let lostCount = 0;
let drawCount = 0;

for (cnt = 0; cnt < 5; cnt ++) {
//prompt for player choicef
let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let upPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

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
function youWin(upPlayerChoice, compChoice) {
    winCount++
    return "You won! " + upPlayerChoice + " beats " + compChoice
}
function youLost(upPlayerChoice, compChoice) {
    lostCount++
    return "You lost! " + compChoice + " beats " + upPlayerChoice
}
//Glboalizing variable
    const compChoice = getComputerChoice();
//Decision check
function playGame(compChoice, upPlayerChoice) {
    if (upPlayerChoice == compChoice) {
        drawCount++
        return "You drew! " + upPlayerChoice + " is the same as " + compChoice
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
}
console.log(game(lostCount, winCount))