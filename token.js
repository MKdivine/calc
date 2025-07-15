let ari = ["1", "+","2","*","3"]// Example input array
console.log(ari)

const groupedInput = [];
let userInput = "";

ari.forEach((item) => {
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