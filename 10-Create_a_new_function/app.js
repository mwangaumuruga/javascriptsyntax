// function shortIntroduction() {
//   // Complete this function's body and arguments
  
// }

// // Fill the gaps with your data in the correct order
// console.log(shortIntroduction(" ", " ", " "))

// # 📝 Instructions:

// 1. Complete the function called `shortIntroduction()`, which returns a short introduction of you.

// 2. The function will ask for 3 arguments: `name`, `profession`, and `age`.

// 3. They should be concatenated as follows: `Hello! my name is {name}, my profession is {profession}. I am {age} years old.`

// 4. Finally, inside a `console.log()`, call the function with the data in the correct order to finish the exercise.



function shortIntroduction(name,profession,age){
  alert('Hello! my name is'+ name + 'My Profession is '+ profession +'And i am'+age+  "years old" );
}
let Name = prompt('Enter your name');
let Profession = prompt('Enter your Proffession');
let Age = prompt('Enter your age');

shortIntroduction(Name,Profession,Age);
