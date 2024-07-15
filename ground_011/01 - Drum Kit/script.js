
// play sound 
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
  const key = document.querySelector(`div[data-key"${e.keycode}"]`);
  // stop function from running all together
  if(!audio) return;
  key.classList.add('playing');
  audio.currenTime = 0; //rewind audio to the start
  audio.play();
}

// remove transiton
const removeTransition = (e) => {
  if (e.propertyName !== 'transitioned') return;
  e.target.classList.remove('playting');
}

// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitioned', removeTransition));

// window object event listener to playSound
window.addEventListener('keydown', playSound);
