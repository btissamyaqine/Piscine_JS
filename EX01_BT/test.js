import helloSomeone from './helloSomeone.js';

console.log(helloSomeone("42")); 
console.log(helloSomeone(""));
console.log(helloSomeone(null));
console.log(helloSomeone(42));
console.log(helloSomeone(-1));
console.log(helloSomeone(NaN));
console.log(helloSomeone(undefined));