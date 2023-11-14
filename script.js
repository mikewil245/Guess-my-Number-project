"use strict";
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".start-guessing").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    displayMessage("You guess correctly! 🔥🔥🔥");

    document.querySelector(".secret-box").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#00FF00";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too Low");

      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 4nem");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#ffa500";
  document.querySelector(".start-guessing").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".secret-box").textContent = "?";
});
