playGame();

function playGame() {
  const TARGET_SCORE = 5;
  let humanScore = 0;
  let computerScore = 0;
  const humanHandElement = document.querySelector("#human-hand");
  const computerHandElement = document.querySelector("#computer-hand");
  const handButtons = document.querySelectorAll("#hand-buttons button");
  const restartButton = document.querySelector("#restart-button");

  handButtons.forEach((btn) => {
    btn.addEventListener("click", play);
  });

  restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    showHideEndScreen("hide");
    displayUpdatedScore(humanScore, computerScore);
    humanHandElement.innerHTML = "";
    computerHandElement.innerHTML = "";
    displayBanner("draw"); // hackish solution to remove the 'winner' banner
  });

  function play(e) {
    if (isGameOver(humanScore, computerScore, TARGET_SCORE)) {
      return;
    }
    const humanChoice = e.target.dataset.name;
    const computerChoice = getComputerChoice();
    displayHand(
      humanChoice,
      computerChoice,
      humanHandElement,
      computerHandElement,
    );
    const winner = playRound(humanChoice, computerChoice);
    displayBanner(winner);
    if (winner === "human") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
    displayUpdatedScore(humanScore, computerScore);
    if (isGameOver(humanScore, computerScore, TARGET_SCORE)) {
      showHideEndScreen("show");
      return;
    }
  }
}

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

function playRound(humanChoice, computerChoice) {
  console.log(computerChoice, humanChoice);
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

function createHand(hand) {
  const img = document.createElement("img");
  img.setAttribute("width", 45);
  img.setAttribute("height", 45);
  img.setAttribute("src", `./asset/${hand.toLowerCase()}.svg`);
  return img;
}

function displayHand(
  humanHand,
  computerHand,
  humanHandElement,
  computerHandElement,
) {
  humanHandElement.innerHTML = "";
  computerHandElement.innerHTML = "";
  humanHandElement.appendChild(createHand(humanHand));
  computerHandElement.appendChild(createHand(computerHand));
}

function displayUpdatedScore(humanScore, computerScore) {
  const humanScoreElement = document.querySelector("#human-score");
  const computerScoreElement = document.querySelector("#computer-score");
  humanScoreElement.innerText = humanScore;
  computerScoreElement.innerText = computerScore;
}

function displayBanner(winner) {
  const humanBannerElement = document.querySelector("#human-banner");
  const computerBannerElement = document.querySelector("#computer-banner");
  console.log(winner);
  if (winner === "human") {
    humanBannerElement.classList.remove("hidden");
    computerBannerElement.classList.add("hidden");
  } else if (winner === "computer") {
    humanBannerElement.classList.add("hidden");
    computerBannerElement.classList.remove("hidden");
  } else {
    humanBannerElement.classList.add("hidden");
    computerBannerElement.classList.add("hidden");
  }
}

function showHideEndScreen(opt) {
  const endScreenElement = document.querySelector("#end-screen");
  if (opt === "show") {
    endScreenElement.classList.remove("hidden");
  } else if (opt === "hide") {
    endScreenElement.classList.add("hidden");
  }
}

function isGameOver(humanScore, computerScore, targetScore) {
  return humanScore === targetScore || computerScore === targetScore;
}
