// initialize variables
const sortButton = document.getElementById("sort");


// sort input array function
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
}

// event listeners
sortButton.addEventListener("click", sortInputArray);