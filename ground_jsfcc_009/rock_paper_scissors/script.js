// get random option for computer
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const RandomIndex = Math.floor(Math.random() * options.length);
  return options[RandomIndex];
}

// check if player has won the round
const hasPlayerWonTheRound = (player, computer) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

// get results of the round between user and computer
const getRoundResults = (userOption) => {
  const computerResult = getRandomComputerResult();

  if(hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}