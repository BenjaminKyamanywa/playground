// add variables to store data
let randomNumber = Math.floor(Math.random() * 100) + 1; // assign random number between 1 and 100

// store reference to results paragraph
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParagraphs = document.querySelector('.resultParagraphs');

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

  // check if user guess is equal to randomNumber
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right! 🤩'
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    // check if it's players' last turn
    lastResult.textContent = '🤒 !!!Game Over!!! 🤒';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    // player didnt' guess right but has more guesses left
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    // check whether guess is lower or higher than answer
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
// get readu for the next guess
  guessCount++; // add one so player uses up their turn
  guessField.value = ''; // empty value from form text field
  guessField.focus(); // focus field for next guess to be entered
}

// add game over functionality
function setGameOver() {
  guessField.disabled = true; 
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resultParagraphs.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

// resetGame to initial state
function resetGame() {
  guessCount = 1;

  const resetParagraphs = document.querySelectorAll('.resultParagraphs p');
  
  // set each paragraph text content to empty
  for (const resetParagraph of resetParagraphs) {
    resetParagraph.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  // remove background color from last result paragraph
  lastResult.style.backgroundColor = 'white';
  // generate new random number so player isn't guessing the same number again
  randomNumber = Math.floor(Math.random() * 100) + 1;

}

// event listener for player guess submission
guessSubmit.addEventListener('click', checkGuess);

