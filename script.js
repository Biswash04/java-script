// title: What is an ARRAY?

// instead of writing

let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";

// we can do
let fruits = ["apple", "banana", "mango"];

// creating an array
let colors = ["red", "blue", "green"];
// array are written indside square brackets [], and values
// are seperated by commas

// accessing array items
// console.log(colors[0]); //red
// console.log(colors[1]); // blue
// console.log(colors[2]); // green

// first item is at index 0

// using loops with arrays

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// useful array methods
let names = ["ram", "shyam"];

// add to end
names.push("hari");

// remove from end
names.pop();

// add to start
names.unshift("sita");

//remove from start
names.shift();

// check length
console.log(names.length);
