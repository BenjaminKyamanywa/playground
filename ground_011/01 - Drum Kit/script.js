
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