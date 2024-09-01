## 🛠️ Typescript Reference

- Topics
  - Basics
    - [Types](#types)
    - [Variables](#variables)
    - [Increment](#increment)
    - [Functions](#functions)
    - [Template strings](#template-strings)
    - [If else](#if-else)
    - [Type Aliases](#type-aliases)
    - [Object Types](#object-types)
    - [Arrow Functions and Function expressions](#arrow-functions-and-function-expressions)
    - [Arrays and Objects](#arrays-and-objects)
    - [Tuples](#tuples)
    - [Modules](#modules)
  - Intermediate
    - [Classes](#classes)

### Types

Bridge the gap between what computers understand and what humans understand. Computers can execute types to binary code and humans can write them in a human readable version.

### Variables

We utilize variables to help us assign useful names to data while automatically keeping track of where they exist in memory.

```ts

const home = 'Georgia'; // can't re-assign data. We can still change the value within a const binding but we can't assign entirely new data to it.
let message = 'hello'; // allows us to re-assign data 
var house = 'bangalow'; // never use this. It's from old JS and can cause unexpected behavior.

```

### Increment

In Typescript we have the capability to increment our numbers just like we would in normal javascipt.

```ts

// 'prefix' increment 'variable++' e.g a++
n = 5;
const k = n++; // 5
// assert.equal(k, 6); -> returns an error cause n is added to k and ++ is added later. 
assert.equal(n, 6) // 6 - works cause we check n with ++ which is 6.

// 'postfix' increment - '++variable' e.g ++b RECOMMENDED approach
n = 5;
const j = ++n; // 6 - we take ++ and add it to p and then assign it to j.
assert.equal(j, 6); // returns expected output

// decrement - reduces variable by one, syntax -> '--variable'
n = 5;
const t = --n;
assert.equal(t, 4); 

// arithmetic assignment RECOMMENDED as we don't get unexpected bugs -> '+=, -=, *=, /=, %='

n = 5;
n += 5;
assert.equal(n, 10); // add 5 to n hence we end up 10

n -= 5;
assert.equal(n, 5); // remove 5 from n hence we end up 5

```

### Functions

Most basic unit of a program that contains execution instructions. They help us encapsulate logic that we can reuse anywhere in a program.

```ts

// example function blueprint
function call (color, sound, word) { // params for function execution to be successfull
  // execution for a successfull call
}



```

### Template strings

Allow us to substitute data within a string.

```ts

// greeting function
function greet(message) {
  console.log(`Hello ${message}`)
}

greet('Typescript');

// number of people

const children = 2;
const adults = 4;
const attendingPeople = children + adults;
const notice = `There are ${attendingPeople} at the townhall meeting`;

console.log(notice);

```

### If else

We use if else statements to control flow of our applications based on conditions. We utilize them to simplify our application condition structure.

```ts

// evaluate if a person is approved to work overtime at a job
const hasTheSkills = true;
const day = 'tuesday';
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;


function approveMoreWork() {
  // check if person doesn't have the skills
  if (!hasTheSkills) {
    // go home
    return;
  }

  // if they have the skills, check if they can work overtime
  // const canWorkOvertime = hoursWorked > 8 && totalOvertime < 1; [let's convert this to a function called hasOverTimeHours()]

  // check if they can't work overtime
  if (!hasOverTimeHours(hoursWorked, totalOvertime)) {
    // go home
    return;
  }

  // check if it's a holiday season or if it's Tuesday
  if (!isBusyDay(day, holidaySeason)) {
    // go home
    return;
  } 

  // approve work

}

  function isBusyDay(day: string, holidaySeason: boolean): boolean {
    return holidaySeason || day === 'tuesday';
  }

  function hasOverTimeHours(hoursWorked: number, totalOvertime: number): boolean {
    const hasHours = hoursWorked > 8 && totalOvertime < 1;
    return hasHours;
  }

```

### Type Aliases

It simply means providing another name for something that already exists.

```ts

// create type alias PersonName as a string. 'PersonName' & 'string' can be interchangably used.
type PersonName = string;

const myName: PersonName = 'John Doe';
const alsoMyName: string = 'John Doe';

// example self documenting code
function printName(name: PersonName) {
  console.log(`Name is ${name}`);
}

printName(myName);

```

### Object Types

Similar to type aliases, however we have to define what the type actually looks like instead of using a pre-existing type like in our above example of Type Aliases.

```ts

// define our object type
type Coordinate = {
  x: number;
  y: number;
};

// create instance of object type
const origin: Coordinate = {
  x: 0,
  y: 0
}

const xPosition = origin.x;
const yPosition = origin.y;

```

### Arrow Functions and Function Expressions

We utilize arrow functions and function expressions when we are writing out our logic.

Function expression is a function that is assigned to a variable.

```ts

// function expression
const sum = function(lhs: number, rhs: number): number {
  return lhs + rhs;
}

const two = sum(2, 5);
console.log(two);

```

Arrow function is a function that deon't need the the 'function' key word.

```ts

// function expression with arrow function syntax 
const arrowSum = (lhs: number, rhs: number): number => {
  return lhs + rhs;
}

const ten = arrowSum(5,7);
console.log(ten);

// subtraction function
const sub = (lhs: number, rhs: number): number => {
  return lhs - rhs;
}

// calling a function within another function
type calculationFn = (lhs: number, rhs: number) => number;

function calculate(fn: calculationFn, lhs: number, rhs: number): number {
  const result = fn(lhs, rhs);
  if (result === 7) {
    console.log('You win extra');
  }
  return result;
}

console.log(calculate(arrowSum, 5, 6));
console.log(calculate(sub, 10,3));

```

### Arrays and Objects

We can store objects within arrays and access them easily as well.

```ts

type Link = {
  title: string;
  url: string; 
}

const microsoft = {
  title: "microsoft",
  url: "microsoft.com"
}

const typescript = {
  title: "typescript",
  url: "typescript.com"
}

// utilize array indexing to access microsoft or typescript array elements from links
const links = [microsoft, typescript];

// use dot notation to access typescript url 
const urlTypescript = links[1].url;

console.log(urlTypescript);

```

### Tuples 

These allow us to have multiple data types unlike an array where we can have one data type. Although however we cant' store a lot of different data. 

For example below we are going to create a book with title and a publish year using a tuple in typescript.

```ts

// we define our tuple data types
type Title = string;
type PublishYear = number;

// we create our book using a tuple
type Book = [Title, PublishYear];

// create a sample book
const sampleBook: Book = ["Richest Man in Babylon", 1926];

console.log(sample[0]);

```

### Modules

Allow us to take functions, variables and package them. They don't have a size limit. It's better to make smaller modules that have a single purpose or that perform small related tasks. Writing modules with a singular goal in mind helps them organized and much simpler to work with.

```ts

// export module function to add
export function sum(lhs: number, rhs: number): number {
  return lhs + rhs;
}

```

### Classes

Provide a way to tightly associate code and data together into a single unit. The unit consists of properties and methods.

- `Properties`: Are like variables, allow to maintain data within a class.
- `Methods`: Are like functions, allow to operate on propeties of a class.

```ts

// create a class: blueprint of what we want to define with  our class.
class Color {
  r: number = 0;
  g: number = 0;
  b: number = 0;
}

// create a class instance: actual class definition.
const red = new Color();
red.r = 255; // set the color red  to 255.
const redValue = red.r; // read what the red value is equivalent to.

// example with constructor usage
class Dimension {
  length: number;
  width: number;
  height: number

  // define our constructor
  constructor() {
    // this keyword helps us instantiate our constructors for each class property
    this.length = 1;
    this.width = 1;
    this.height = 1;
  }
}

const one = new Dimension();

class Point {
  x: number;
  y: number;

  // class constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // class method
  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

const p = new Point(5, 5);
p.translate(-5, -5); // utilize the class method to change transalation by -5 for both x and y.

```

### Interfaces

An interface is like a contract, it specificies what needs to be done but doesn't specify how it needs to get done.

One way to use it is to implement it for a class. When we do so the class must implement all the properties and methods of the interface, failure to do so would result in a compile error.




