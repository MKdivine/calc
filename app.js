
let firstNum = "";      // Hier speichern wir die erste Zahl (z. B. 5)
let secondNum = "";     // Hier speichern wir die zweite Zahl (z. B. 3)
let operator = "";       // Hier speichern wir +, -, *, /
let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = ""  // Hier speichern wir das Ergebnis der Berechnung

let numMem = ""; // Hier speichern wir das Ergebnis der vorherigen Berechnung

// Logic for inputs without prompt 
// const inputs = ['a', 'b']; // Die erste Eingabe ist 'a', die zweite 'b'
// let currentInputIndex = 0;
//  function getNextInput() {
//     const input = inputs[currentInputIndex];
//     currentInputIndex++;
//     return input;
// }
// const firstInput = getNextInput(); // Wird 'a' sein
// const secondInput = getNextInput(); // Wird 'b' sein

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

    });

});

// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        userInput = firstNum;
        console.log(firstNum);
        userInput = "";
        operator = button.textContent;
        resultDisplay.textContent = operator;


        if (operator == "+") {
            userInput = secondNum;
            console.log(secondNum);
            result = addNumbers(firstNum, secondNum);

        }

        if (operator == "=") {

            resultDisplay.textContent = result;

        }

    });
})


// Calculator Clear Button 
const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    userInput = "";
    resultDisplay.textContent = "cleared";
});











// In Nutzereingabe wiedereinfügen
// if (currentInput.length > 9) {
//     downscaledDisplay.style.fontSize = "40px";
// }
// if (currentInput.length > 10) {
//     downscaledDisplay.style.fontSize = "38px";
// }
// if (currentInput.length > 11) {
//     downscaledDisplay.style.fontSize = "36px";
// }
// if (currentInput.length > 12) {
//     downscaledDisplay.style.fontSize = "34px";
// }