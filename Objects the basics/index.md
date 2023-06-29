// TASk - 1 
// Hello, object

Write the code, one line for each action:

1. Create an empty object user.
let user = {};


2. Add the property name with the value John.
user.name = "John";

3. Add the property surname with the value Smith.
user.surname = "Smith";

4. Change the value of the name to Pete.
user.name = "Pete";

5. Remove the property name from the object.
delete user.name;


// Task - 2

//  for emptiness

1. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
for(let key in obj){
    return false;
}
return true;
}


Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


// TASK -3

// Sum object properties

We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

function sum (obj){
    let sum = 0;
    for(let key in salaries){
         sum += salaries[key];
        return sum;
    } 

}

// TASK - 4

// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// solution

 function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof obj[key] === "number"){
           obj[key] = 2 * obj[key]
        }
    }

}