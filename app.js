// Calculator functions
const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;

// All functions work in console on firefox

// Logic for inputs without prompt
const inputs = ['a', 'b']; // Die erste Eingabe ist 'a', die zweite 'b'
let currentInputIndex = 0;

function getNextInput() {
    const input = inputs[currentInputIndex];
    currentInputIndex++;
    return input;
}

const firstInput = getNextInput(); // Wird 'a' sein
const secondInput = getNextInput(); // Wird 'b' sein
let currentInput = "";
let calcResult = "";

// Calc logic for results in ui
const resultDisplay = document.getElementById("result");
const downscaledDisplay = document.getElementById("result");
// Calculator logic number, operator selection
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

// -------------------------------- Code for Calculator -------------------------------------- //


// Calculator Clear Button 
const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    currentInput = "";
    resultDisplay.textContent = "cleared";
});

getNextInput = numButtons.forEach((button) => {
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


// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log(button.textContent)
        if (button.textContent === "+") {   
        return resultDisplay.textContent = "";
            
        }
    });
})


