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
  // utilize regex - more performant
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

// filter out exponential notations e.g 1e10 from number inputs
function isInvalidInput (str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// allow users to add calorie counter entries
function addEntry () {
  const targetId = "#" + entryDropdown.value;
  const targetInputContainer = document.querySelector(targetId + ' .input-container');
}