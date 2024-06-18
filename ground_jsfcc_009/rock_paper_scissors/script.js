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

