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
  let input = prompt("Rock, paper, or scissors?");
  return input.toLowerCase();
};

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return "Draw!";
  }
  else{
    return "Not draw!";
  }
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

console.log(playRound(playerPlay(), computerPlay()));
// testCompPlay();