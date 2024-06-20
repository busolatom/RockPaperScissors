function getComputerChoice() {
    // Generate a random number between 0 and 2 (inclusive)
    const randomNumber = Math.floor(Math.random() * 3);

    // Use if statements to map numbers to rock, paper, or scissors
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
    
// Example usage:
// console.log(getComputerChoice()); // Output: "rock", "paper", or "scissors"

function getHumanChoice() {
    // Prompt the user to enter their choice
    let userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    // Validate user input
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
        userInput = prompt("Invalid choice! Please enter rock, paper, or scissors.").toLowerCase();
    }

    // Return the validated user choice
    return userInput;
}

// Test the function by logging the user's choice
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Normalize humanChoice to lowercase
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner of the round
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Human wins
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        // Computer wins
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        // It's a tie
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }
    
    // Log current scores after each round
    console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Usage
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);


