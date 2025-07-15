let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = "";  // Hier speichern wir das Ergebnis der Berechnung
let tempResult = ""; // Hier speichern wir das Ergebnis der Berechnung
let inputArray = []; // Hier speichern wir die Operatoren und Zahlen für die Berechnung
// Calculator functions
let groupedInput = []; // Hier speichern wir die gruppierten Eingaben
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

// -------------------------------- Code for Calculator ---------------------------------- //



// Calculator Clear Button 
clearButton.addEventListener("click", () => {
    inputArray.length = 0; // Eingabe-Array zurücksetzen
    resultDisplay.textContent = "cleared";
    userInput = ""; // Benutzer-Eingabe zurücksetzen
    result = ""; // Ergebnis zurücksetzen
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000); // 
    console.log("Rechner zurückgesetzt.");
});

// Zwischenspeicher für die Eingabe hinzufügen
// User Input Button Clicks
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (userInput.length < 20) { // Maximale Länge der Eingabe auf 20 Zeichen beschränken
            userInput += button.textContent; // Hier wird die Zahl gespeichert, die der Benutzer drückt
            resultDisplay.textContent = userInput; // Ergebnis anzeigen
            inputArray.push(button.textContent); // Hier wird die Zahl in das Array gespeichert
            console.log(inputArray);
            // Code für die Schriftgröße
            let baseSize = 48;
            let shrink = Math.max(0, userInput.length - 9) * 2;
            let fontSize = Math.max(32, baseSize - shrink); // niemals kleiner als 32px
            resultDisplay.style.fontSize = fontSize + "px";
            calcArray(inputArray); // Aufruf der Funktion zur Gruppierung der Eingaben
        }
    });
});

function calcArray(inputArray) {

    const groupedInput = [];
    let userInput = "";

    inputArray.forEach((item) => {
        if (!isNaN(item)) {
            // If the item is a number, append it to userInput
            userInput += item;
            console.log("userInput", userInput);
        } else {
            if (userInput !== "") {
                // If userInput is not empty, push it to groupedInput
                groupedInput.push(userInput);
                userInput = ""; // Reset userInput for the next number
            }
            // If the item is an operator, just push it to groupedInput
            groupedInput.push(item);
        }
    });
    console.log("groupedInput", groupedInput);

    if (userInput != "") {
        // If there's any remaining userInput, push it to groupedInput
        groupedInput.push(userInput);
    }
    console.log("Final groupedInput", groupedInput);
    if (groupedInput.length === 3) {
        if (groupedInput.includes("+")) {
            const firstNum = groupedInput[0];
            const secondNum = groupedInput[2];
            result = addNumbers(firstNum, secondNum);
            resultDisplay.textContent = result;

            // Eingaben zurücksetzen
            inputArray.length = 0;
            userInput = "";
        }
    }

}




// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        userInput += button.textContent; // Hier wird der Operator gespeichert, den der Benutzer drückt
        resultDisplay.textContent = userInput;
        inputArray.push(button.textContent);
        console.log(inputArray);
        calcArray(inputArray); // Aufruf der Funktion zur Gruppierung der Eingaben
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

