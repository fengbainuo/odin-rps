const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

const choices = [playerSelection, getComputerChoice()];

function whoWins(x, y) {
    if (x == 0) {
        return `You win, ${y[0]} beats ${y[1]}!`;
    } else {
        return `You lose, ${y[1]} beats ${y[0]}!`;
    }
}

function playRound(choices) {
    if (choices[0] == choices[1]) {
        return "Draw!";
    } else if (choices.includes("rock") && choices.includes("paper")) {
        const winner = choices.indexOf("paper");
        return whoWins(winner, choices);
    } else if (choices.includes("paper") && choices.includes("scissors")) {
        const winner = choices.indexOf("scissors");
        return whoWins(winner, choices);
    } else {
        const winner = choices.indexOf("rock");
        return whoWins(winner, choices);
    }
}

console.log(playRound(choices));