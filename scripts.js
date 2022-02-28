const calculator = document.querySelector("#calculator");
const display = calculator.querySelector("#display");
const buttons = calculator.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
numberButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (current === 0) {
			current = e.target.textContent;
			display.textContent = current;
		} else if (operator) {
			operatingValue += e.target.textContent;
			display.textContent = operatingValue;
		} else {
			current += e.target.textContent;
			display.textContent = current;
		}
	})
});

const operatorButtons = buttons.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (operator && endChain === false) display.textContent = operate();
		operatingValue = "";
		operator = e.target.textContent;
	})
});

const calculateButton = buttons.querySelector("#calculate");
calculateButton.addEventListener("click", () => {
	endChain = true;
	if (operator) display.textContent = operate();
});

function clear() {
	current = 0;
	operatingValue = "";
	operator = "";
	endChain = false;
	display.textContent = current;
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
	current = Number(current);
	operatingValue = Number(operatingValue);
	switch(operator) {
		case "+":
			return current = add(current, operatingValue);
		case "−":
			return current = subtract(current, operatingValue);
		case "×":
			return current = multiply(current, operatingValue);
		case "÷":
			return current = divide(current, operatingValue);
	}
}

let current = 0;
let operatingValue = "";
let operator = "";
let endChain = false;
display.textContent = current;