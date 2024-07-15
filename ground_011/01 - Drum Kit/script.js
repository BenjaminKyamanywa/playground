
// play sound 
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // stop function from running all together
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


// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window object event listener to playSound
window.addEventListener('keydown', playSound);
