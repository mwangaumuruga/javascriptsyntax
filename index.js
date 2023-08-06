
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

function temperature(temp){
    if (temp >=30)
      {  console.log('its too hot');}
    else{
    console.log("we can live with this weather");}
}
temperature(19);


//unary operators
let f =false;
let t=true;
console.log(+f); //converts the boolean values to numbers zero and one
console.log(+t);

//increment and decrement
// can be prefix or postfix ++ ___---


//comparison  operators they  give a boolean value true or false
const a=5,b=6,c=7;
console.log(a!=b);//not equal to
console.log(a==b);//equal to
console.log(a==='a');//strict equal to type and value
console.log(a!==b);//stictly not equal


//Logical operators
const z=true,y = false, x=4;
 console.log(a&&a);//if both are equal
 console.log(a||b)//one is true
 console.log(!a);//reverses the answer




 //if else can be nestedand many more

 //for loop to execute a piece of code for several times if the condition is true
  const n=5;
  for( let i=1; i<=n; i++){
    console.log(`i love javascript`);
  } ///print the javascript code 5 times


  //ask and print output
d=prompt('what is your name');
console.log(d);

//convert a string to an int
e=parseInt(prompt('how old are you'));
console.log(e);
