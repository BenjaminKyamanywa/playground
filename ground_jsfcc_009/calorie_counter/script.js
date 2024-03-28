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
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

// get calorie counts from user's entries
function getCaloriesFromInputs (list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
    }
  }
}

// button event listeners
addEntryButton.addEventListener("click", addEntry);