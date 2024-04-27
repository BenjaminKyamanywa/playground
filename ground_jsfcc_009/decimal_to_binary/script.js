// Initiate variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// decimal to binary conversion
const decimalToBinary = (input) => {
  const inputs = []
  const quotients = []
  const remainders = []

  input = 0;
}

// check input value
const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
}

// user convert btn
convertBtn.addEventListener("click", checkUserInput);

// listen for keyboard enter and return keys
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})