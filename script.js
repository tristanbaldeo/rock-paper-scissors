let choice = Math.floor(Math.random() * 3);

function getComputerChoice () {
    if (choice == 0) {
        return "Rock";
    }
    else if (choice == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());