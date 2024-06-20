// Function to play a game of rock-paper-scissors
function playGame() {
    // Local variables for keeping score
    let humanScore = 0;
    let computerScore = 0;

    // Function to get human choice
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

    // Function to get computer choice
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

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
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
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(); // Call getComputerChoice to get a new random choice

        playRound(humanChoice, computerChoice);
    }

    // Declare the winner based on the scores
    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you lose the game with a score of ${humanScore}-${computerScore}`);
    } else {
        console.log(`The game ends in a tie with a score of ${humanScore}-${computerScore}`);
    }
}

// Usage
playGame();
