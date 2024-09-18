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

  
}
