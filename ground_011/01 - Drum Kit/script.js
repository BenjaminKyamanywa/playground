
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

// play sound onclick
const handleClick = (e) => {
  // Get the data-key attribute from the clicked element
  const key = e.target.getAttribute('data-key');

  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${key}"]`)
    if (!audio) return;

    keyElement.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', handleClick));

// window object event listener to playSound
window.addEventListener('keydown', playSound);
