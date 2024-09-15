## 🛠️ Javascript Reference

In this Javascript reference guide are notes taken while learning Javascript|ECMAScript from the ground up with helpful links to provide guidance a long the journey.

## Topics
  - [Introduction](#introduction)

## Introduction

JavaScript is a programming language that allows us to implement complex functionalities on web pages.

Example: 

```html

<!-- Index -->
<button type="button">Player 1: Ben</button>

```

```css

/* button styling */

button {
  font-family: "helvetica neue";
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
}

```

```js

// button javascript functionality
const button = document.querySelector("button");

// update name user adds when button is clicked
button.addEventListener("click", updateName);

function updateName() {
  // request user to add any name
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

```

### What can it do:
- Store useful values inside variables.
- Perform operations on strings.
- Respond to events on a web page and run code.

### Internal Javascript

We can add Javascript internally to our web pages with the help of a `<script></script>` element that's added before our closing `≤/body≥` tag. The script tag is added at the bottom of our document after our  `HTML` and `CSS` files to allow for the page to load with our markup and styles before we plug in the interactivity. As such that's the organization flow of files on our webpages.

Example: We add a text element with Javascript to the page each time a user clicks the button.

```html

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS example</title>
  </head>
  <body>
    <button>Click Me</button>
    <!-- we'll add the JS code for here in the below -->
    <script>
      // internal javascript goes here
      function createParagraph() {
        // create paragraph element
        const paragraph = document.createElement('p');
        // add content to the paragraph element
        paragraph.textContent = 'You clicked the button';
        // add paragraph element to the DOM
        document.body.appendChild(paragraph);
      }

      // select button element
      const buttons = document.querySelectorAll("button");

      // add paragraph element plus text each time button is clicked
      for (const button of buttons) {
        button.addEventListener('click', createParagraph);
      }
    </script>
  </body>
</html>

```

## Inline Javascript Handlers & Event handlers

- It's bad practise to pollute our HTML with these as we would need to add functions to all HTML elements where we need behavior to happen. for example with a button click.

```html

<button onclick="createParagraph()"></button>

<script>
  // JS function for a button click
  function createParagraph() {

  }
<script>

```

## Event Handlers

Instead of including JavaScript in our HTML, we ccan use a pure JavaScript construct. The `querySelectorAll()` function allows us to select all the buttons on a page. We can then loop through the buttons, assigning a handler for each using `addEventListener()`. 

Code example for this is shown below:

```js

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

```