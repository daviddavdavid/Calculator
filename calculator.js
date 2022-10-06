const firstButtonDisplay = document.querySelector(".number-display");

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }

}

function buttonPressed(event) {
    let buttonText = event.target.textContent;
    firstButtonDisplay.textContent = buttonText;
}

//this applies not to the clear and delete buttons because th
const button = document.querySelectorAll("button");

button.forEach((element) => {
    element.addEventListener("click", buttonPressed)
});