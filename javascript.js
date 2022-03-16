let playCount = 0;
let winCount = 0;
let computerWinCount = 0;

const buttons = document.querySelectorAll('button');

let displayWins = document.createElement('div');
displayWins.textContent = `Press a button to begin!`
displayWins.setAttribute('style', 'white-space: pre;');

const displayWinsBox = document.querySelector('.wins');

displayWinsBox.append(displayWins);

console.log(buttons);

function computerPlay(){
  let result =  Math.floor(Math.random() * 3 + 1);
  switch (result){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }

};


/*
function playerPlay(){
  let input = prompt("Rock, paper, or scissors?").toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissors")
    return input;
  else{
    while(input != "rock" && input != "paper" && input != "scissors")
      input = prompt("It's gotta be rock, paper, or scissors, dude.").toLowerCase();
    return input;
  }
};
*/

function playRound(playerSelection, computerSelection){
  console.log(`You played ${playerSelection}! Computer played ${computerSelection}!`);
  if (playerSelection === computerSelection){
    console.log("Draw!");
  }
  else if(playerSelection === "rock")
  {
    if (computerSelection === "paper")
    {
      declareRoundLose();
    }
    if (computerSelection === "scissors")
    {
      declareRoundWin();
    }
  }
  else if(playerSelection === "paper")
  {
    if (computerSelection === "rock")
    {
      declareRoundWin();
    }
    if (computerSelection === "scissors")
    {
      declareRoundLose();
    }
  }
  else if(playerSelection === "scissors")
  {
    if (computerSelection === "paper")
    {
      declareRoundWin();
    }
    if (computerSelection === "rock")
    {
      declareRoundLose();
    }
  }
  else{
    console.log("This should never fire D:");
    return;
  }
  playCount++;
  displayWins.textContent = 
  `Play count: ${playCount} | Player Wins: ${winCount} | Computer Wins: ${computerWinCount}`


  if(winCount == 5)
  {
    console.log("hi")
    displayWins.textContent += 
    `\r\nYou win! Game over! Play moare?!`
    winCount = 0;
    computerWinCount = 0;
  }

  if(computerWinCount == 5)
  {
    displayWins.textContent += 
    `\r\nYou lost! Game over! Play moare?!`
    winCount = 0;
    computerWinCount = 0;
  }


  
}

function declareRoundWin(){
  console.log("You won this round!");
  winCount++;
};

function declareRoundLose(){
  console.log("You lost this round!");
  computerWinCount++;
};

function testCompPlay(){
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
  console.log(computerPlay());
};


function game(){
  while(winCount == 5 || computerWinCount == 5)
  {
    displayWins.textContent = 
    `Game over! Play moare?!`
  }

}


buttons.forEach(button => button.addEventListener("click", () => {
  playRound(button.textContent.toLowerCase(), computerPlay())
}));

//console.log(playRound(playerPlay(), computerPlay()));


// testCompPlay();
