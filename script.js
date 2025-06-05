// title chnage text html and style

// 1. Change text with textcontent
const title = document.getElementById("main-title");

title.textContent = "Hello from javascript";

// 2. change HTML with innerHTML
const message = document.getElementById("message");

message.innerHTML = "<strong> This is bold text </strong>";

// 3. Change Style with .style
title.style.backgroundColor = "green";
title.style.color = "white";

// HOMEWORK
// do it in Button click
//  <i class="fa fa-times" onclick="hidemenu()"></i>
const button = document.getElementById("change-btn");

button.onclick = function () {
  const mainTitle = document.getElementById("main-title");

  mainTitle.style.backgroundColor = "orange";
};

button.onclick = function () {
  const mainTitle = document.getElementById("message");

  message.innerHTML = "<strong> You clicked button </strong>";
};
