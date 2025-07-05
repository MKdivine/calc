let firstNum = "";      // Hier speichern wir die erste Zahl (z. B. 5)
let secondNum = "";     // Hier speichern wir die zweite Zahl (z. B. 3)
let thirdNum = "";      // Hier speichern wir die dritte Zahl (z. B. 2)
let operator1 = "";       // Hier speichern wir +, -, *, /
let operator2 = ""; // Hier speichern wir den zweiten Operator, falls nötig
let userInput = "";  // Hier sammeln wir die Ziffern, die der Benutzer drückt
let result = "";  // Hier speichern wir das Ergebnis der Berechnung
let operatorClickCount = 0;
let tempResult = ""; // Hier speichern wir das Ergebnis der Berechnung


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
    userInput = "";
    resultDisplay.textContent = "cleared";
    setTimeout(function () {
        document.getElementById("result").textContent = "";
        resultDisplay.style.fontSize = "46px"; // Schriftgröße zurücksetzen
    }, 1000); // 
    result = ""; // Ergebnis zurücksetzen
    operator1 = ""; // Erster Operator zurücksetzen
    operator2 = ""; // Zweiten Operator zurücksetzen
    operatorClickCount = 0;
    console.log("Rechner zurückgesetzt.");
});

// User Input Button Clicks
numButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (userInput.length < 20) { // Maximale Länge der Eingabe auf 20 Zeichen beschränken
            userInput += button.textContent; // Hier wird die Zahl gespeichert, die der Benutzer drückt
            resultDisplay.textContent = userInput;
            console.log("User Input:", userInput);

            // Code für die Schriftgröße
            let baseSize = 48;
            let shrink = Math.max(0, userInput.length - 9) * 2;
            let fontSize = Math.max(32, baseSize - shrink); // niemals kleiner als 32px
            resultDisplay.style.fontSize = fontSize + "px";
        }
    });
});  // <-- Klammer hier geschlossen


// Calculator Operator Button and math functions
operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
            operatorClickCount++;
        }

        if (operatorClickCount === 1 && button.textContent !== "=") {
            operator1 = button.textContent;
            firstNum = userInput;
            userInput = "";
            console.log("Erster Operator gewählt:", operator1);
            console.log("Erste Zahl gespeichert:", firstNum);
        }
        if (operatorClickCount === 2 && button.textContent !== "=") {
            operator2 = button.textContent;
            // Hier userInput ist leer, man möchte secondNum speichern?
            // Wahrscheinlich besser secondNum speichern
            thirdNum = userInput; // Speichern der dritten Zahl
            userInput = "";
            console.log("Zweiter Operator gewählt:", operator2);
            console.log("Dritte Zahl gespeichert:", thirdNum);
        }

        if (button.textContent === "=") {


            if (operator1) {


                secondNum = userInput; // Speichern der zweiten Zahl
            }
           if (operatorClickCount === 2) {
                secondNum = ""
                thirdNum = userInput
            }
            console.log("Gleichheits-Button gedrückt.");
            console.log("Erste Zahl:", firstNum);
            console.log("Zweite Zahl:", secondNum);
            console.log("Dritte Zahl:", thirdNum);
            console.log("Erster Operator:", operator1);
            console.log("Zweiter Operator:", operator2);
            if (operator2) {
                console.log("Zweiter Operator:", operator2);
            }
            const calculationResult = finalResult(firstNum, secondNum, thirdNum, operator1, operator2);
            console.log("Berechnungsergebnis:", calculationResult);
            userInput = "";
        }
        console.log("Aktueller Speicher:", {
            firstNum,
            secondNum,
            thirdNum,
            operator1,
            operator2,
            userInput,
            operatorClickCount
        });

    });
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
console.log("finalResult wird definiert.");

function finalResult(firstNum, secondNum, thirdNum, operator1, operator2) {
    let result;
    let lastResult;

    console.log("finalResult aufgerufen mit:", firstNum, operator1, secondNum, operator2, thirdNum);

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
            if (secondNum === "0") {
                resultDisplay.textContent = "Error :o";
                console.error("Division durch 0!");
                return "Error :o";
            }
            result = divideNumbers(firstNum, secondNum);
            break;
        default:
            console.error("Unbekannter Operator:", operator1);
            return "Error";
    }
    resultDisplay.textContent = result; // Ergebnis anzeigen
    console.log(`Ergebnis der ersten Berechnung: ${firstNum} ${operator1} ${secondNum} = ${result}`);

    operator1 = ""; // Erster Operator zurücksetzen
    operatorClickCount = 1; // Operator-Klick-Zähler zurücksetzen


    // Falls ein zweiter Operator vorhanden ist, weitere Berechnung
    if (operator2) {
        console.log("Weiter mit zweitem Operator:", operator2);
        console.log("Zwischenergebnis:", result);
        console.log("Zweite Zahl für zweite Berechnung:", thirdNum);


        // Hier wird die zweite Berechnung durchgeführt
        console.log(`Zweite Berechnung mit: ${result} ${operator2} ${thirdNum}`);
        switch (operator2) {
            case "+":
                lastResult = addNumbers(result, thirdNum);
                break;
            case "-":
                lastResult = subtractNumbers(result, thirdNum);
                break;
            case "*":
                lastResult = multiplyNumbers(result, thirdNum);
                break;
            case "/":
                if (thirdNum === "0") {
                    resultDisplay.textContent = "Error :o";
                    console.error("Division durch 0 in zweiter Berechnung!");
                    return "Error :o";
                }
                lastResult = divideNumbers(result, thirdNum);
                break;
            default:
                console.error("Unbekannter Operator 2:", operator2);
                return "Error";
        }
        console.log(`Ergebnis der zweiten Berechnung: ${result} ${operator2} ${thirdNum}${lastResult}`);
        resultDisplay.textContent = result; // Ergebnis anzeigen
    }

    operator2 = ""; // Zweiten Operator zurücksetzen

    return lastResult !== undefined ? lastResult : result;
}
