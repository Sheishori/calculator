const calculator = document.querySelector("#calculator");
const display = calculator.querySelector("#display");
const buttons = calculator.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
numberButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (current === 0) {
			current = e.target.textContent;
			display.textContent = current;
		} else {
			current += e.target.textContent;
			display.textContent = current;
		}
	})
});

const operatorButtons = buttons.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		memory = current;
		current = 0;
		operator = e.target.textContent;
	})
});

const calculateButton = buttons.querySelector("#calculate");
calculateButton.addEventListener("click", () => {
	current = operate();
	display.textContent = current;
});

const clearButton = buttons.querySelector("#clear");
clearButton.addEventListener("click", () => {
	current = 0;
	memory = 0;
	operator = "";
	display.textContent = current;
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
	current = Number(current);
	switch(operator) {
		case "+":
			return add(memory, current);
		case "−":
			return subtract(memory, current);
		case "×":
			return multiply(memory, current);
		case "÷":
			return divide(memory, current);
	}
}

let current = 0;
let memory = 0;
let operator = "";
display.textContent = current;