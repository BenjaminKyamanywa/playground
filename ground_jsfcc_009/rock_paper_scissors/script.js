// get random option for computer
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const RandomIndex = Math.floor(Math.random() * options.length);
  return options[RandomIndex];
}

