function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return "Paper";
            break;
        case 1:
            return "Rock";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection.toLowerCase()){
        case "paper" :
            if (computerSelection === "Paper") {
                console.log("It's a tie!");
                return 0;
            }
            else if (computerSelection === "Rock") {
                console.log("You win!");
                return 1;
            }
            else {
                console.log("You lose!");
                return -1;
            }
            break;
        case "rock" :
            if (computerSelection === "Rock") {
                console.log("It's a tie!");
                return 0;
            }
            else if (computerSelection === "Scissors") {
                console.log("You win!");
                return 1;
            }
            else {
                console.log("You lose!");
                return -1;
            }
            break;
        case "scissors" :
            if (computerSelection === "Scissors") {
                console.log("It's a tie!");
                return 0;
            }
            else if (computerSelection === "Paper") {
                console.log("You win!");
                return 1;
            }
            else {
                console.log("You lose!");
                return -1;
            }
            break;
    }
}

function game(){
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        playerScore = playerScore + playRound(prompt("Choose rock, paper or scissors"),getComputerChoice());
    };
    if (playerScore === 0) {
        console.log("The game is a tie!");
    }
    else if (playerScore >0) {
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game");
    }
}

game();