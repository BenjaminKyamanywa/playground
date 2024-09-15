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

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

button.addEventListener("click", updateName);

```

### What can it do:
- Store useful values inside variables.
- Perform operations on strings.
- Respond to events on a web page and run code.

