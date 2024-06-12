let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
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

// function getHumanChoice() {
//     let correctInput = false;

//     while (!correctInput) {
//         let humanChoice = prompt("Rock, paper, or scissors?")
//         if (humanChoice == null) {
//             break;
//         } else if (humanChoice.toLowerCase() == "rock") {
//             correctInput = true;
//             return "rock"
//         } else if (humanChoice.toLowerCase() == "paper") {
//             correctInput = true;
//             return "paper"
//         } else if (humanChoice.toLowerCase() == "scissors") {
//             correctInput = true;
//             return "scissors"
//         } else {
//             alert("Invalid option. Please try again!");
//         }
//     }
// }

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log(`You picked ${humanChoice}!`)
    console.log(`Computer picked ${computerChoice}!`)

    let result;
    if (humanChoice == computerChoice) {
        result = "It's a tie!"
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore += 1
        result = "You lose! Rock beats scissors"
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1
        result = "You lose! Paper beats rock"
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore += 1
        result = "You lose! Rock beats scissors"
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        result = "You win! Rock beats scissors"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        result = "You win! Paper beats rock"
    } else {
        humanScore += 1
        result = "You win! Scissors beats paper"
    }

    displayResult(humanChoice, computerChoice);
}

function displayResult(humanChoice, computerChoice) {
    document.querySelector(".player-result").textContent = `You picked ${humanChoice}!`;
    document.querySelector(".cpu-result").textContent = `Computer picked ${computerChoice}!`
}

// function playGame() {
//     while (humanScore < 5 && computerScore < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         alert(playRound(humanSelection, computerSelection) +  `\nHuman score: ${humanScore}` + `\nComputer score: ${computerScore}`)

//     if (humanScore === 5) {
//         alert(`You win! You beat the computer in the series ${humanScore}-${computerScore}`)
//     } else if (computerScore === 5) {
//         alert(`You lose! The computer wins the series ${computerScore}-${humanScore}`)
//     }}
// }

// playGame();

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
});