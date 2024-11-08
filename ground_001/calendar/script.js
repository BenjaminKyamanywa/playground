// initialize variables
const select = document.querySelector('select');
const list = document.querySelector('ul');
const heading = document.querySelector('h1');

function createCalendar(month) {
  let days = 31;

  // TODO: ADD CONDITIONAL HERE

  list.textContent = '';
  heading.textContent = month;

  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
};

select.value = 'January';
createCalendar('January');

// select click event listener
select.addEventListener('change', () => {
  const choice = select.value;
  createCalender(choice);
});