
let max = prompt("Please enter a max number :");
while (isNaN(max) || max < 1) {
    max = prompt("Please enter a valid max number :");
}
console.log(max);

let secretNum = Math.floor(Math.random() * max);

console.log(secretNum);

let guess = prompt(`I have chosen a number between 1 and ${max}, can you guess it ?`);
while (guess != secretNum) {
    while (isNaN(guess) || max < 1) {
        guess = prompt(`try again with a correct number?`);
    } 
    if (guess < secretNum) {
        guess = prompt(`The secret number is higher than ${guess}, try again:`);
    } 
    else {
        guess = prompt(`The secret number is lower than ${guess}, try again:`);
    } 
}

alert("GG")