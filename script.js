const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let choices = [];

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

rock.addEventListener("click", function() {playRound("rock")});
paper.addEventListener("click", function() {playRound("paper")});
scissors.addEventListener("click", function() {playRound("scissors")});


function whoWins(x, y) {
    if (x == 0) {
        console.log(`You win, ${y[0]} beats ${y[1]}!`);
    } else {
        console.log(`You lose, ${y[1]} beats ${y[0]}!`);
    }
}

function playRound(x) {
    const choices = [x, getComputerChoice()];
    if (choices[0] == choices[1]) {
        console.log("Draw!");
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

/*
function game() {
    let winCounter = 0;
    let loseCounter = 0;
    const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];
    const playerSelection = prompt(`Round 1! Rock, paper or scissors?`).toLowerCase();
    const choices = [playerSelection, getComputerChoice()];
    const result = playRound(choices);
    if (result.includes("win")) {
        winCounter++;
    } else if (result.includes("lose")) {
        loseCounter++;
    };
    
    if (winCounter > loseCounter) {
        return("You win!");
    } else if (loseCounter > winCounter) {
        return("You lose!");
    } else {
        return("Draw");
    }
}

console.log(game());
*/

