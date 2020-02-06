const numbers = [5, 7,4,9,14, 3];
const above100 = [101,203,450];


console.log(Math.max(...numbers));

const merged = [1,2,...numbers, ...above100];

console.log(merged.reverse());
console.log(Math.max(...merged));
