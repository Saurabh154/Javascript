/* LOGICAL OPERATOR */
console.log("LOGICAL OPERATOR");
console.log();

var a = 4; //5
var b = 8;

if(a++<=3 && ++b<=50){ // first condition is false then does not check for second condition
    console.log("If block is executed!!!");
}else{
    console.log("Else block is executed!!!");
}
console.log(a, b); //5 8

console.log("-------------------");
var a = 4; // 5
var b = 8; // 8
if(a++<=10 || ++b<=50){   // first condition is true then doesnot check for second condition
    console.log("If block is executed!!!");
}else{
    console.log("Else block is executed!!!");
}
console.log(a, b); //5 8

console.log("-------------------");


console.log("TERNARY OPERATOR");
console.log();

var num = 20;

// num%2 == 0 ? console.log("Even Number") : console.log("Odd Number");
var res = num%2 == 0 ? `${num} is even`: `${num} is odd`;
console.log(res);


// let num = prompt("Enter the num");
// let res = num%2 == 0 ? `${num} is even`: `${num} is odd`;
// console.log(res);

console.log("Greatest of three number");

// WAP TO FIND GREATEST OF THREE NUMBER BY USING TERNARY OPERATOR

var a = 10;
var b = 60;
var c = 30;

var res = (a>b && a>c )  ? `${a} is greatest` : (b>c && b>a) ? `${b} is greatest` : `${c} is greatest`;
console.log(res);

// WAP TO FIND GREATEST OF TWO NUMBER BY USING TERNARY OPERATOR

var a = 20;
var b = 30;

var res = (a>b) ? `${a} is greatest` : `${b} is greatest`;
console.log(res);


