// Calculator functions

const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;
// All functions work in console on firefox

// Calculator logic default

let number1 = 86;
let number2 = 2;
let operator = "+";

// Calculator save inputs

// let currentInput = "";
let previousInput = "";
let currentOperator = "";
let resetScreen = false;
let clearDisplay = ""


// Calculator logic for numbers 1-9 and 0 selection
const resultDisplay = document.getElementById("result");
const readButton = document.querySelectorAll(".number");
const downscaledDisplay = document.getElementById("result");
let currentInput = "";

readButton.forEach((button) => {
    button.addEventListener("click", function() {
        currentInput += button.textContent
        resultDisplay.textContent = currentInput
        if(currentInput.length > 16) {
            downscaledDisplay.style.fontSize = "42px";
        }
        if(currentInput.length > 17) {
            downscaledDisplay.style.fontSize = "38px";
        }
        if(currentInput.length > 18) {
            downscaledDisplay.style.fontSize = "36px";
        }
        
    });
        
      }); 

        


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


resultDisplay.textContent = "RESULT: " + calcResult;

// Calculator Clear Button - not working

const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    currentInput = "";
    resultDisplay.textContent = "";
});

