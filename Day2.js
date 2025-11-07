let a = 10;
let b = 20;

// a + b => (a,b) is operand 

console.log("The addition a and b = " +a+b);

console.log("Addition is : ", (a+b));
console.log("Subtraction is : ", (b-a));
console.log("Multiplication is : ", (a*b));
console.log("Division is : ", (b/a));
console.log("Modulo is : ", (b%a));

console.log();

//CONCATENATION
console.log("Addition" + a + b);
console.log("Addition" + a);
console.log(a + "Addition");
console.log("Addition " + "Happen");
console.log(a + b);

//TEMPLATE LITERALS
console.log(`The addition of ${a} and ${b} = ${a+b}`);

// Taking input from user

// let p = prompt("Enter the value of p")
// let q = prompt("Enter the value of q")
// console.log("Result by-default gives in concatenated form " + (p*q));

console.log();
console.log("TypeCasting");


// console.log(Number (p) + NUmber (q));

// Type conversion (by programmer)
let n = 10;
console.log(n, typeof n); //10, number 

n = Number("123");
console.log(n, typeof n); //123, number

n = Number("jsp"); 
console.log(n, typeof n); //NaN, number

n = Number(true);
console.log(n, typeof n); //1, number

n = Number(false);
console.log(n, typeof n); //0, number

n = Number(undefined)
console.log(n, typeof n); //NaN, number

n = Number(null)
console.log(n, typeof n); //0, number

console.log();

//Type cohersion (imlicitly)
console.log("Type Cohersion");
console.log();

console.log(10 * "10"); // 100 "10"->implicitly converted to number
console.log(10 * true); // 10
console.log(10 * undefined); // NaN
console.log("2" * "2"); // 4
console.log(10 * null); // 0
console.log("gopal" * "krishna"); // NaN
console.log("k"*"2"); // NaN
















