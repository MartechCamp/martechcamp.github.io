"use strict";

const input = document.querySelector(".char--input");
const log = document.querySelector(".char--count");

input.addEventListener("input", function (e) {
  console.log(e.target.value.length);
  log.textContent = e.target.value.length;
});

if (a == b) {
  console.log("they match!");
}

const newFunction = function (a, b) {
  return a + b;
};
