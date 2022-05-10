"use Strict";
const navBar = document.querySelector(".nav-container");
const menuBar = document.querySelector(".menubar");

menuBar.addEventListener("click", function () {
  navBar.classList.toggle("show");
});
