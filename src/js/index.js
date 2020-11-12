import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const btn = document.querySelector(".add");
let number = 1;

const addElement = function () {
  console.log("klik");
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.classList.add("square");
  console.log(number);

  if (number % 5 == 0) {
    div.classList.add("circle");
  }
  div.innerHTML = number;
  number++;
};

btn.addEventListener("click", addElement);
