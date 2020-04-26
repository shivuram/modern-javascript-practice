const id = 100;

// EQUAL TO
if(id == 100){
  //console.log('CORRECT');
} else {
 //console.log('INCORRECT');
}

//console.log(id === 100 ? 'CORRECT' : 'INCORRECT'); //Ternary Operator

// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    //console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    //console.log('Stop the loop');
    break;
  }

  //console.log('Number '+ i);
}

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  //console.log(cars[i]);
}

// FOR OF LOOP //Loop through array
for(const element of cars){
    //console.log(element);
}

//Not having access to indexes in above approach, then we need to do manually
let i = 0;
for(const element of cars){
    //console.log(element);
    //console.log(i);
    i++;
}

// FOREACH --> Perform Specific Action on each array
cars.forEach(function(car, index, array){
  //console.log(`${index} : ${car}`);
  //console.log(array);
});

// MAP //Array of Object
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

//console.log(ids); //Getting Array

// FOR IN LOOP 
//loops through the properties of an object
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}

//Nested loops

const battleLog = [
    {
        firstName: 'John', 
        lastName: 'Doe',
        age: 40
    },
    {
        firstName: 'Shivu', 
        lastName: 'Ram',
        age: 20
    }
]

let j = 0;
for(const element of battleLog){
    console.log(`#${j}`);
    for(const key in element){
        console.log(`${key} => ${element[key]}`);
    }
    j++;
}

// ------------------------------------- Error Handling --------------------------------------

try {
  nonExistentFunction();
  alert('Can u execute Me'); //Not executes remaining try block after executing error in previous line
}
catch(error) {
  console.error(error);
  console.log(`${error.name}: Function is not defined`);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
finally {
    console.log('finally'); //Execute irrespective of any errror found in try catch
}

console.log('Program Continues....');

//Optional Catch Binding. If we don’t need error details, catch may omit it:
//This is a recent addition to the language. Old browsers may need polyfills.

// try {
//     nonExistentFUnction();
// } 
// catch {

// }

function func() {
    try {
        return 1;
    } catch(e) {
        /* ....*/
    } finally {
        alert( 'finally' );
    }
}

alert( func() ); // first works alert from finally, and then this one

//Use catch block to provide fallback logic

var xyz = 5;

try {
    nonExistentFunction();
} catch(error) {
    console.log(error);
    xyz = 100; //fallback logic
    alert('Something Wrong, So add xyz to 100');
}

console.log(xyz);