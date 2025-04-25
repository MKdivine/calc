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

let currentInput = "";
let previousInput = "";
let currentOperator = "";
let resetScreen = false;


// Calculator logic
let readButton = document.querySelectorAll(".number");
readButton.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
        resultDisplay.textContent = button.textContent; // or any other logic you want when a number is clicked
    });
});
9

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
    resultDisplay.textContent = "RESULT:   ";
});

//video background control
const video = document.getElementById("bg-video");
  video.playbackRate = 0.1; // 0.5 = halb so schnell, 1 = normal, 2 = doppelt so schnell


