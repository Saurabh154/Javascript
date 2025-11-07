/* STRING FUNCTION */
console.log("STRING FUNCTION");

let n = 20;
console.log(n, typeof n); // 20 number

n = String(n);
console.log(n, typeof n); // 20 string

n = String(true)
console.log(n, typeof n); // true string

n = String(false)
console.log(n, typeof n); // false string

n = String(undefined)
console.log(n, typeof n); // undefined string

n = String(NaN)
console.log(n, typeof n); // NaN string

n = String(null)
console.log(n, typeof n); // null string 

console.log();

/* BOOLEAN FUNCTION  */
console.log("BOOLEAN FUNCTION");

let a = false;
console.log(a, typeof a); // false boolean

a = Boolean(0);
console.log(a, typeof a); // false boolean

a = Boolean("");
console.log(a, typeof a); // false boolean

a = Boolean(NaN);
console.log(a, typeof a); // false boolean

a = Boolean(undefined);
console.log(a, typeof a); // false boolean

a = Boolean(null);
console.log(a, typeof a); // false boolean

a = Boolean("saurabh");
console.log(a, typeof a); // true boolean

a = Boolean(123);
console.log(a, typeof a); // true boolean

a = Boolean(true);
console.log(a, typeof a); // true boolean


/* ASSIGNMENT OPERATOR */
console.log();
console.log("ASSIGNMENT OPERATOR");

var totalSalary = 500;
totalSalary += 200;
console.log(totalSalary);

totalSalary -= 100;
console.log(totalSalary);

totalSalary *= 100;
console.log(totalSalary);

totalSalary /= 100;
console.log(totalSalary);

totalSalary %= 100;
console.log(totalSalary);


/* UNARY OPERATOR */
console.log();
console.log("UNARY OPERATOR");

var b = 2;
var c = ++b + ++b;  // 3 + 4 = 7
console.log(c);


var x = 4;
var y = x++ + x++ + x++;
console.log(x, " ", y);

var x = 6; 
var y = ++x + x++ + x + x--;  
console.log(x, " ", y);

var x = 9; 
console.log(x++); // 9
console.log(x); // 10

var x = 9; // 10 11
x++;
console.log(++x);

console.log("----------------");

var x = 3; //30
x = x++ + ++x + x++; // 3 + 5 + 5 = 13

console.log(x); // 13

x = ++x + x++ ; // 14 + 14 = 28
console.log(x); // 28

x = ++x; //29
console.log(x); //29

x++; 
console.log(x); //30

x = ++x; //31
console.log(x); //31

// final o/p : 13 28 29 30 31




















