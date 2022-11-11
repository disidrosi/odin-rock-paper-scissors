"use strict";

// Declare constants and variables
const gameKeywords = ['rock', 'paper', 'scissors'];

// Return a random element from a given array
function chooseArrayElement(keywords) {
    return keywords[Math.floor(Math.random() * keywords.length)]
};

// Make a random choice between rock, paper, and scissors
function getComputerChoice() {
    return chooseArrayElement(gameKeywords)
};

// Check if user input matches one of the game keywords
function checkPlayerChoice(userChoice) {
    if (gameKeywords.includes(userChoice)) {
        return true
    } else {
        return false
    };
};

// Get the user choice from prompt and display a message if not valid
function getPlayerChoice() {
    let promptInput = prompt().toLowerCase();
    if (checkPlayerChoice(promptInput)) {
        return promptInput
    } else {
        console.log('You must choose between rock, paper, or scissors.');
    };
};

// Compare two choices and return 0 (lose), 1 (win), or 2 (tie)
function compareChoices(computerSelection, playerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 2
            } else if (computerSelection === 'paper') {
                return 0
            } else if (computerSelection === 'scissors') {
                return 1
            };
        case 'paper':
            if (computerSelection === 'rock') {
                return 1
            } else if (computerSelection === 'paper') {
                return 2
            } else if (computerSelection === 'scissors') {
                return 0
            };
        case 'scissors':
            if (computerSelection === 'rock') {
                return 0
            } else if (computerSelection === 'paper') {
                return 1
            } else if (computerSelection === 'scissors') {
                return 2
            };
    };
};

// Compare the results of one round
function checkRoundWinner(result) {
    if (result === 0) {
        console.log('Tie.');
        return null
    } else if (result === 1) {
        console.log('Player wins.');
        return 'player'
    } else if (result === 2) {
        console.log('Computer wins.');
        return 'computer'
    };
};

// Play one round between computer and player
function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const result = compareChoices(computerChoice, playerChoice);
    return checkRoundWinner(result)
};

// Play a game for a given number of rounds and keep score
function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= rounds; i++) {
        let roundResult = playRound();
        if (roundResult === 'player') {
            playerScore += 1;
        } else if (roundResult === 'computer') {
            computerScore += 1;
        };
    };
    if (playerScore > computerScore) {
        console.log('Player wins the game.');
    } else if (playerScore < computerScore) {
        console.log('Computer wins the game.');
    } else if (playerScore === computerScore) {
        console.log('Tied game.');
    };
};
