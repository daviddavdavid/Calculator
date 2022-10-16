const firstButtonDisplay = document.querySelector(".number-display");
const secondButtonDisplay = document.querySelector(".upper-display");
let chosenOperator;
let operatorEnabled = true;
let equalsEnabled = false;
let decimalEnabled = true;

//numbers before the operator comes
let choseNumbersFirst;

let choseNumberSecond;
let limit = 0;

function operatorGiven(button, buttonText) {
    choseNumbersFirst = Number(firstButtonDisplay.textContent);
    chosenOperator = buttonText;
    firstButtonDisplay.textContent = "";
    operatorEnabled = false;
    secondButtonDisplay.textContent = `${choseNumbersFirst}${chosenOperator}`;
    equalsEnabled = true;
    limit = 0;

}

function equalsGiven() {
    choseNumberSecond = Number(firstButtonDisplay.textContent);
    let result = String(operate());
    if (result == "false") return;
    limit = result.length;
    decimalEnabled = true;
    if (result.includes(".")) {
        result = Math.round(result * 1000) / 1000
        decimalEnabled = false;
    }

    equalsEnabled = false;
    operatorEnabled = true;
    firstButtonDisplay.textContent = String(result);
    secondButtonDisplay.textContent = "";
    
}


function add(a,b) {
    return a + b;
}
limit = 0;
function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//a function that enables some buttons to work again
function changeBooleans(equalsState, operatorState) {
    
}
function operate() {

    switch(chosenOperator) {
        case "+":
            return add(choseNumbersFirst, choseNumberSecond);
        case "-":
            return subtract(choseNumbersFirst, choseNumberSecond);
        case "x":
            return multiply(choseNumbersFirst, choseNumberSecond);
        case "/":
            if (choseNumberSecond == "0") {
                alert("No stupid! You cannot divide by 0.")
                firstButtonDisplay.textContent = "0";
                return false;

            }

            return divide(choseNumbersFirst, choseNumberSecond);
    }

}

function buttonPressed(event) {
    let button = event.target;
    let buttonText = button.textContent;
    let firstDisplayText = firstButtonDisplay.textContent;
    
    if (button.className == "clear-button") {
        limit = 0;
        decimalEnabled = true;
        operatorEnabled = true;
        equalsEnabled = false;
        firstButtonDisplay.textContent = "";
        return;

    } else if (button.className == "delete-button") {
        if (limit > 0) limit--;
        firstButtonDisplay.textContent = firstDisplayText.slice(0, -1);
        return;

    } else if (button.className == "operator") {
        if (operatorEnabled == false) return;
        operatorGiven(button, buttonText)
        return;

    } else if (button.className == "decimal") {
        if (decimalEnabled == false) return;
        decimalEnabled = false;
        console.log("hello")

    } else if (button.className == "equals") {
        if (limit == 0 || equalsEnabled == false) return;
        equalsGiven()
        return;
    }

    limit++;
    if (limit < 15) {
        firstButtonDisplay.textContent += buttonText;
    }
    

}

const button = document.querySelectorAll("button");

button.forEach((element) => {
    element.addEventListener("click", buttonPressed)
});