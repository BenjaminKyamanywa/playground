// initialize variables
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate =  `${day}-${month}-${year}`;

// utilizing variables
currentDateParagraph.textContent = formattedDate;

// event listeners
dateOptionsSelectElement.addEventListener("change", () => {
  // return user selected date
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
  }
});
