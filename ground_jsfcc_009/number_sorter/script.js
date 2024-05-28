// initialize variables
const sortButton = document.getElementById("sort");


// sort input array function
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  updateUI(inputValues);

}

// update UI with sorted numbers
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

// event listeners
sortButton.addEventListener("click", sortInputArray);