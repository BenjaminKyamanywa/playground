// add variables to store data
let randomNumber = Math.floor(Math.random() * 100) + 1; // assign random number between 1 and 100

// store reference to results paragraph
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// store reference to form text input and submit button
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


// checkGuess
function checkGuess() {
  // get user value and ensure it's a number
  const userGuess = Number(guessField.value);

  // check if it's players first go at the game
  if (guessCount === 1) {
    // make guesses paragraph text content equal to previous guesses
    guesses.textContent = 'Previous guesses:';
  }

  // append current user user guess value onto the end of guesses paragraph with blank space inbetween
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right! 🤩'
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '🤒 !!!Game Over!!! 🤒';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
