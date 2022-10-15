const firstButtonDisplay = document.querySelector(".number-display");
const secondButtonDisplay = document.querySelector(".upper-display");
let chosenOperator;
let operatorEnabled = true;

//numbers before the operator comes
let choseNumbersFirst;
let limit = 0;
function operatorGiven(button, buttonText) {
    choseNumbersFirst = firstButtonDisplay.textContent;
    chosenOperator = buttonText;
    firstButtonDisplay.textContent = "";
    operatorEnabled = false;
    secondButtonDisplay.textContent = choseNumbersFirst + chosenOperator;
}
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
    let button = event.target;
    let buttonText = button.textContent;
    let firstDisplayText = firstButtonDisplay.textContent;
    
    if (button.className == "clear-button") {
        limit = 0;
        firstButtonDisplay.textContent = "";
        return;
    } else if (button.className == "delete-button") {
        if (limit > 0) limit--;
        firstButtonDisplay.textContent = firstDisplayText.slice(0, -1);
        return;
    }

    if (button.className == "operator") {
        if (operatorEnabled == false) {
            return;
        }
        operatorGiven(button, buttonText)
        limit = 0;
        return;
    }

    limit++;

    if (limit < 15) {
        firstButtonDisplay.textContent += buttonText;
    }
    

}

//this applies not to the clear and delete buttons because th
const button = document.querySelectorAll("button");

button.forEach((element) => {
    element.addEventListener("click", buttonPressed)
});