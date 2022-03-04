console.log("Hello world!")

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

function playerPlay(){
  let input = prompt("Rock, paper, or scissors?").toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissors")
    return input;
  else{
    while(input != "rock" || input != "paper" || input != "scissors")
      input = prompt("It's gotta be rock, paper, or scissors, dude.").toLowerCase();
    return input;
  }
};

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    console.log("Draw!");
    return 0;
  }
  else{
    return "Not draw!";
  }
};

function declareRoundWin{
  console.log("You won this round!");
};

function declareRoundLose{
  console.log("You lost this round!");
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
  
}

console.log(playRound(playerPlay(), computerPlay()));
// testCompPlay();
