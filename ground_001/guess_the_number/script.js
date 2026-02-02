/*
Action Items list for Guess The Number Game
TODO; GET User value from input and save it to variable numberGuess
TODO: Generate a random number between 1 to 100 and save it to variable correctNumber
TODO: Console whether the guess is too high, too low, or is correct
TODO: Create a function called displayResult to move the 
TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
*/

// Variable to store list of guesses

// Variable to store the correct random number

// window.onload() Function: Waits for entire html page to load and enables us perform functions
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
}

// Functionality for playing the game
function playGame() {

  // Get and save the submitted user value in a variable
  let numberGuess = document.getElementById("number-guess").value;
}

/*
Show result if guess is too high, too low, or correct
*/

/*
Initialize a new game by resetting all values and content on the app
*/
function initGame() {
  
}
