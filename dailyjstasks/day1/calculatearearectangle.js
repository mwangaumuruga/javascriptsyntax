// calculatearearectangle.js

// Arrow function to calculate the area of a rectangle
let calculateArea = (length, width) => length / width;

// Function to handle the button click and display the result
function handleCalculate() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    
    let area = calculateArea(length, width);
    document.getElementById("result").innerText = "The calculated area is: " + area;
}
