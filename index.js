
//first js code by separating concerns putting behaviour of elements in another file
console.log("hello world");

//variable
let firstName ='CODEKARTEL';
console.log(firstName); 

//constants
const interstRates= 0.3;
console.log(interstRates)

//primitive or valuetypes in js
let number = 3 //integer
let names = 'codekartel' //strings
let isApproved = true  //boolean
let namesake = undefined //undefined
let color = null  //null

//REFERNCE TYPES
//Objects
//Classes
//Fucntions


const person = {

    nameS:'CODEKARTEL',
    age:61
};
console.log(person);

person.nameS = 'wolrdboss' //the dot notation
console.log(person);

person['nameS']="Adidja Azim Palmer"; //the bracket notation
console.log(person);



let selectedColors = ['red','blue', 'sky'];
console.log(selectedColors[0]);


function greet(namez){
    console.log('hello'+ ''+namez);
}
greet('codekartel');