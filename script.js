"use strict";

// Declare constants and variables
const gameKeywords = ["rock", "paper", "scissors"];

// Select buttons
const playerRock = document.querySelector("#btn-rock");
const playerPaper = document.querySelector("#btn-paper");
const playerScissors = document.querySelector("#btn-scissors");

// Add event listeners
playerRock.addEventListener("click", (e) => playRound("rock"));
playerPaper.addEventListener("click", (e) => playRound("paper"));
playerScissors.addEventListener("click", (e) => playRound("scissors"));

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const gameResult = document.getElementById("game-winner");

// Return a random element from a given array
function chooseArrayElement(keywords) {
	return keywords[Math.floor(Math.random() * keywords.length)];
}

// Make a random choice between rock, paper, and scissors
function getComputerChoice() {
	return chooseArrayElement(gameKeywords);
}

// Compare two choices and return 0 (lose), 1 (win), or 2 (tie)
function compareChoices(computerSelection, playerSelection) {
	switch (playerSelection) {
		case "rock":
			if (computerSelection === "rock") {
				return 2;
			} else if (computerSelection === "paper") {
				return 0;
			} else if (computerSelection === "scissors") {
				return 1;
			}
		case "paper":
			if (computerSelection === "rock") {
				return 1;
			} else if (computerSelection === "paper") {
				return 2;
			} else if (computerSelection === "scissors") {
				return 0;
			}
		case "scissors":
			if (computerSelection === "rock") {
				return 0;
			} else if (computerSelection === "paper") {
				return 1;
			} else if (computerSelection === "scissors") {
				return 2;
			}
	}
}

let playerScore = 0;
let computerScore = 0;

// Compare the results of one round
function checkRoundWinner(result) {
	if (result === 0) {
		gameResult.textContent = "Tie.";
		return null;
	} else if (result === 1) {
		playerScore += 1;
		playerScoreDisplay.textContent = playerScore;
		if (playerScore >= 5) {
			gameResult.textContent = "Player wins the match.";
		} else {
			gameResult.textContent = "Player wins the round.";
		}
	} else if (result === 2) {
		computerScore += 1;
		computerScoreDisplay.textContent = computerScore;
		gameResult.textContent = "Computer wins.";
		if (computerScore >= 5) {
			gameResult.textContent = "Computer wins the match.";
		} else {
			gameResult.textContent = "Computer wins the round.";
		}
	}
}

// Play one round between computer and player
function playRound(playerChoice) {
	const computerChoice = getComputerChoice();
	const result = compareChoices(computerChoice, playerChoice);
	return checkRoundWinner(result);
}
