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

const operatorButtons = buttons.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (operator === "") memory = displayValue;
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