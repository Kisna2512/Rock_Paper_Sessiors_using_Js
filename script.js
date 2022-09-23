const ComputerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const PossibleChoices = document.querySelectorAll("button");
let userch;
let compsch;
let result;
PossibleChoices.forEach((PossibleChoice) =>
  PossibleChoice.addEventListener("click", (e) => {
    userch = e.target.id;
    userChoice.innerHTML = userch;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use PossibleChoices.length

  if (randomNumber === 1) {
    compsch = "rock";
  }
  if (randomNumber === 2) {
    compsch = "scissors";
  }
  if (randomNumber === 3) {
    compsch = "paper";
  }
  console.log(randomNumber);
  ComputerChoice.innerHTML = compsch;
}

function getResult() {
  if (compsch === userch) {
    result = "its a draw";
  }
  if (compsch === "rock" && userch === "paper") {
    result = "You Win!";
  }
  if (compsch === "rock" && userch === "scissors") {
    result = "You lost!";
  }
  if (compsch === "paper" && userch === "scissors") {
    result = "You win!";
  }
  if (compsch === "paper" && userch === "rock") {
    result = "You lose!";
  }
  if (compsch === "scissors" && userch === "rock") {
    result = "You win!";
  }
  if (compsch === "scissors" && userch === "paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
