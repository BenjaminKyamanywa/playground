# 🗂️ Changing CSS Variables with Javascript

We are going to explore how we can change how things look on a webpage using HTML, CSS and Javascript. Imagine we have sliders and color pickers that can adjust colors, sizes, and blurriness!

## Topics
- [Understanding our markup](#understanding-our-markup)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Lessons](#lessons)
- [Conclusion](#conclusion)

### Understanding our markup

___


```HTML


```

- We have sliders and color pickers that control what our webpage looks like.


### CSS Highlights

___



```CSS


```

- Add points about the CSS

### Uncovering our JS

___



```JS



```
-  Add points about JS

```JS



```

- Add points about the JS

```JS

// Initialize variables

const inputs = document.querySelectorAll('.controls input');

// initialize handleUpdate function for elements updates
const handleUpdate = (event) => {
  const target = event.currentTarget;
  // get data set values from elements
  const suffix = target.dataset.sizing || '';
  
  // add styling properites to elements based on user values
  document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);

}

// addEvent listener for element input changes
inputs.forEach(input => input.addEventListener('input', handleUpdate));

```

- Event Handling Change:
    - Instead of using specific events like `change` or `mousemove`, which trigger only when the value changes or mouse moves, we use the `input` event. The `input` event triggers whenever the value of an input changes, regardless of how it changes (keyboard input, mouse dragging, etc.).
- Accessing the Element:
    - In handleUpdate, we use `event.currentTarget` instead of `event.target`.
    - `event.currentTarget` always refers to the element to which the event listener is attached (`input` element in this case).
    - This ensures that even if the event bubbles up through nested elements, `currentTarget` always refers to the correct input element.
- Setting CSS Variables:
    - We continue to use `document.documentElement.style.setProperty` to dynamically set CSS variables based on the input element's `name` attribute and its `value + suffix`.
- Event Listener Setup:
    - The `forEach` loop iterates over all `input` elements with class `controls`.
    - Each input element has an event listener attached to the `input` event, which triggers `handleUpdate`.
    - This setup ensures that CSS variables are updated immediately as the user interacts with the input elements.


### Lessons
___

1. CSS and JavaScript Synchronization:
    - Add bullet point 

2. Event Handling and Delegation:
    - Add bullet point

3. Modularity and Code Organization:
    - Add bullet point

### Conclusion
___

You can view the project on Codepen [Here](). 
