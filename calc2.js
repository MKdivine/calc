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
// ...existing code...

clearButton.addEventListener("click", () => {
    console.log("Clear gedrückt");
    inputArray.length = 0; // Eingabe-Array zurücksetzen
    resultDisplay.textContent = "cleared";
    userInput = ""; // Benutzer-Eingabe zurücksetzen
    result = ""; // Ergebnis zurücksetzen
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000);
    console.log("Rechner zurückgesetzt. inputArray:", inputArray, "userInput:", userInput, "result:", result);
});

// User Input Button Clicks
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("Nummer gedrückt:", button.textContent);
        if (userInput.length < 20) {
            userInput += button.textContent;
            resultDisplay.textContent = userInput;
            inputArray.push(button.textContent);
            console.log("Aktuelles inputArray nach Zahl:", inputArray);
            let baseSize = 48;
            let shrink = Math.max(0, userInput.length - 9) * 2;
            let fontSize = Math.max(32, baseSize - shrink);
            resultDisplay.style.fontSize = fontSize + "px";
            calcArray(inputArray);
        }
    });
});

function calcArray(inputArray) {
    console.log("calcArray aufgerufen mit:", inputArray);
    const groupedInput = [];
    let userInput = "";

    inputArray.forEach((item) => {
        if (!isNaN(item)) {
            userInput += item;
            console.log("userInput (Zahl wird gebaut):", userInput);
        } else {
            if (userInput !== "") {
                groupedInput.push(userInput);
                userInput = "";
            }
            groupedInput.push(item);
            console.log("Operator erkannt und gepusht:", item);
        }
    });
    if (userInput != "") {
        groupedInput.push(userInput);
    }
    console.log("Final groupedInput:", groupedInput);

    if (groupedInput.length === 3) {
        if (groupedInput.includes("+")) {
            let firstNum = groupedInput[0];
            let secondNum = groupedInput[2];
            result = addNumbers(firstNum, secondNum);
            resultDisplay.textContent = result;
            console.log("Addition:", firstNum, "+", secondNum, "=", result);
            groupedInput.length = 0;
            groupedInput.push(result);
            inputArray.length = 0;
            result = "";
            userInput = "";
            firstNum = "";
            secondNum = "";
            console.log("groupedInput nach Addition:", groupedInput);
        }
    }
}

// Operator Button Clicks
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("Operator gedrückt:", button.textContent);
        userInput += button.textContent;
        resultDisplay.textContent = userInput;
        inputArray.push(button.textContent);
        console.log("Aktuelles inputArray nach Operator:", inputArray);
        calcArray(inputArray);
    });
});

// ...existing code...


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

