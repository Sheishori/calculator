const calculator = document.querySelector("#calculator");
const display = calculator.querySelector("#display");
const buttons = calculator.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
numberButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (displayValue === 0) {
			displayValue = e.target.textContent;
			display.textContent = displayValue;
		} else {
			displayValue += e.target.textContent;
			display.textContent = displayValue;
		}
	})
});

const decimalButton = buttons.querySelector(".decimal");
decimalButton.addEventListener("click", (e) => {
	displayValue += e.target.textContent;
	decimalButton.disabled = true;
});

const signButton = buttons.querySelector(".change-sign");
signButton.addEventListener("click", () => {
	if (display.textContent !== "0"){
		if (display.textContent.toString().startsWith("-")) {
			displayValue = display.textContent.slice(1);
			display.textContent = displayValue;
		} else {
			displayValue = "-" + display.textContent;
			display.textContent = displayValue;
		}
	}
});

const operatorButtons = buttons.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (operator === "" || endChain === true) memory = displayValue;
		if (operator && endChain === false) display.textContent = operate();
		decimalButton.disabled = false;
		operator = e.target.textContent;
		displayValue = 0;
	})
});

const calculateButton = buttons.querySelector("#calculate");
calculateButton.addEventListener("click", () => {
	endChain = true;
	if (operator) display.textContent = operate();
});

function clear() {
	displayValue = 0;
	operator = "";
	endChain = false;
	decimalButton.disabled = false;
	display.textContent = displayValue;
}

const clearButton = buttons.querySelector("#clear");
clearButton.addEventListener("click", clear);

const clearElementButton = buttons.querySelector("#clear-element");
clearElementButton.addEventListener("click", () => {
	displayValue = display.textContent.slice(0, -1);
	if (displayValue === "") displayValue = 0;
	display.textContent = displayValue;
});

const percentButton = buttons.querySelector(".percent");
percentButton.addEventListener("click", () => {
	displayValue = Number(Number(display.textContent).toFixed(6)/100);
	display.textContent = displayValue;
});

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate() {
	memory = Number(memory);
	displayValue = Number(displayValue);
	switch(operator) {
		case "+":
			return memory = Number(add(memory, displayValue).toFixed(6));
		case "−":
			return memory = Number(subtract(memory, displayValue).toFixed(6));
		case "×":
			return memory = Number(multiply(memory, displayValue).toFixed(6));
		case "÷":
			if (displayValue === 0) return memory = "You want to end the world?"
			return memory = Number(divide(memory, displayValue).toFixed(6));
	}
}

let displayValue = 0;
let memory = 0;
let operator = "";
let endChain = false;
display.textContent = displayValue;