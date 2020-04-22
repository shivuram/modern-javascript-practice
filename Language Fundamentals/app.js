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
//console.log(val);
val = parseFloat('100.30677');
//console.log(val.toFixed(2));

//---------------------- Math Object --------------------------------
let math;
math = Math.floor(2.89999999);
math = Math.min(2, 5);
math = Math.max(2,33,4,1,55,6,3,-2);
math = Math.random();
console.log(math);

//-----------------------Stings--------------------------------------

const firstName = 'William';
const lastName = 'Johnson';

// Concatenation
str = firstName + ' ' + lastName;

//Append
str += 'Hello';

// Escaping
str =  'That\'s awesome, I can\'t wait';

//Length
str = firstName.length;

//concat()
str = firstName.concat(' ', lastName);

//Change Case
str = firstName.toLowerCase();
str = firstName.toUpperCase();

str = firstName.indexOf('i',2);
str = firstName.lastIndexOf('a');

// charAt()
str = firstName.charAt('1');

// substring()
str = firstName.substring(1,4);

// slice()
str = firstName.slice(1,4);

//split()
str = firstName.split(','); //Give an Array like

//replace()
str = firstName.replace('Wi', 'We');

// includes()
str = firstName.includes('W'); //True
str = firstName.includes('w'); //False

console.log(str);