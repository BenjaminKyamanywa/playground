// Initialize variables

const inputs = document.querySelectorAll('.controls input');

// initialize handleUpdate function for elements updates
const handleUpdate = (event) => {
  const target = event.currentTarget;
  // get data set values from elements
  const suffix = target.dataset.sizing || '';
  
  // add styling properites to elements based on user values
  document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);

}

// addEvent listener for element input changes
inputs.forEach(input => input.addEventListener('input', handleUpdate));
