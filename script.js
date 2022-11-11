"use strict";

// Returns a random choice between rock paper and scissors
function getComputerChoice() {
    const keywords = ['rock', 'paper', 'scissors'];
    return keywords[Math.floor(Math.random()*keywords.length)]
}

// Take user choice from input, check if valid, and return as lowercase string
function getPlayerChoice() {
    const selection = prompt().toLowerCase();
    if (selection === 'rock' || selection === 'paper' || selection === 'scissors') {
        return selection
    } else {
        console.log('You must choose between rock, paper, or scissors');
    }
}

// Compare two choices and return 0 (lose), 1 (win), or 2 (tie)
function playRound(computerSelection, playerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 2;
            } else if (computerSelection === 'paper') {
                return 0;
            } else if (computerSelection === 'scissors') {
                return 1;
            };
        case 'paper':
            if (computerSelection === 'rock') {
                return 1;
            } else if (computerSelection === 'paper') {
                return 2;
            } else if (computerSelection === 'scissors') {
                return 0;
            };
        case 'scissors':
            if (computerSelection === 'rock') {
                return 0;
            } else if (computerSelection === 'paper') {
                return 1;
            } else if (computerSelection === 'scissors') {
                return 2;
            };
    }
}

function displayMessage(matchResult) {
    if (matchResult === 0) {
        console.log('Computer wins!');
    } else if (matchResult === 1) {
        console.log('Player wins!');
    } else if (matchResult === 2) {
        console.log('Tie.');
    };
}

displayMessage(playRound(getComputerChoice(), getPlayerChoice()));
