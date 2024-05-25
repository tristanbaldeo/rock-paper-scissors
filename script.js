function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice == 0) {
        return "rock";
    }
    else if (cpuChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let huChoice = prompt("Rock, paper, or scissors?")
    if (huChoice.toLowerCase() == "rock") {
        return "You picked rock!"
    } else if (huChoice.toLowerCase() == "paper") {
        return "You picked paper!"
    } else if (huChoice.toLowerCase() == "scissors") {
        return "You picked scissors!"
    } else {
        return "Invalid option. Please try again!"
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());