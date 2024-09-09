/*
    Write a function that takes two parameters faces and times
    Inside of it, log to the console times times a die with faces faces.
    Console log : die 1 : result, die 2 : result for each die.

Expected result for, for example, (6, 5) (the numbers should be random of course)

"Die 1: 4"
"Die 2: 1"
"Die 3: 1"
"Die 4: 6"
"Die 5: 3"

Let's write a function that takes as parameter a string and the amount of times we want to repeat it. Then, log to the console the result.

Example:

repeat("$", 5);
// expected result : "$$$$$"

Remember to test if the number is actually a number

Let's write a function that takes a firstName and a lastName as parameters and presents gives the full name with the lastName being an inital.*/
function dieFaceTimes(face, times){
    let x = face;
    let y = times;
    let z;
    for( i=0 ; i <= y ; i++){
        z = Math.floor((Math.random() * x) + 1);
        console.log("die " + i +" = "+z);
    }
}
dieFaceTimes(20, 10);

function stringRepeater(someString, occurence){
    let x = someString;
    let y = occurence;
    for( i=0 ; i < y ; i++){
        console.log(x);
    }
}
dieFaceTimes(20, 10);
stringRepeater("i am imad", 5);

