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
//console.log(math);

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

// -------------------------Template Literals ------------------------------------
const names = "Shivu";
const ages = 25;
const city = "chennai";
// Without template strings (es5)
html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

// With template strings (es6)

function hello(){
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

//document.body.innerHTML = html;

//----------------------------------------Array & Array Methods -----------------------------
const numbers = [1,2,4,3,4,6,7,1,9];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
console.log(mixed);

let arry;
arry = numbers.length; // Get array length
arry = Array.isArray(numbers); // Check if is array
arry = numbers[3];
// Insert into array
//numbers[2] = 100;
arry = numbers.indexOf(4);

numbers.push(250); //Add on to end
numbers.unshift(200); //Add on to front
numbers.pop(); // Take off from end
numbers.shift(); // Take off from front
numbers.splice(1, 3); // Splice values
numbers.reverse();

// Sorting arrays
val = fruit.sort();

val = numbers.sort(function(x, y){
  return x - y;
});

function over50(num){
  return num > 5;
}

val = numbers.find(over50); //Find method

val = numbers.find(num => {
     return num > 5;
});

console.log(val);