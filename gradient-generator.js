// define global variables to cache elements
var body = document.querySelector("#background");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("#random");
var curColor = document.querySelector("#currentColor");

function changeBackground() {
	var gradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	curColor.textContent = gradient;
}

function pickRandomColor() {
	  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function selectRandomColors() {
	color1.value = pickRandomColor();
	color2.value = pickRandomColor();
	changeBackground();
}

body.onload = changeBackground();
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
button.addEventListener("click", selectRandomColors);