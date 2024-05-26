let computerChoice = Math.floor(Math.random() * 3);
let humanChoice = prompt("Rock, paper, or scissors?")
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    if (humanChoice.toLowerCase() == "rock") {
        return "rock"
    } else if (humanChoice.toLowerCase() == "paper") {
        return "paper"
    } else if (humanChoice.toLowerCase() == "scissors") {
        return "scissors"
    } else {
        return "Invalid option. Please try again!"
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked ${humanChoice}!`)
    console.log(`Computer picked ${computerChoice}!`)

    if (humanChoice == computerChoice) {
        return "It's a tie!"
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore += 1
        return "You lose! Rock beats scissors"
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1
        return "You lose! Paper beats rock"
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore += 1
        return "You lose! Rock beats scissors"
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        return "You win! Rock beats scissors"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        return "You win! Paper beats rock"
    } else {
        humanScore += 1
        return "You win! Scissors beats paper"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

alert(playRound(humanSelection, computerSelection) +  `\nHuman score: ${humanScore}` + `\nComputer score: ${computerScore}`)