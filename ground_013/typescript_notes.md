## 🛠️ Typescript Reference

- Topics
    - Increment

### Increment

In Typescript we have the capability to increment our numbers just like we would in normal javascipt.

```typescript

// 'prefix' increment 'variable++' e.g a++
n = 5;
const k = n++; // 5
// assert.equal(k, 6); -> returns an error cause n is added to k and ++ is added later. 
assert.equal(n, 6) // 6 - works cause we check n with ++ which is 6.

// 'postfix' increment - '++variable' e.g ++b RECOMMENDED approach
p = 5;
const j = ++p; // 6 - we take ++ and add it to p and then assign it to j.
assert.equal(j, 6); // works as expected and 

```