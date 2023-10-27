let i = 0;

function getComputerChoice() {
    i = Math.floor(Math.random() * 3);
    let choice = "";
    if (i == 0) {
        choice = "Rock";
    }
    else if (i == 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissor"
    }
    return choice;
}

console.log(getComputerChoice());