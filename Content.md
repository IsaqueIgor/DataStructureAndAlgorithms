# ES6

### Var / let / const

---
###  Freeze Object: 
    - A frozen object can no longer be changed;
  ```javascript
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

  ```
  ---
###  Clone Objects in JavaScript
```javascript
const food = { beef: '🥩', bacon: '🥓' }

const cloneFood = { ...food };

console.log(cloneFood); 
// { beef: '🥩', bacon: '🥓' }
```
```javascript
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }
```
---
###  Set Default Parameters for Your Functions
    In order to help us create more flexible functions, ES6 introduces default parameters for functions.
    Example:
```javascript
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
```
---
###  Rest Parameter with Function Parameters
 ```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```
---
### Clone Array
 ```javascript
const sheeps = ['🐑', '🐑', '🐑'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];
 ```
 ---
# JavaScript


# Advanced
