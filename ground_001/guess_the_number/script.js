/*
Action Items list for Guess The Number Game
TODO; GET User value from input and save it to variable numberGuess
TODO: Generate a random number between 1 to 100 and save it to variable correctNumber
TODO: Console whether the guess is too high, too low, or is correct inside playGame function
TODO: Create a function called displayResult to move the 
TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
*/

// Variable to store list of guesses

// Variable to store the correct random number
let correctNumber = getRandomNumber();

// window.onload() Function: Waits for entire html page to load and enables us perform functions
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
}

// Functionality for playing the game
function playGame() {

  // Get and save the submitted user value in a variable
  let numberGuess = document.getElementById("number-guess").value;

  // Check whether the guess is too high, too low or correct
  displayResult(numberGuess);
}

/*
Show result if guess is too high, too low, or correct
*/
function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
    console.log("too high");
  } else if (numberGuess < correctNumber) {
    console.log("too low");
  } else {
    console.log("is correct")
  }
}

/*
Initialize a new game by resetting all values and content on the app
*/
function initGame() {

}

/*
Reset HTML content for guess history
*/
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/*
Return a random number between 1 and 100
*/
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

/*
Save guess history
*/
function saveGuessHistory(guess) {

}

/*
Save history
*/
function displayHistory() {
  let index;
  let list = "<ul class='list-group'>"
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

/*
Retrieve dialog based on whether guess is wrong or correct
*/
function getDialog(dialogType, text) {
  let dialog;
  switch(dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}
