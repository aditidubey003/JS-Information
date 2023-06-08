// Task 1
// if (a string with zero)

// Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

// Yes, the alert will be visible 


// Task 2

//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let answer = prompt('What is the “official” name of JavaScript?');

if( answer === "ECMAScript"){
alert("Right!");
} else {
  alert("You don't know?");
}

// Task - 3
//Show the sign

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.


let num = prompt('Enter a Number', 0);

if( num > 0){
alert(1);
} else if ( num < 0){
  alert(-1);
} else{
  alert(0);
}