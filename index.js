const buttonReset = document.getElementById("reset");
const buttonDel = document.getElementById("del");
const buttonResove = document.getElementById("calc");

const buttonDivide = document.getElementById("div");
const buttonAdd = document.getElementById("plus");
const buttonLess = document.getElementById("moin");
const buttonMultiply = document.getElementById("foix");

const buttonPoint = document.getElementById("point");

const bttonZero = document.getElementById("zero");
const buttonOne = document.getElementById("un");
const bttonTow = document.getElementById("deux");
const buttonTrew = document.getElementById("trois");
const buttonFore = document.getElementById("quatre");
const buttonFive = document.getElementById("cinque");
const buttonSix = document.getElementById("sixe");
const buttonSeven = document.getElementById("sept");
const buttonHeugt = document.getElementById("huit");
const buttonNing = document.getElementById("neuf");

const screenElement = document.getElementById("screen");

buttonReset.addEventListener("click", () => {
	PrintToTheScreen("0");
});

buttonDel.addEventListener("click", () => {
	screenElement.innerHTML = screenElement.innerHTML.slice(0, -1);
	PrintToTheScreen(screenElement.innerHTML);
});

buttonResove.addEventListener("click", () => {
	screenElement.innerHTML = eval(screenElement.innerHTML);
	PrintToTheScreen(screenElement.innerHTML);
});

buttonDivide.addEventListener("click", () => {
	AddToMemory("/");
});

buttonAdd.addEventListener("click", () => {
	AddToMemory("+");
});

buttonLess.addEventListener("click", () => {
	AddToMemory("-");
});

buttonMultiply.addEventListener("click", () => {
	AddToMemory("*");
});

buttonPoint.addEventListener("click", () => {
	AddToMemory(".");
});

bttonZero.addEventListener("click", () => {
	AddToMemory(0);
});

buttonOne.addEventListener("click", () => {
	AddToMemory(1);
});

bttonTow.addEventListener("click", () => {
	AddToMemory(2);
});

buttonTrew.addEventListener("click", () => {
	AddToMemory(3);
});

buttonFore.addEventListener("click", () => {
	AddToMemory(4);
});

buttonFive.addEventListener("click", () => {
	AddToMemory(5);
});

buttonSix.addEventListener("click", () => {
	AddToMemory(6);
});

buttonSeven.addEventListener("click", () => {
	AddToMemory(7);
});

buttonHeugt.addEventListener("click", () => {
	AddToMemory(8);
});

buttonNing.addEventListener("click", () => {
	AddToMemory(9);
});

function AddToMemory(text) {
	screenElement.innerText = screenElement.innerHTML + text;
	PrintToTheScreen(screenElement.innerHTML);
}

function PrintToTheScreen(text) {
	screenElement.innerText = text;
}

