// initialize variables
const userInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");

const checkForPalindrome = (input) => {
  const initialInput = input;

  if (input === "") {
    alert("Please input a value");
    return
  }

  resultContainer.replaceChildren();

  const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  
  let messageResult = `<strong>${initialInput}</strong> ${lowerCaseString === [...lowerCaseString].reverse().join("") ? "is" : "is not"} a palindrome.`;

  const paragraphTag = document.createElement("p");
  
}
