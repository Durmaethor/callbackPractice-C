/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/


function first(names, callback) {
  callback(names.shift());
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function last(names, callback) {
  callback(names.pop());
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function multiply(num1, num2, callback) {
  callback(num1 * num2);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function contains(array, name, callback){
  var result = false;

  for( i = 0; i < array.length; i++){
    if(array[i] === name) {
      result = true;
    }
  }
  callback(result);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function uniq(names, callback) {
  var uniqArr = [];               //creates the array uniqArr

  for ( i = 0; i < names.length; i++) {    //loops through the names array
    if(uniqArr.indexOf(names[i]) === -1) {  // if the value of the items in the array do not match a value in uniqArr
      uniqArr.push(names[i]);               //push that item to the new array, uniqArr
    }
  }
  return callback(uniqArr);                 //then return uniqArr filled to be called from uniq
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function each(names, callback) {
  
  for ( var i = 0; i < names.length; i++){
    var indice = names[i];
    var item = i;
    callback(indice, item);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function getUserById(users, user, callback) {
  var person = {};

  for (var i = 0; i < users.length; i++){
    if (users[i].id === user) {
      person = users[i];
    }
  }
  return callback(person);
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
