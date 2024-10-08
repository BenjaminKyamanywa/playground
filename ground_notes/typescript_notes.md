## 🛠️ Typescript Reference

In this Typescript reference guide are notes taken while learning Typescript from the ground up with helpful links to provide guidance a long the journey.

## Helpful Links 
  - Official Documentation: https://www.typescriptlang.org/
  - Free Online Book: https://www.totaltypescript.com/books/total-typescript-essentials
  - Frontend Masters: https://frontendmasters.com/topics/typescript/
  - FreeCodeCamp: https://www.freecodecamp.org/news/learn-typescript-for-practical-projects/
  - ZTM Typescript CheatSheet: https://zerotomastery.io/cheatsheets/typescript-cheat-sheet/

## Topics
  - Basics
    - [Introduction](#introduction)
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
    - [Interfaces](#interfaces)
    - [Iterators for...of](#iterators-for-of)
    - [Map Data Type](#map-data-type)
    - [Exceptions](#exceptions)
    - [Type Assertions](#type-assertions)
    - [Union Types](#union-types)
    - [Type predicates](#type-predicates)
    - [Optional Fields](#optional-fields)
    - [Async/Await](#async-await)
    - [Unit testing](#unit-testing)

- Techniques & Patterns
    - [Discriminated Unions](#discriminated-unions)
    - [Const assertions](#const-assertions)
    - [Generic Functions](#generic-functions)
    - [Generic Classes](#generic-classes)
    - [Type definition files](#type-definition-files)

### Introduction

Typescript is a typed superset of Javascript. It offers static type checking which simply means it detects errors in code without running it.

### Types

Bridge the gap between what computers understand and what humans understand. Computers can execute types to binary code and humans can write them in a human readable version.

```ts

type PersonName = string;

```

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

- Interface example with methods

```ts

// interface area example
interface Area {
  area(): number;
}

// interface perimeter example
interface Perimeter {
  perimeter(): number;
}

// class implementation of interfaces
class Rectangle implements Area, Perimeter {
  length: number = 1;
  width: number = 1;
  
  area(): number {
    return this.length * this.width;
  }

  perimiter(): number {
    return 2 * (this.length + this.width);
  }
}

// class merges area and perimter
type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
  radius: number = 4;

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimter(): number {
    return 2 * Math.PI this.radius;
  }
}

// create a new rectangle
const rect = new Rectangle()
const circ = new Circle()
rect.area();
rect.perimeter();

// an array object with both a rectangle and circle
const objectsWithArea: Area[] = [rect, circ];

// return area for both rectangle and circle
for (let i = 0; i < objectsWithArea.length; i++) {
  console.log(objectsWithArea[i].area());
}


```

- Interface example with properties.

`Note`: It's better to use interfaces whenever we have objects because we get better error messages and it's possible to extend them if we need to.

```ts

interface CustomerInfo {
  name: string;
}

class Customer implements CustomerInfo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// recommended to use interfaces instead of 'type' for objects
interface Address {
  street: string;
  city: string
}

// for demo purposes only, it's recommended to use interface for objects because we get better error messages and it's possible to extend them if we need to.
type LocalAddress {
  street: string;
  city: string
}

function printAddress(address: Address) {
  console.log(`Street Name: ${address.street}, City: {address.city}`);
}

// make a new city
const addr = {
  street: "name",
  city: "sample"
}

// call our address function
printAddress(addr);

```

### Iterators for of

These allow us to loop through arrays, objects, collections handling the looping for us.

```ts

const abc = ['a', 'b', 'c'];

// c-style loop (for loop)
for (let i = 0; i < abc.length; i++) {
  console.log(abc[i]);
}

// iterator loop for of
for (const letter of abc) {
  console.log(letter);
}

// iterating over objact properteis

const nums = {
  one: 1,
  two: 2,
  three: 3
}

// keyof - takes the properies in 'nums' and allows them to be used as an index or a key into the object.
// typeof - looks at the type of 'nums', it sees the three properties we have and their types as numbers.
let property: keyof typeof nums;

for (const property in nums) { // calculated at runtime when we use for...in with objects. Hence if anything modifies our object at runtime, it may cause undesirable behavior.
  console.log(property);
  // access the data at each of the properties
  console.log(`${nums[property]}`);
}

```

### Map Data Type

A map is a datastructure that associates one piece of data with another piece of data. Maps use the data association to make data access much faster than with an array. They load data immediately based on the association.

```ts

type Name = string;
type Score = number;

//                    KEY,  VALUE
const testScores: Map<Name, Score> = new Map();

// insert value into the map
testSccores.set("Alice", 95);
testSccores.set("Bob", 85);
testSccores.set("Carol", 75);

// iterate over our testScores map
for (const [name, score] of testScores) {
  console.log(`${name} score is ${score}`);
}

// iterate over only the keys
for (const name of testScores.keys()) { }

// iterate over only the values
for (const score of testScores.values()) { }

```

### Exceptions

We utilize exceptions to handle instances when unexpected errors happen in our code base.

```ts

function divide(lhs: number, rhs: number) {
  if (rhs === 0){
    throw new Error("Cannot divide by zero");
  }

  return lsh / rhs;
}


try {
    const a = divide(10, 2);
    console.log(a);
    // our error will happen here and we log our error message
    const b = divide(4, 0);
    console.log(b);
} catch (e) {
    console.erro(`${e}`);
}

```

### Type Assertions

We use them to tell Typescipt that our data is of a certain type.

```ts

// initialize our greeting variable
const greeting: unknown = "hello";

// we utilize our assertion
const greet = greeting as string;

```

### Union Types

Offer a way to specify that more than one type is acceptable.

```ts

// set union type
type Color = "red" | "green" | "blue";

const r: Color = "red";

```

### Type predicates

These help us to set up advanced guards for our data.

```ts
// typeguard: mainly helpful with primitive types. On our own interfaces or objects they don't even work.
type StrOrNum = string | number;
function sample(data: StrOrNum) {
  if (typeof data === "string") { // typecheck at runtime of the typeof data 
    // ...code 
  } else if (typeof data === "number") {
    // ...code
  }
}

// type predicate: helps us check for arbitrary objects that we create
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

// new union alias type
type Shape = Square | Circle;

// create type predicate: always return a boolean
function isSquare(shape: Shape): shape is Square {
  return shape.kind === "square";
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

// use our Square predicate
function calculateArea(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size ** 2; // will give us the area of a square
  }
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }

  throw new Error("unknown shape");
}

const square: Shape = { kind: "square", size: 5 };
const circle: Shape = { kind: "circle", radius: 2 };

```

### Optional Fields

These are properties that are not required mandatorily and can be omitted when not needed.

```ts

type Warranty = "standard" | "extended";

// function to return what should be displayed for each warranty
function warrantyInfo(warranty: Warranty): String {
  switch (warranty) {
    case "standard":
      return "90 day warranty";
    case "extended":
      return "180 day extended warranty";
  }
}

interface LineItem {
  name: string;
  quantity: number;
  warranty?: Warranty; // we use question mark to set this proprty as optional. It returns 'undefined' if value is not present.
}

function printLine(item: LineItem): void {
  console.log(`Item ${item.name}`);
  console.log(`Quantity ${item.quantity}`);

  if (item.warranty !== undefined) {
    console.log(`Warranty ${warrantyInfo(item.warranty)}`)
  } else {
    console.log(`Warranty: None`);
  }
}

// create items
const boxFan: LineItem = {
  name: "box fan",
  quantity: 1
}

console.log(printLine(boxFan));

const heater: LineItem = {
  name: "space heater",
  quantity: 2,
  warranty: "standard"
}

console.log(printLine(heater));

```

### Optional Chaining

It allows us to access nested properties of an object or call chained methods, even when one or more of these properties are null or undefined.

```ts

interface Pii {
  age?: number;
  address: string;
}

interface SearchResult {
  name: string;
  pii?: Pii;
}

class Database {
  search(name: string): SearchResult | undefined {
    switch (name) {
      case "John":
        return {
          name: "John Doe",
          pii: {
            age: 22
          }
        }
      case "Jane":
        return {
          name: "Jane Doe"
        }
      default: 
        return undefined
    }
  }
}

// create database
const database = new Database();

// without opitonal chanining ie the hard way
{
  const result = database.search("John");
  if (
    result !== undefined
    && result !== null
    && result.pii !== undefined
    && result.pii !== null
    && result.pii.age !== undefined
    && result.pii.age !== null
  ) {
    console.log(`${result.name} age is ${result.pii.age}`);
  }
}

// ***with optionale chaining: the optimal way to do it.***
{
  const result = database.search("John");
  // question mark is the optional chaining part that automatically checks if it's undefined or null, if it's not undefined or null continue with rest of the code
  if (result?.pii?.age) {
    console.log(`${result.name} age is ${result.pii.age}`);
  }
}

```

### Async Await

Helps our code to continue running while a given piece of code awaits external resources.

```ts

async function fetchUserData(userId: number): Promise<{name: string}> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
  const data = await response.json();

  return { name: data.name };
}

// call our async function
(async () => {
  // using asynchronous API with await
  try {
    const userData = await fetchUserDat(1);
    console.log(userData.name)
  } catch(e) {
    console.log(e)
  }
})();

// using the promise API
fetchUserData(1)
  .then((userData) => console.log(userData.name));
  .catch((e) => console.error(e));

``` 

### Unit testing

Testing allows us to confirm that our code works correctly in ideal circumstances and ensures our code behaves as expected when things go wrong.

Unit testing allows us to test individual units of code to ensure proper program behaviors. We can test individual units of a function or methods of a class.

Testing a function is like calling a function, we call it with some known data and then check the return value. 
If return value isn't what we expect then the test fails. 
If return value is what we expect then the test passes.


```ts

// our function code normally in a 'filename.ts' file.
// -> A basic function that concatenates two strings
export function concat(a: string, b: string): string {
  return `${a}${b}`;
}

// division function that returns an error if we try to divide by zero
export function divide(lhs: number, rhs: number): number {
  if (rhs === 0) {
    throw new Error("cannot divide by zero");
  } else {
    return lhs / rhs;
  }
}

// An asynchronous function that resolves
export function slowString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sample");
    }, 200);
  });
}

// An asynchronous function that fails
export function failedString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("whoops");
    }, 1);
  });
}

// ***** OUR TEST CODE NORMALLY IN A SEPARATE TEST FILE 'filename.test.ts' *****
// we'll use jest for testing

// test concat function
it('should say, "Hello, world!"', () => {
  expect(
    concat("Hello", " world!")
    ).toEqual("Hello, world!");
});

// test divide function
it("should divide", () => {
  expect(divide(10, 2)).toEqual(5);
});

it("should fail to divide by zero", () => {
  expect(() => {
    divide(10, 0);
  }).toThrow()
})

// test asynchronous functions
test("slow string fetches sample text", async   () => {
  slowString()
    .then((data) => {
      expect(data).toEqual("sample");
    })
    .catch((err) => expect(err).toBeUndefined());
});

test("failed string fails with a 'whoops'", async   () => {
  failedString()
    .then((data) => {
      expect(data).toBeUndefined;
    })
    .catch((err) => expect(err).toEqual("whoops"));
});

```

### Discriminated Unions

This is an advanced form of a union that allows us to discriminate over some data exists within the union. Helps enhance our code reliability and makes it a lot easier to write our code cause we just set the things that we want and anywhere else in our program it's going to automatically tell us if we did it correctly or not.

```ts

// create a discriminator and use switch for discrimination
type numbers = 1 | 2 | 3;

// kind: discriminator
type AccountCreationMessage = 
  | { kind: "ok"; greeting: "string" }
  | { kind: "passwordComplexityFailure"; message: string }
  | { kind: "userNameExists"; }

// use discriminated object
const ok: AccountCreationMessage = {
  kind: "ok",
  greeting: "Welcome to the platform!"
};

const passwordTooShort: AccountCreationMessage = {
  kind: "passwordComplexitFailure",
  message: "Password must be atleast 10 characters!"
};

const exists: AccountCreationMessage = {
  kind: "userNameExists"
};

// use switch function
function showMessage(msg:  AccountCreationMessage) {
  switch (msg.kind) {
    case "ok":
      console.log(`${msg.greeting}`);
      break;
    case "passwordComplexityFailure":
      console.log(`${msg.message}`);
      break;
    case "usernameExists":
      console.log("That username already exists!");
      break;
  }
}

showMessage(ok); // prints: Welcome to the platform!
showMessage(passwordTooShort); // prints: Password must be atleast 10 characters!
showMessage(exists) // prints: That username already exists!

```

### Const assertions

Const assertions provide an explicit type annotation to ensure that a value is treated as a literal type, rather than being widened to a more general type.

These allow us to do many things:
- We can make them to be similar to union types.

When we construct new literal expressions with const assertions, we can signal to the language:
- no literal types in that expression should be widened (e.g. no going from "hello" to string).
- object literals get `readonly` properties.
- array literals become `readonly` tuples.

```ts

// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;

```

```ts

// union type
type Rgb = "red" | "green" | "blue";
const red: Rgb = "red";

// using const assertion to make something similar to union
{
  const Color = ["red", "green", "blue"] as const;
  type Color = (typeof Color)[number]
  const blue: Color = "blue";

  // we can loop over the data as well
  for (const c of Color) {
    console.log(c);
  }
}


// With Objects

{
  const Department = {
    Executive: "top floor",
    Sales: "middle floor",
    Warehouse: "bottom floor"
  } as const; // it now becomes a read-only object, analyzed at compile time.
  // typeof: gets all the types of Department || [keyof typeof]: helps us index into our Deparment object
  type Department = (typeof Department)[keyof typeof Department]; // typeof: gets the property names of Department e.g Executice, Sales, Warehouse, 'keyof' allows them to be used as key, meaning index or operation of the Department object.

  let k: keyof typeof Department;
  for (k in Department) {
    console.log(`k = ${k}, floor = ${Department[k]}`);
    /* 
    ***Console response***

    key = Executive, floor = top floor
    key = Sales , floor = middle floor
    key = Warehouse, floor = bottom floor
    
    */
  }

  // if we want to access a specific department e.g Executive Department
  const exec: Department = Department.Executive;
}

```

### Generic Functions

These help us build components that are capable of working on the data of today as well as the data of tomorrow which will give us the most flexible capabilities for building up large software systems.

```ts

//generic function that can work with numbers, strings, booleans to return the first value in the array
function getFirst<T>(arr: T[]): T | undefined { // T: refers to Type of data
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

// call our getFirst function with different dataTypes
getFirst([1, 5]); // numbers: returns 1
getFirst(["a", "b"]); // strings: returns a
getFirst([true, false]) // booleans: returns true

```

### Generic Classes

Enable us to create a class and place any type of data within in using generics.

```ts

// create generic class
class Stack<T> {
  private elements: T[] = [];
  public push(element: T): void {
    this.elemens.push(element);
  };
  public pop(): T | undefined {
    return this.elements.pop();
  };
  public peek(): T | undefined {
    return this.elements[this.elements.lenght - 1];
  };
  public isEmpty(): boolean {
    return this.elements.lenght === 0;
  }
}

// create new stack
const strings = new Stack:<string>(); // always specify a type when creating a generic class
strings.push("Hello");
strings.push("World");
// remove last string
const world = strings.pop();

```

### Type definition files

Type definition files or or also know as type declaration files are any TypeScript files that have the `. d.` ts filename extension. These files are only meant to hold the type declarations of a particular script and not the source code itself. This means that they are not a part of the compilation process.

```ts

// example Javascript function that sums things together and returns that total
function add(a, b, ..args) {
  let total = a + b;
  for (let n of args) {
    total += n;
  }
  return total;
}

// returns the max from an array of numbers
function max(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce((a, b) => Math.max(a, b));
}

// changes text to upper case of lowerase and returns the new case
function setCase(message, kind) {
  if (kind === "upperCase") {
    return message.toUpperCase();
  } else if (kind === "lowercase") {
    return message.toLowerCase();
  } else {
    throw new Error("invalid kind: muse be 'uppercase' or 'lowercase'");
  }
}

// returns another function
function quote(message) {
  return () => {return `"${message}"`};
}

// export the functions
module.exports = {
  add,
  max,
  setCase,
  quote
}

// example code that would be in a type definiton file for the above Javascript function
export function add(a: number, b: number, ...numbers: number[]): number;

// type definition for max function
export function max(arr: number[]): number | null;

// type definition for setCase function
export type CaseKind = "uppercase" | "lowercase";
export function setCase(message: string, kind: CaseKind) string;

// type definition for quote function
export function quote(message: string): () => string;

// **** utilize our type definitions in a new file ***
import { add, max, setCase, quote } from "..add location of .ds file";
import CaseKind from "...add location of .ds file";

// use setCase definiton
const message = "hello";
const upperCase = setCase(message, "uppercase");

// add definiton
add(1, 2, 3, 4);

```

#### Type definitions for Objects


```ts

// example apiResponse
function apiResponse() {
  return {
    "status": "success",
    "data": {
      "items": [
        {
          "id": 1,
          "name": "Widget 1",
          "price": 10.99,
          "quantity": 50,
          "department": "Electronics"
        },
        {
          "id": 2,
          "name": "Widget 2",
          "price": 19.99,
          "quantity": 25,
          "department": "Home & Kitchen"
        },
        {
          "id": 3,
          "name": "Widget 3",
          "price": 20.99,
          "quantity": 15,
          "department": "Toys & Games"
        }
      ]
    }
  }
}

module.exports = {
  apiResponse
}

// create type definition for object
export type Status = "success" | "failure";

// const assertion for departments
const Departments = ["Electronics", "Home & Kitchen", "Toys & Games"] as const;
export type Department = (typeof Departments)[number];

export interface ApiResponseItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  department: Department;
}

export interface apiResponse {
  status: Status;
  data: {
    items: ApiResponseItem[]
  }
}

export function apiResponse(): ApiResponse | undefined;


// utilize our apiResponse object definiton
import { apiResponse } from "...add definition .d filename";

const response = apiResponse();
if (response !== undefined) {
  if (response.status === "success") {
    console.log(response.data.items[1].name); // response: Widget 2
  }
}

```

