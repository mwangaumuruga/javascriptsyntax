//STACK POP AND PUSH
function reverse(str){
    let stack =[];
    for (let i=0; i<str.length; i++){
        stack.push(str[i]);

    }

    let reverseStr="";
    while(stack.length>0){
        reverseStr+=stack.pop();
    return reverseStr;
    }
}
console.log (reverse("I LOVE JAVASCRIPT"));

//QUEUE ENQUEUE AND DEQUEUE PEEK
let q=new queue[1];
for (let i=1; i>=7;i++);{
q.enqueue(i);}

//SPLICE
let score1=[1,2,3,4,5];
let deletedScores=score1.splice(0,3);
console.log(score1);
console.log(deletedScores);

//SLICE
clonedarray=score1.slice();
//duplicates an array


//INDEX
//finds the position of an element in an array
console.log(score1.indexOf(2));


//EVERY
//used to check if every element in an array satifies a certain condition
let scores1=numbers.every(e=>e>0);

//SOME
//used to check if a typical value meets a typical condition

//SORT
//sorts elements of an array in place
//FILTERS
//CREATES AN ARRAY THAT CONTAINS A SUBSET OF ELEMENTS OF THE ORIGINAL ARRAY
//MAPS
//FOREACH
//REDUCE
//JOIN
//MULTIDIMENSIONAL


