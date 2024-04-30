// Initiate variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000
  }
];

// decimal to binary conversion
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// animation
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

};

// check input value
const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }

  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

// user convert btn
convertBtn.addEventListener("click", checkUserInput);

// listen for keyboard enter and return keys
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})