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

function operate(operator, number) {
	switch(operator) {
		case add:
			return add(current, number);
		case subtract:
			return subtract(current, number);
		case multiply:
			return multiply(current, number);
		case divide:
			return divide(current, number);
	}
}

let current = 0;
display.textContent = current;