let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = "";  // Hier speichern wir das Ergebnis der Berechnung
let operatorClickCount = 0;
let tempResult = ""; // Hier speichern wir das Ergebnis der Berechnung
let inputArray = []; // Hier speichern wir die Zahlen, die der Benutzer drückt

// Calculator functions
const addNumbers = (a, b) => Number(a) + Number(b);
const subtractNumbers = (a, b) => Math.round(a - b);
const multiplyNumbers = (a, b) => Math.round(a * b);
const divideNumbers = (a, b) => Math.round(a / b * 100) / 100;
// All functions work in console on firefox


// Calc logic for results in ui
const resultDisplay = document.getElementById("result");
resultDisplay.maxLength = 12;
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("CLEAR");

// -------------------------------- Code for Calculator -------------------------------------- //

// Calculator Clear Button 
clearButton.addEventListener("click", () => {
    inputArray.clear(); // Eingabe-Array leeren
    resultDisplay.textContent = "cleared";
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000); // 
    result = ""; // Ergebnis zurücksetzen
    operator1 = ""; // Erster Operator zurücksetzen
    operator2 = ""; // Zweiten Operator zurücksetzen
    operatorClickCount = 0;
    firstNum = ""; // Erste Zahl zurücksetzen
    secondNum = ""; // Zweite Zahl zurücksetzen
    thirdNum = ""; // Dritte Zahl zurücksetzen
    console.log("Rechner zurückgesetzt.");
});

// User Input Button Clicks
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (userInput.length < 20) { // Maximale Länge der Eingabe auf 20 Zeichen beschränken
            userInput += button.textContent; // Hier wird die Zahl gespeichert, die der Benutzer drückt
            resultDisplay.textContent = userInput;

            inputArray.push(button.textContent);
            console.log(inputArray) // Hier wird die Zahl in das Array gespeichert
            console.log("Aktuelle Benutzereingabe:", userInput);
            
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
      userInput += button.textContent; // Hier wird der Operator gespeichert, den der Benutzer drückt
      resultDisplay.textContent = userInput;
      inputArray.push(button.textContent);
      console.log(inputArray);
     }) // Hier wird der Operator in das Array gespeichert
});

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


// Das ist die finale Berechnung, die das Ergebnis zurückgibt
// Hier wird die Berechnung durchgeführt, wenn der Benutzer auf den Gleichheits-Button klickt
// console.log("finalResult wird definiert.");

// function finalResult(firstNum, secondNum, thirdNum, operator1, operator2) {

//         resultDisplay.textContent = result; // Ergebnis anzeigen
//     }

//     operator2 = ""; // Zweiten Operator zurücksetzen

//     return lastResult !== undefined ? lastResult : result;

