## 🛠️ Typescript Reference

- Topics
    - [Increment](#increment)
    - [Functions](#functions)

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

function call (color, sound, word) { // params for function execution to be successfull
  // execution for a successfull call
}

```

