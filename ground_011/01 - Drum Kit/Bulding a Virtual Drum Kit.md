# 🥁 Building a Virtual Drum Kit with JavaScript: A How To Guide

In this guide we shall cover how to build a virtual drum kit using HTML, CSS, and JavaScript. By the end, we'll have a working drum kit that plays in the browser with the keyboard or with a mouse click.

## Topics
- [Understanding our markup](#understanding-our-markup)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Lessons](#lessons)
- [Conclusion](#conclusion)

### Understanding our markup

With our HTML markup we shall see the usage of div elements and utilize the `data` attribute to set our custom `key` which we'll be using to reference keyboard key values

```HTML

<div data-key="65" class="key">
  <kbd>A</kbd>
  <span class="sound">clap</span>
</div>

```

### CSS Highlights

```CSS

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  border: .3rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all 0.05s ease;
  width: 10rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 .5rem #000;
  cursor: pointer;
}

.playing {
  transform: scale(1.1);
  border-color: var(--main-color);
  box-shadow: 0 0 1rem var(--main-color);
}

```

- We set styles for all our keys div elements with center alignment on the page.
- For each key we set a transition animation to cater to highlighting the playing sound with an element.
- We utilize transform property to scale our elements when a sound is playing with the styles in `.playing` that will show during the animation after a sound plays.

### Uncovering our JS

```JS
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
```
-  We query for both the audio files and keyboard input.
-  If there is no audio file associated with the key pressed, the function execution stops.
- We add `.playing` class to show our animation.
- Rewind the audio to start to enable multiple key presses to play the audio afresh and.

```JS

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

```

- The `removeTransition` function ensures smooth animation by removing the `playing` class after the CSS transition ends, ensuring each drum hit looks and feels dynamic.
- JavaScript dynamically selects elements based on data attributes (`data-key`) to match the key or button clicked.
- It locates corresponding `<audio>` elements to play the associated sound file (`audio[data-key="${keyData}"]`) and adds the `playing` class to animate the drum visually.

```JS

// select all keys
const keys = Array.from(document.querySelectorAll('.key'));

// event listener for each key to fire remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// event listener for click on div elements
keys.forEach(key => key.addEventListener('click', clickHandler));

// window object event listener to playSound
window.addEventListener('keydown', playSound);

```

- We use event listeners to capture keyboard events (`keydown` for keyboard presses) and mouse clicks (click on drum kit elements).
- Each event listener calls a specific function (`playSound` for keyboard events and `clickHandler` for mouse clicks) to trigger the corresponding sound and visual animation.
- CSS transitions are utilized to add visual effects when a drum element is clicked (`transitionend` event listener).


### Lessons

1. CSS and JavaScript Synchronization:
- Integrating CSS transitions with JavaScript (`removeTransition`) demonstrates the importance of synchronizing visual effects with application logic.
- This synchronization ensures that animations are smooth and responsive, enhancing the user experience when interacting with the drum kit.

2. Event Handling and Delegation:
- Understanding how to use event listeners (`addEventListener`) allows us to capture and respond to user actions effectively.
- Delegation, as seen with `clickHandler` using `e.target.closest('.key')`, ensures that even nested elements within our drum kit trigger the correct action, making our code more robust.

3. Modularity and Code Organization:
- Refactoring code into separate functions (`playSound`, `clickHandler`, `removeTransition`) promotes modularity and code reuse.
- Each function has a distinct responsibility, making the codebase easier to understand, maintain, and expand upon in case we add more features or customize the drum kit further.

### Conclusion

Building a virtual drum kit not only provides a fun way to explore JavaScript and CSS but also illustrates key programming concepts like event handling, CSS animations, and code organization. 

We've learned how to create a simple interactive web application that responds to user input, paving the way for more creative and engaging web projects in the future. 

Now, let's grab our drumsticks (or mouse) and start making some beats!

You can view the project on Codepen [here](https://codepen.io/benjaminkyamanywa/pen/XWLmxKM).