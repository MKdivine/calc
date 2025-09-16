// Aufgeräumte Version von calc2.js

let userInput = "";      // aktuell eingetippte Ziffern/Zeichen (als String)
let result = "";         // aktuelles Rechenergebnis (als String/Number)
let tempResult = "";     // optional, für Zwischenresultate
let inputArray = [];     // gesammelte Tasten (Ziffern und Operatoren)

// Math operations
const addNumbers = (a, b) => Number(a) + Number(b);
const subtractNumbers = (a, b) => Math.round(a - b);
const multiplyNumbers = (a, b) => Math.round(a * b);
const divideNumbers = (a, b) => Math.round(a / b * 100) / 100;

// DOM-Elemente (defensiv)
const resultDisplay = document.getElementById("result");
if (!resultDisplay) console.warn("Element '#result' nicht gefunden.");

const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("CLEAR");
const sumButton = document.querySelector(".SUM");
// -------------------------------- Code for Calculator ---------------------------------- //

// Nummern-Buttons
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("Nummer gedrückt:", button.textContent);
        if (userInput.length >= 20) return;

        userInput += button.textContent;
        if (resultDisplay) resultDisplay.textContent = userInput;

        inputArray.push(button.textContent);
        console.log("Aktuelles inputArray nach Zahl:", inputArray);

        // Dynamisches Font-Scaling
        let baseSize = 48;
        let shrink = Math.max(0, userInput.length - 9) * 2;
        let fontSize = Math.max(32, baseSize - shrink);
        if (resultDisplay) resultDisplay.style.fontSize = fontSize + "px";

        
    });
});
sumButton.addEventListener('click', () => {
  // Dieser Code läuft nur, wenn der = Button geklickt wurde
  console.log("= gedrückt");
  // Hier deine Berechnung
  operate(inputArray);
});


// Berechnungsfunktion (arbeitet mit einer lokalen groupedInput-Repräsentation)
function operate(inputArray) {
    console.log("operate aufgerufen mit:", inputArray);

    const groupedInput = [];
    let buildingNumber = "";

    inputArray.forEach((item) => {
        if (!isNaN(item)) {
            buildingNumber += item;
            console.log("userInput (Zahl wird gebaut):", buildingNumber);
        } else {
            if (buildingNumber !== "") {
                groupedInput.push(buildingNumber);
                buildingNumber = "";
            }
            groupedInput.push(item);
            console.log("Operator erkannt und gepusht:", item);
        }
    });

    if (buildingNumber !== "") groupedInput.push(buildingNumber);
    console.log("Final groupedInput:", groupedInput);

    if (groupedInput.length === 3) {
        let firstNum = groupedInput[0];
        let secondNum = groupedInput[2];
        
        switch (groupedInput[1]) {
            case "+":
                result = addNumbers(firstNum, secondNum);
                console.log("Addition:", firstNum, "+", secondNum, "=", result);
                break;
            case "-":
                result = subtractNumbers(firstNum, secondNum);
                console.log("Subtraktion:", firstNum, "-", secondNum, "=", result);
                break;
            case "*":
                result = multiplyNumbers(firstNum, secondNum);
                console.log("Multiplikation:", firstNum, "*", secondNum, "=", result);
                break;
            case "/":
                result = divideNumbers(firstNum, secondNum);
                console.log("Division:", firstNum, "/", secondNum, "=", result);
                break;
            default:
                console.log("Unbekannter Operator:", groupedInput[1]);
                return;
        }

        if (resultDisplay) resultDisplay.textContent = result;
        inputArray.length = 0;
        inputArray.push(String(result));
        userInput = String(result);
        result = "";
        tempResult = "";
        console.log("groupedInput nach Berechnung:", groupedInput, "neues inputArray:", inputArray);
    }
}

// Operator-Buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const operator = button.textContent;
        console.log("Operator gedrückt:", operator);

        if (inputArray.length === 1 && !isNaN(inputArray[0])) {
            userInput = inputArray[0] + operator;
        } else {
            userInput += operator;
        }

        if (resultDisplay) resultDisplay.textContent = userInput;
        inputArray.push(operator);
        console.log("Aktuelles inputArray nach Operator:", inputArray);

        operate(inputArray);
    });
});

// Clear-Button
if (clearButton) {
    clearButton.addEventListener("click", () => {
        console.log("Clear gedrückt");
        inputArray.length = 0;
        userInput = "";
        result = "";
        tempResult = "";
        if (resultDisplay) {
            resultDisplay.textContent = "cleared";
            resultDisplay.style.fontSize = "46px";
            setTimeout(() => {
                resultDisplay.textContent = "";
            }, 1000);
        }
        console.log("Rechner zurückgesetzt. inputArray:", inputArray, "userInput:", userInput, "result:", result);
    });
} else {
    console.warn("Clear-Button (#CLEAR) nicht gefunden.");
}