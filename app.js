/***Make a Calculator!** using prompt(), and variables, make a program that does the following:

1. Prompts the user for first number.
2. Stores that first number
3. Prompts the user for the second number.
4. stores that number and responds with the SUM by using an alert.

BONUS: Make a program that can subtract, multiply, and also divide!*/
let numberOne = prompt(`give me a number`);
let numberTwo = prompt(`give me another number`);
let operation = prompt(`choose an operator between +, -, *, /`);
let functionArray = [
    `the result is ${parseFloat(numberOne) + parseFloat(numberTwo)}`,
    `the result is ${parseFloat(numberOne) - parseFloat(numberTwo)}`,
    `the result is ${parseFloat(numberOne) * parseFloat(numberTwo)}`,
    `the result is ${parseFloat(numberOne) / parseFloat(numberTwo)}`
];
while(operation != "+" && operation != "-" && operation != "*" && operation != "/"){
    operation = prompt(`i said +, -, *, / you little bad boy ^^, give me one good this time plz`);
}
if(operation == "+"){
    alert(`${functionArray[0]}`);
}
else if(operation == "-"){
    alert(`${functionArray[1]}`);
}
else if(operation == "*"){
    alert(`${functionArray[2]}`);
}
else if(operation == "/"){
    alert(`${functionArray[3]}`);
}
