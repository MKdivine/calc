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
const operatorButton = document.querySelectorAll(".operator");
let currentInput = "";

let inputOne = readButton.forEach((button) => {
    button.addEventListener("click", function () {
        currentInput += button.textContent
        resultDisplay.textContent = currentInput
        if (currentInput.length > 9) {
            downscaledDisplay.style.fontSize = "40px";
        }
        if (currentInput.length > 10) {
            downscaledDisplay.style.fontSize = "38px";
        }
        if (currentInput.length > 11) {
            downscaledDisplay.style.fontSize = "36px";
        }
        if (currentInput.length > 12) {
            downscaledDisplay.style.fontSize = "34px";
        }

    });

});

operatorButtton.forEach((button) => {
    button.addEventListener("click", function () {
        if (button) {
            inputOne = previousInput;
            previousInput = a;
            currentInput = inputOne

            inputOne = b;

        }
        const operate = (a, b, operator) => {
            switch (operator) {
                case "+":
                    return addNumbers(a, b);

            }
        }
        const calcResult = operate(number1, number2, operator);
    })





    // Calculator DOM UI

    resultDisplay.textContent = "RESULT: " + calcResult;

    // Calculator Clear Button - not working
    const clearButton = document.getElementById("CLEAR");

    clearButton.addEventListener("click", () => {
        currentInput = "";
        resultDisplay.textContent = "";
    });

