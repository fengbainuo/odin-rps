const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const thisTurn = document.createElement('p');
const standing = document.createElement('p');
const winner = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

rock.addEventListener("click", function() {playRound("rock")});
paper.addEventListener("click", function() {playRound("paper")});
scissors.addEventListener("click", function() {playRound("scissors")});

result.append(thisTurn);
result.append(standing);

function whoWins(x, y) {
    if (x == 0) {
        thisTurn.textContent = `You win, ${y[0]} beats ${y[1]}!`;
        playerScore++;
        standing.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        if (playerScore == 5) {
            alert("You win!");
        };
    } else {
        thisTurn.textContent = `You lose, ${y[1]} beats ${y[0]}!`;
        computerScore++;
        standing.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        if (computerScore == 5) {
            alert("The computer wins!");
        };
    }
}

function playRound(x) {
    const choices = [x, getComputerChoice()];
    if (choices[0] == choices[1]) {
        thisTurn.textContent = "Draw!";
        standing.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
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
