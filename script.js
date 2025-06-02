// Javascript objects

// what is object ?
// An object is the way to store related data together
// in a single variable using keyt-value pairs

let person = {
  name: "ram",
  age: 25,
  isStudent: true,
  hobbies: ["cycling", "music", "fotball"],
  company: {
    name: "company name",
    location: "pokhara",
  },
};

// key value pair
// keys (also called properties) are like labels (eg: "name" "age")
// - values can be anything: strings, numbers, booleans, arrays, even other objects

// accesing objects values
// console.log(person.age);

// adding or updating properties

person.age = 30; // update value

person.city = "pokhara"; // add new property

// console.log(person);

// deleting properties

delete person.age;

// console.log(person);

// looping through an object

for (let key in person) {
  console.log(key, "-", person[key]);
}

// objects inside array
// you can store multiple objects in an array - super useful

let users = [
  {
    name: "ram",
    age: 25,
  },
  {
    name: "sita",
    age: 22,
  },
];

console.log(users[0].name);
