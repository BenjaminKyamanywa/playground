
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

// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// event listener for click on div elements
keys.forEach(key => key.addEventListener('click', function (e) { 
  
  const clickPlay = (a) => {
    const aud = document.querySelector(`audio[data-key="${a}"]`)
    const key = document.querySelector(`.key[data-key="${a}"]`)
    if (!aud) return;
    
    key.classList.add('playing');
    aud.currentTime = 0;
    aud.play();
  }
  
  // when clicking on div element
  clickPlay(this.dataset.key);
}))

// window object event listener to playSound
window.addEventListener('keydown', playSound);
