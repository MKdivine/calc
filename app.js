// Calculator functions

const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;
// All functions work in console on firefox

// Calculator logic

let number1 = 2;
let number2 = 2;
let operator = "+";


const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return addNumbers(a, b);
        case "-":
            return subtractNumbers(a, b);
        case "*":
            return multiplyNumbers(a, b);
        case "/":
            return divideNumbers(a, b);
    }
}
const calcResult = operate(number1, number2, operator);



// Calculator DOM UI
const resultDisplay = document.getElementById("result");

resultDisplay.textContent = "RESULT: " + calcResult;

// Calculator Clear Button - not working

const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    resultDisplay.textContent = "Result:   ";
});



