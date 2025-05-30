// iF ELSE Statements in javascript

// topic: Basic If statements
let age = 18;

if (age >= 18) {
  console.log("you can vote!");
}

// here, javascript checks the condition age>=18.
// if it's true, it runs the code inside the {}.

// topic: If else statement
let age2 = 16;

if (age2 >= 18) {
  console.log("you can vote!");
} else {
  console.log("sorry, you're too young to vote.");
}
// if the condition is false, it jumps top the else block.

// topic: Else if statement
let score = 85;

if (score >= 90) {
  console.log("grade A");
} else if (score >= 80) {
  console.log("grade B");
} else {
  console.log("keep trying");
}
// use else if when you have more than two conditions.

// mini practise
let temperature = 30;

// conditions
//if temperature greater than 40, It's too hot
// if temperature less than 10, it's freezing
//otherwise weather looks nice

if (temperature > 40) {
  console.log("its too hot");
} else if (temperature < 10) {
  console.log("its freezing");
} else {
  console.log("weather looks nice");
}

// IMPORTANT TIP
//Always use comparison operators inside conditions

// operator        meaning
// >               greater than
// <               less than
// >=              greater than or equal to
// <=              less than or equal to
// ===             equal in value & type
// !==             not equal in value & type

// BONUS: using ig inside a function

function checklogin(isloggedIN) {
  if (isloggedIN) {
    console.log("Welcome Back");
  } else {
    console.log("please log in ");
  }
}

checklogin(true);
