function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumachoice() {
  const choice = prompt("Rock Paper or Scissors");
  if (choice.toLowerCase() === "rock") {
    return "rock";
  } else if (choice.toLowerCase() === "paper") {
    return "paper";
  } else if (choice.toLowerCase() === "scissors") {
    return "scissors";
  }
}

function playRound(computerChoice, humanChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else if (computerChoice === "scissors") {
      return "human";
    } else {
      return "draw";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer";
    } else if (computerChoice === "rock") {
      return "human";
    } else {
      return "draw";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else if (computerChoice === "paper") {
      return "human";
    } else {
      return "draw";
    }
  } else {
    return "invalid";
  }
}

function playGame() {
  const SCORE_GOAL = 5;
  let message = "";
  let scoreboard = "";
  let computerScore = 0;
  let humanScore = 0;

  while (computerScore !== SCORE_GOAL && humanScore !== SCORE_GOAL) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumachoice();
    let roundWinner = playRound(computerChoice, humanChoice);
    if (roundWinner === "human") {
      message = `Computer: ${computerChoice} | Human: ${humanChoice} (WINNER)`;
      humanScore += 1;
      scoreboard = `Computer: ${computerScore} | Human: ${humanScore}`;
    } else if (roundWinner == "computer") {
      message = `Computer: ${computerChoice} (WINNER) | Human: ${humanChoice}`;
      computerScore += 1;
      scoreboard = `Computer: ${computerScore} | Human: ${humanScore}`;
    } else if (roundWinner === "draw") {
      message = `Computer: ${computerChoice} (DRAW) | Human: ${humanChoice} (DRAW)`;
      scoreboard = `Computer: ${computerScore} | Human: ${humanScore}`;
    } else {
      message = "Invalid Choice, Please try again!";
      scoreboard = `Computer: ${computerScore} | Human: ${humanScore}`;
    }
    console.clear();
    console.log(scoreboard);
    console.log(message);
  }

  if (computerScore === SCORE_GOAL) {
    console.clear();
    console.log("Computer WINS");
  } else if (humanScore === SCORE_GOAL) {
    console.clear();
    console.log("You WON");
  }
}
