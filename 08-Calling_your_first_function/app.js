// // ## 📝 Instructions:

// // 1. Call the function `isOdd()` and pass the number 45345 as its argument.

// 2. Print the output of the function to the console

function isOdd(myNumber)
{
	return !(myNumber % 2 == 0);
}

// Your code below:
let checkNumber=prompt("enter number to be checked if its odd?");
output=(isOdd(checkNumber))

// let output = isOdd(checkNumber);

console.log(output);
if (output==true){console.log("your number is odd");}
else{
    console.log("your number is not odd");
}