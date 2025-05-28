// function sayhello() {
//     alert('hello world');
// }

// what is variable
// 1. var
// 2. let
// 3.const

// 1.var

var number = 123;

// syntax
// variable variableName = value

// 2. let
let hi = 456;

// 3. const
const okay = 789;

// declare / declaration
// initialize / intialization

//declare
let person;

//initialize
person = "biswash";

// let person = "biswash" decleration + initialization

//const = constant

let surname = "khanal";
surname = "gurung";

// console.log(surname);

// naming rules for java script variables.

// 1. can contain letters, digits, underscore and dollar signs.
// eg: person, person123, _person and $person.

// 2. must start from letter or  _ or $ but not a from a number.
// eg: 123person  (not allowed)

// 3. case sensitive (person and Person are different)

// 4. cannot be a reserved keyword like let, class, return etc.

// Data types

// 1. string
let city = "pokhara";
let message = "hello, pokhara! ";

// backticks
let greeting = `good morning ${city}`;

// 2. number
//integer
let age = 30;
//decimal
let price1 = 99.99;

// 3. Boolean
let isOnline = false;
let isDarkmode = true;

// 4. undefined
let country;
//  console.log(country)

// 5. null
let selectedcolor = null;

//  console.log(selectedcolor)

// 6. Object
let person2 = {
  name: "ram",
  age: 30,
  isstudent: false,
};

//  console.log(person2)

// Operators

// 1. arithmetic operators
let a = 10;
let b = 20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b)

// 2. assignment operators

let x = 5;
x += 5; // x = x+5
x -= 5; // x = x-5
x *= 5; // x = x*5

// console.log(x)

// 3. comparison operators

// console.log(5 == "5") // true (loose equality)
// console.log(5 === "5") // false (strict equality)
// console.log(5 != 4);   // not equals to
// console.log(10 > 5);
// console.log(3 <= 3);  // less than equal to

// Bonus tip
// == compares values, === compares both values and data types.

// 4. Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // AND OPERATORS  (both must be true)
console.log(isLoggedIn || isAdmin); // or operator  (atleat one must be true)
console.log(!isLoggedIn); // not (flips the value)

// mini practise challenge
let amount = 100;
let tax = 0.1;

let total = amount + amount * tax;
console.log("total amount = ", total);
