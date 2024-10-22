// initialize app variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){ // takes an array and returns one of the items stored in it randomly
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// raw text strings as inputs for our app
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy','Father Christmas',];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function result() {
  let newStory = storyText;
  
  // store random items from each array 
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // replace placeholders in newStory with with strings stored in xItem, yItem, zItem
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);
  

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name); // if a value has been added into the customName text input, replace 'Bob' in the story with it
  }
  
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// click event listener
randomize.addEventListener('click', result);