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
  paragraphTag.className = "user-input";
  paragraphTag.innerHTML = messageResult;
  resultContainer.appendChild(paragraphTag);

  resultContainer.classList.remove("hidden");
}

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
