let total = prompt('How many km are left to go?');

// Your code below:


// ## 📝 Instructions:

// Once the user inputs an amount, one of the following responses will be printed to the console:

// 1. If there are more than 100 km left to go, we answer: `"We still have a bit of driving left to go"`.

// 2. If there are more than 50 km, but less or equal to 100 km, we answer: `"We'll be there in 5 minutes"`.

// 3. If there are less than or equal to 50 km, we answer: `"I'm parking. I'll see you right now"`.

// ## 💡 Hints:




let distanceLeft=prompt('How Many Kilometres are left to go?');
if (distanceLeft<=50){
    console.log( " `I'm parking. I'll see you right now`");
}
else if (distanceLeft<=100){
console.log("`We'll be there in 5 minutes`")
}
else{
    console.log("We still have a bit of driving left to go")
}