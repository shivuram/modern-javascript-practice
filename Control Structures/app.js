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

// FOREACH
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
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

console.log(ids); //Getting Array

// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}