// How to handle Events in javascript

// events example: click, input chnages, mouse overs

// 1. Handling a click Event
const btn = document.getElementById("mybtn");

btn.addEventListener("click", function () {
  console.log("Btn was clicked");
});

// Addeventlistener listens for the click and runs the function.

// 2. Handling Input change
document.getElementById("username").addEventListener("change", function () {
  console.log("hello");
});
// change fires when the user moves focus away from the input after editing

// 3. Mouse Events

const div = document.getElementById("div");
div.addEventListener("mouseover", function () {
  console.log("mouse hovered ");
  div.style.backgroundColor = "red";
});

div.addEventListener("mouseout", function () {
  console.log("mouse out ");
  div.style.backgroundColor = "green";
});
