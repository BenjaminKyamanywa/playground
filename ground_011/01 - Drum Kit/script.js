
// play sound 
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if pressed key has no audio element stop function execution
  if(!audio) return;

  key.classList.add('playing');
  audio.currenTime = 0; //rewind audio to the start
  audio.play();
  // add playing class
}

// remove transiton
const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// click handler function
const clickHandler = (e) => {
  // find closest ancestor element with key class to ensure that even user clicks inside a nested element (like a child of .key), it still identifies the correct .key element.
  const key = e.target.closest('.key');
  if (!key) return; // stop if the clicked element is not a .key
  
  // retrieve keyData from key.dataset.key and find corresponding audio element using document.querySelector
  const keyData = key.dataset.key; 
  const audio = document.querySelector(`audio[data-key="${keyData}"]`);
  
  if (!audio) return; // stop if no audio element found
  
  key.classList.add('playing');
  audio.currentTime = 0; // rewind audio to the start
  audio.play();
}

// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// event listener for click on div elements
keys.forEach(key => key.addEventListener('click', clickHandler));

// window object event listener to playSound
window.addEventListener('keydown', playSound);
