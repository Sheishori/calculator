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