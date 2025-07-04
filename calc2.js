
let firstNum = "";      // Hier speichern wir die erste Zahl (z. B. 5)
let secondNum = "";     // Hier speichern wir die zweite Zahl (z. B. 3)
let operator1 = "";       // Hier speichern wir +, -, *, /
let operator2 = ""; // Hier speichern wir den zweiten Operator, falls nötig
let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = ""  // Hier speichern wir das Ergebnis der Berechnung
let operatorClickCount = 0;
let tempResult = ""; // Hier speichern wir das Ergebnis der Berechnung


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
const clearButton = document.getElementById("CLEAR");

// -------------------------------- Code for Calculator -------------------------------------- //

// Calculator Clear Button 


clearButton.addEventListener("click", () => {
    userInput = "";
    resultDisplay.textContent = "cleared";
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000); // 
    result = ""; // Ergebnis zurücksetzen
    operator1 = ""; // Erster Operator zurücksetzen
    operator2 = ""; // Zweiten Operator zurücksetzen
});

// User Input Button Clicks
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
        if (button.textContent !== "") {
            operatorClickCount++;
        }
        if (operatorClickCount > 3) {
            resultDisplay.textContent = "Error: Too many operators";
            setTimeout(function () {
                resultDisplay.textContent = "";
                resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
            }, 2000); // 
            userInput = ""; // Eingabe zurücksetzen
            result = ""; // Ergebnis zurücksetzen
            operator1 = ""; // Operator zurücksetzen
            operator2 = ""; // Zweiten Operator zurücksetzen
            firstNum = ""; // Erste Zahl zurücksetzen
            secondNum = ""; // Zweite Zahl zurücksetzen
            return; // Abbrechen, wenn zu viele Operatoren gedrückt wurden
        }
        if (operatorClickCount > 1 && button.textContent !== "=") {
            operator1 = button.textContent; // Speichern des ersten Operators
            firstNum = userInput; // Erste Zahl speichern (z. B. 5)
            userInput = ""; // Eingabe zurücksetzen für die nächste Zahl
        }
        else if (operatorClickCount > 2 && button.textContent !== "=") {
            operator2 = button.textContent; // Speichern des zweiten Operators
            tempResult = finalResult(firstNum, secondNum, operator1); // Berechnung mit dem ersten Operator
            resultDisplay.textContent = tempResult; // Ergebnis anzeigen
            userInput = ""; // Eingabe zurücksetzen für die nächste Zahl
        }



        if (button.textContent === "=") {
            secondNum = userInput;
            let res = finalResult(firstNum, secondNum, operator1, operator2);
            resultDisplay.textContent = res;
            userInput = "";
            // ggf. weitere Rücksetzungen


            // if (operator === "/" && secondNum === "0") {
            //     resultDisplay.textContent = "Error :o";
            //     setTimeout(function () {
            //         resultDisplay.textContent = "";
            //         resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
            //     }, 2000); // 
            //     result = ""; // Ergebnis zurücksetzen
            //     operator = ""; // Operator zurücksetzen
            //     return; // Abbrechen, wenn Division durch 0
            // }
        }
        else {
            operator1 = button.textContent; // Speichern des Operators (z. B. +, -, *, /)
            firstNum = userInput; // Erste Zahl speichern (z. B. 5)
            userInput = ""; // Eingabe zurücksetzen für die nächste Zahl
        }

    }
    );
});


// Das ist die finale Berechnung, die das Ergebnis zurückgibt
// Hier wird die Berechnung durchgeführt, wenn der Benutzer auf den Gleichheits-Button klickt
function finalResult(firstNum, secondNum, operator1, operator2) {
    let result;

    // Erste Berechnung
    switch (operator1) {
        case "+":
            result = addNumbers(firstNum, secondNum);
            break;
        case "-":
            result = subtractNumbers(firstNum, secondNum);
            break;
        case "*":
            result = multiplyNumbers(firstNum, secondNum);
            break;
        case "/":
            if (secondNum === "0") return "Error :o";
            result = divideNumbers(firstNum, secondNum);
            break;
        default:
            return "Error";
    }

    // Falls ein zweiter Operator vorhanden ist, weitere Berechnung
    if (operator2) {
        switch (operator2) {
            case "+":
                result = addNumbers(result, secondNum);
                break;
            case "-":
                result = subtractNumbers(result, secondNum);
                break;
            case "*":
                result = multiplyNumbers(result, secondNum);
                break;
            case "/":
                if (secondNum === "0") return "Error :o";
                result = divideNumbers(result, secondNum);
                break;
            default:
                return "Error";
        }
    }

    tempResult = result;
    return result;
}










