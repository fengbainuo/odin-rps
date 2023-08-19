const options = ["rock", "paper", "scissors"];

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

function game() {
    let winCounter = 0;
    let loseCounter = 0;
    for (let i = 1; i < 6; i++) {
        const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];
        const playerSelection = prompt(`Round ${i}! Rock, paper or scissors?`).toLowerCase();
        const choices = [playerSelection, getComputerChoice()];
        const result = playRound(choices);
        if (result.includes("win")) {
            winCounter++;
        } else if (result.includes("lose")) {
            loseCounter++;
        }
    }
    
    if (winCounter > loseCounter) {
        return("You win!");
    } else if (loseCounter > winCounter) {
        return("You lose!");
    } else {
        return("Draw");
    }
}

console.log(game());

