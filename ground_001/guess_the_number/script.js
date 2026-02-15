/*
Action Items list for Guess The Number Game
TODO; GET User value from input and save it to variable numberGuess
TODO: Generate a random number between 1 to 100 and save it to variable correctNumber
TODO: Console whether the guess is too high, too low, or is correct inside playGame function
TODO: Create a function called displayResult to move the 
TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
TODO: Use the showYouWon... functions within displayResult to display the correct dialog
TODO: Save the guess history in a variable called guess
TODO: Display the guess history using displayHistory() function
TODO: Use this initGame() function to restart the game
*/

// Variable to store list of guesses
let guesses = [];
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
  // Show guesses history
  saveGuessHistory(numberGuess); // store user guess
  displayHistory(); // show user history of guesses
}

/*
Show result if guess is too high, too low, or correct
*/
function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
    showNumberAbove(); // show number above guess dialog
  } else if (numberGuess < correctNumber) {
    showNumberBelow(); // show number below guess dialog
  } else {
    showYouWon(); // show winning dialog
  }
}

/*
Initialize a new game by resetting all values and content on the app
*/
function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  document.getElementById("number-guess").value = "";
  guesses = [];
  displayHistory();
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
  guesses.push(guess);
}

/*
Save history
*/
function displayHistory() {
  let index = guesses.length - 1; // start from the last item in the arrray
  let list = "<ul class='list-group'>"
  // loop through user guesses and show each number in a list
  while(index >= 0) {
    list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "/<li>";
    index-=1;
  }
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

/*
Show user winning message
*/
function showYouWon() {
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text); // show success to user
  document.getElementById("result").innerHTML = dialog;
}

/*
Show user if guess is too high
*/
function showNumberAbove() {
 const text = "Your guess is too high!"
 let dialog = getDialog('warning', text); // show warning to user 
 document.getElementById("result").innerHTML = dialog;
}

/*
Show user if guess is too low
*/
function showNumberBelow() {
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text); // show warning to user
  document.getElementById("result").innerHTML = dialog;
}


