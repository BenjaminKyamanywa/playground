// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  // get the span element
  const yearSpan = document.querySelector('.footer-date');
  // get the current year
  const currentYear = new Date().getFullYear();
  // set the span element's text to current year
  yearSpan.textContent = currentYear;
});