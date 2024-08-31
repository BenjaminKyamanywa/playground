## 🛠️ Typescript Reference

- Topics
  - [Types](#types)
  - [Variables](#variables)
  - [Increment](#increment)
  - [Functions](#functions)
  - [Template strings](#template-strings)
  - [If else](#if-else)
  - [Type Aliases](#type-aliases)
  - [Object Types](#object-types)
  - [Arrow Functions and Function expressions](#arrow-functions-and-function-expressions)

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

```
