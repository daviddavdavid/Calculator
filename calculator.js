const firstButtonDisplay = document.querySelector(".number-display");
let limit = 0;

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
        return;
    } else if (button.className == "delete-button") {
        console.log("hi")
        if (limit > 0) limit--;
        console.log(limit)
        firstButtonDisplay.textContent = firstDisplayText.slice(0, -1);
        return;
    } 
    limit++;

    if (limit < 16) {
        firstButtonDisplay.textContent += buttonText;
    }
    

}

//this applies not to the clear and delete buttons because th
const button = document.querySelectorAll("button");

button.forEach((element) => {
    element.addEventListener("click", buttonPressed)
});