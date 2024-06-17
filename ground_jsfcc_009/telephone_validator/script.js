// initialize variables
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

// check for valid number
const checkForValidNumber = input => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const paragraphElement = document.createElement("p");
  paragraphElement.className = "results-text";
  phoneRegex.test(input)
    ? (paragraphElement.style.color = "#00471b")
    : (paragraphElement.style.color = "#4d3800");
  paragraphElement.appendChild(
    document.createTextNode(
      `
      ${phoneRegex.test(input) ? 'Valid' 
      : 'Invalid'} US number: ${input}
      `
    )
  );
  results.appendChild(paragraphElement);
};