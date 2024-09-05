var a = 3;
var b = 8;
//
var c = a;
var a = b;
var b = c;
//
console.log("a is " + a);
console.log("b is " + b);
//
var a = a+b;
var b = a-b;
var a = a-b;

console.log("a is " + a);
console.log("b is " + b);