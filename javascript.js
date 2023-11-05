//variables
let winCount = 0;
let lostCount = 0;
let drawCount = 0;

//prompt for player choicef

document.addEventListener("DOMContentLoaded", function() {
    const selection = document.querySelector(".selection");

selection.addEventListener("click", (event) => {
let playerChoice = event.target.id;

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

//Glboalizing variable

const compChoice = getComputerChoice();

//Output for decision
const results = document.querySelector(".result");

function youWin() {
    winCount++
    const win = document.createElement("h3");
    win.textContent = "You won! " + playerChoice + " beats " + compChoice;
    results.appendChild(win);
}
function youLost() {
    lostCount++
    const lost = document.createElement("h3");
    lost.textContent = "You lost! " + compChoice + " beats " + playerChoice;
    results.appendChild(lost)
}
//Decision check
function playGame(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        drawCount++
        const draw = document.createElement("h3");
        draw.textContent = "You drew";
        results.appendChild(draw);
        return
    }
    else if (playerChoice == "Rock" && compChoice == "Paper") {
        return youLost()
    }
    else if (playerChoice == "Rock" && compChoice == "Scissors") {
        return youWin()
    }
    else if (playerChoice == "Paper" && compChoice == "Scissors") {
        return youLost()
    }
    else if (playerChoice == "Paper" && compChoice == "Rock") {
        return youWin()
    }
    else if (playerChoice == "Scissors" && compChoice == "Rock")
        return youLost()
    else if (playerChoice == "Scissors" && compChoice == "Paper") {
        return youWin()
    }
}

    playGame(compChoice, playerChoice);
    if (winCount + drawCount + lostCount == 5) {
        game(lostCount, winCount, drawCount);
    }


function game(lostCount, winCount) {
    const finalResults = document.createElement("h1");
    finalResults.textContent = "Win count: " + winCount + " Lost count: " + lostCount;
    results.appendChild(finalResults);
    if (winCount > lostCount) {
        const wonResult = document.createElement("h1");
        wonResult.textContent = "Congrats, you won this BO5!";
        results.appendChild(wonResult);
    }
    else if (winCount < lostCount ) {
        const lostResult = document.createElement("h1");
        lostResult.textContent = "Oh NOOO! You lost this BO5!";
        results.appendChild(lostResult);
    }
    else { 
        const drawResult = document.createElement("h1");
        drawResult.textContent = "Wow... You tied?";
        results.appendChild(drawResult);
    }
}
});
});