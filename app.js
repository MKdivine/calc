
let firstNum = "";      // Hier speichern wir die erste Zahl (z. B. 5)
let secondNum = "";     // Hier speichern wir die zweite Zahl (z. B. 3)
let operator = "";       // Hier speichern wir +, -, *, /
let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = ""  // Hier speichern wir das Ergebnis der Berechnung

// Calculator functions
const addNumbers = (a, b) => Number(a) + Number(b);
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;
// All functions work in console on firefox


// Calc logic for results in ui
const resultDisplay = document.getElementById("result");
const downscaledDisplay = document.getElementById("result");
// Calculator logic number, operator selection
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

// -------------------------------- Code for Calculator -------------------------------------- //


// Nutzereingabe
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        userInput += button.textContent
        resultDisplay.textContent = userInput
        if (userInput.length > 9) {
            downscaledDisplay.style.fontSize = "40px";
        }
        if (userInput.length > 10) {
            downscaledDisplay.style.fontSize = "38px";
        }
        if (userInput.length > 11) {
            downscaledDisplay.style.fontSize = "36px";
        }
        if (userInput.length > 12) {
            downscaledDisplay.style.fontSize = "34px";
        }
        else {
            downscaledDisplay.style.fontSize = "46px";
        }
    });

});

// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.textContent === "=") {
            secondNum = userInput;
            if (operator === "+") {
                result = addNumbers(firstNum, secondNum);
                resultDisplay.textContent = result;
            }
            if (operator === "-") {
                result = subtractNumbers(firstNum, secondNum);
                resultDisplay.textContent = result;
            }
            if (operator === "*") {
                result = multiplyNumbers(firstNum, secondNum);
                resultDisplay.textContent = result;
            }
            if (operator === "/") {
                result = divideNumbers(firstNum, secondNum);
                resultDisplay.textContent = result;
            }
        } else {
            firstNum = userInput;  // Erste Zahl speichern (z. B. 5)
            operator = button.textContent;  // Operator merken (z. B. "+")
            userInput = "";                     // Zurücksetzen für die zweite Zahl
        }
    });
});

// Calculator Clear Button 
const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    userInput = "";
    resultDisplay.textContent = "cleared";
    result = "";
    operator = "";
});











// In Nutzereingabe wiedereinfügen
