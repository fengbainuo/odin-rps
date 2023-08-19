let options = ["rock", "paper", "scissors"];

let getComputerChoice = () => Math.floor(Math.random() * options.length);

console.log(getComputerChoice);