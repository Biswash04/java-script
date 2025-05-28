// function in java script
// A function is a like a resuable block of codes that performs specific tasks.

// syantax
function functionName() {
  // block of code.
}

// example
function greet() {
  console.log("hello, welcome to java script");
}
// here greet is the function name
// when we call it, it will run the code inside the curly braces {}

// calling a function
greet();

//  tip: for calling a  function means telling it to run.

//  Topic 1: functions with parametrs
function greetUser(name) {
  console.log("hello, " + name + "!");
  console.log(`hello, ${name}!`);
}

greetUser("biswash");

// the value you pass inside () is called an argument. ( Arguments are used during the call)
// name here is a parameter. (Parameters are used in the definations)

// topic 2: functions that returns values
function add(a, b) {
  return a + b;
}
let result = add(2, 4);
console.log(result);

// Why use functions ??
// reusable, easy for debugging, clean and organized code

// mini practise challange
function area(l, b) {
  return l * b;
}
let answer = area(10, 5);
console.log(answer);

// BONUS: Arrow functions {Modern java script}
// Arrow functions are a shorter way to write functions.

const sayHi = () => {
  console.log("Hi");
};

sayHi();
