const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');
const c = Symbol.for('b');
console.log(b===c) // true
object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols);

console.log(Object.getOwnPropertySymbols(window))