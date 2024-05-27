// function getRandomInt()
// {
// 	let randomNumber = Math.random();
// 	return randomNumber;
// }


// console.log(getRandomInt());

// 	`Math.random()` only returns decimal numbers from 0 to 1, and we need integer numbers from 1 to 10.

// // + Multiply the `Math.random()` function by 10 to move the decimal point one slot to the right.

// + Use the `Math.floor()` function to remove the rest of the decimals and have only integers.
function getRandomInt()
{
	let randomNumber = Math.random();
	return Math.floor(randomNumber*10);
}


console.log(getRandomInt());