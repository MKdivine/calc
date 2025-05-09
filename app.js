
let firstNum = "";      // Hier speichern wir die erste Zahl (z. B. 5)
let secondNum = "";     // Hier speichern wir die zweite Zahl (z. B. 3)
let operator = "";       // Hier speichern wir +, -, *, /
let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = ""  // Hier speichern wir das Ergebnis der Berechnung


let savedResult = ""; // Hier speichern wir das Ergebnis der Berechnung




// Calculator functions
const addNumbers = (a, b) => Number(a) + Number(b);
const subtractNumbers = (a, b) => Math.round(a - b)
const multiplyNumbers = (a, b) => Math.round(a * b);
const divideNumbers = (a, b) => Math.round(a / b * 100) / 100;
// All functions work in console on firefox


// Calc logic for results in ui
const resultDisplay = document.getElementById("result")
resultDisplay.maxLength = 12;
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

// -------------------------------- Code for Calculator -------------------------------------- //


// Nutzereingabe
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (userInput.length < 20) { // Maximale Länge der Eingabe auf 20 Zeichen beschränken
            userInput += button.textContent; // Hier wird die Zahl gespeichert, die der Benutzer drückt
            resultDisplay.textContent = userInput

            // Code für die Schriftgröße
            let baseSize = 48;
            let shrink = Math.max(0, userInput.length - 9) * 2;
            let fontSize = Math.max(32, baseSize - shrink); // niemals kleiner als 32px
            resultDisplay.style.fontSize = fontSize + "px";
        }
    });

});

// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {

        if (button.textContent === "=") {
            secondNum = userInput;

            if (operator === "/" && secondNum === "0") {
                resultDisplay.textContent = "Error :o";
                setTimeout(function () {
                    resultDisplay.textContent = "";
                    resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
                }, 2000); // 
                result = ""; // Ergebnis zurücksetzen
                operator = ""; // Operator zurücksetzen
                return; // Abbrechen, wenn Division durch 0
            }

            switch (operator) {
                case "+":
                    result = addNumbers(firstNum, secondNum);
                    resultDisplay.textContent = result;
                    break;
                case "-":
                    result = substratNumbers(firstNum, secondNum);
                    resultDisplay.textContent = result;
                    break;
                case "*":
                    result = multiplyNumbers(firstNum, secondNum);
                    resultDisplay.textContent = result;
                    break;
                case "/":
                    result = divideNumbers(firstNum, secondNum);
                    resultDisplay.textContent = result;
                    break;
            }

        } else {
            firstNum = userInput;  // Erste Zahl speichern (z. B. 5)
            operator = button.textContent;  // Operator merken (z. B. "+")
            userInput = "";
            // Zurücksetzen für die zweite Zahl
        }
    });
});

// Calculator Clear Button 
const clearButton = document.getElementById("CLEAR");

clearButton.addEventListener("click", () => {
    userInput = "";
    resultDisplay.textContent = "cleared";
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000); // 
    result = ""; // Ergebnis zurücksetzen
    operator = ""; // Operator zurücksetzen
});









