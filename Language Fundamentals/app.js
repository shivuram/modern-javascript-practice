// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
// console.log(today);
// console.log(typeof today);

//Type Conversion
const a = 10;
//a = 20;
//console.log(a); //Unable to change constant Value

//Convert To string
let val;
val = String(555);
val = String(true);
val = String([1,2,3]);

val = (5).toString();
val = (true).toString();

//Convert to Number
val = Number('5');

//String to Integer
val = parseInt('2.70');
console.log(val);
val = parseFloat('100.30677');
console.log(val.toFixed(2));