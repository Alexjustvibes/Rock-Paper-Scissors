
function getComputerChoice(min, max) {
    const computerChoice = Math.floor(Math.random() * (max - min) ) + min;

    if(computerChoice == 1){
        return("rock");
    }
    else if(computerChoice == 2){
        return("scissors");
    }
    else{
        return("paper");
    }
}


function getPlayerChoice(){
    while(true){
        let playerChoice= prompt("Rock, Paper, Scissors!");
        let playerLower = playerChoice.toLowerCase();
        if(playerLower == "rock" ||
        playerLower == "paper" ||
        playerLower == "scissors"){
            return(playerLower);
            break;
        }

    }

}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === computerSelection){
        return("tie");
  }
  else if(playerSelection === "rock" && computerSelection === "scissors"){
    return("win");
  }
  else if(playerSelection === "paper" && computerSelection === "rock"){
    return("win");
  }
  else if(playerSelection === "scissors" && computerSelection === "paper"){
    return("win");
  }
  else{
    return("lose");
  }
}

   
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice(1,4);
  console.log(playRound(playerSelection, computerSelection));

function game(){
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(1,4);
        let wintielose = playRound(playerSelection, computerSelection);
        console.log(wintielose);
        if(wintielose === "win"){
            ++wins;
        }
        else if(wintielose === "lose"){
            ++losses;
        }
    }
    return("You: " + wins + " Computer: " + losses);
}

console.log(game());