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

const decimalButton = buttons.querySelector(".decimal");
decimalButton.addEventListener("click", (e) => {
	if (operator) operatingValue += e.target.textContent;
	else current += e.target.textContent;
	decimalButton.disabled = true;
});

const operatorButtons = buttons.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (operator && endChain === false) display.textContent = operate();
		decimalButton.disabled = false;
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
	decimalButton.disabled = false;
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
			return current = Number(add(current, operatingValue).toFixed(6));
		case "−":
			return current = Number(subtract(current, operatingValue).toFixed(6));
		case "×":
			return current = Number(multiply(current, operatingValue).toFixed(6));
		case "÷":
			if (operatingValue === 0) return current = "You want to end the world?"
			return current = Number(divide(current, operatingValue).toFixed(6));
	}
}

let current = 0;
let operatingValue = "";
let operator = "";
let endChain = false;
display.textContent = current;