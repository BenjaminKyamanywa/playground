// Initializing script variables
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

// set boolean variables
let isError = false;

// clean string value received from input
function cleanInputString (str) {
  const strArray = str.split('');
  const cleanStrArray = [];
  // iterate through each character in strArray
  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  }
}