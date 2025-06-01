// Topic: what is loop ?
// A Loop lets us run the same block of code again - until certain condition is met.

// types of loops in javascript
// 1. for loop
// 2. while loop
// 3. do while loop

// 1. FOR LOOP
for (let i = 1; i <= 5; i++) {
  // console.log("number", i);
}

// break down
// let i = 1 start from
// i <= 5 run as long as i is less than or equal to 5
// i++ increase i by 1 each time

// 2. WHILE LOOP
let count = 1;

while (count <= 3) {
  // console.log("count", count);
  count++;
}

// 3. DO WHILE LOOP
let num = 1;

do {
  // console.log("num", num);
  num++;
} while (num <= 1);

// even if the condition is false, do while runs at least one time

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("number", i);
  }
}
