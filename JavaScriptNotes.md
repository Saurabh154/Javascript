#### ==OPERATORS== 

Def : Operator is a symbol which is use it perform some specific task.

>##### <ins>ARITHMETIC OPERATOR (+, - , * , / , % )
1. Additon(+)
2. subtraction(-)
3. multiplication(*)
4. division(/)
5. modulo(%)

>**CONCATENATION**
* Combing or joining two or more operands
* To perform concatenation, we should used + operator
* If we want to perform concatenation atleast one operand must be string type
  
| Openrand1 | Openrand2 | Result |
|:-----------:|:---------: |:---------:|
|Number |Number|Number|
|Number |String | String|
|String | number | String|
|String | String | String|

```js
let a = 10;
let b = 20;
console.log("Addition" + a + b);
console.log("Addition" + a);
console.log(a + "Addition");
console.log("Addition " + "Happen");
console.log(a + b);
```

>**TEMPLATE LITERALS**
* Introduced in ES6
* Writing some static text with dynamic operations is known as template literals.
* Reprensted with `backtick` operator

```js
console.log(`The addition of ${a} and ${b} = ${a+b}`);
```

>**FUNCTIONS**

***prompt()*** Function : 
* use it to take the input from the user at runtime
* by default the prompt function will give the data in the form of string type
  
```js
let p = prompt("Enter the value of p")
let q = prompt("Enter the value of q")
console.log("Result by-default gives in concatenated form " + (p+q));
```

>**TYPECASTING**
* The process of converting from one DT to another DT is known as typecasting
  
```js
let a = Number(prompt("Enter the value of a");
```
**1. <ins>Type Conversion**</ins> : The process of converting from one DT to another DT `explicitly or manually` by the programmer.

```js
let n = Number("123"); // "123" is in string format, explicitly converted to number 
```
```js
// Type Conversion (by programmer)
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
```

**2. <ins>Type Coercion</ins>** : The process of converting from one DT to another DT `implicitly` by the JS Engine.
	
```js
console.log(10 * "10"); // "10" implicitly converted to Number, so result is 100 
```
```js
//Type Coercion (imlicitly)
console.log(10 * "10"); // 100 "10"->implicitly converted to number
console.log(10 * true); // 10
console.log(10 * undefined); // NaN
console.log("2" * "2"); // 4
console.log(10 * null); // 0
console.log("gopal" * "krishna"); // NaN
console.log("k"*"2"); // NaN
```

>***string()*** Function
```js
let n = 10; // typeof n (number)
n = String(n); // typeof n (string)
```

```js
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
```

>***boolean()*** Function 
1. <ins>*Falsy Values* </ins>: The values which return false, when  we are converting them in to boolean type those value we can say that falsy values.

There are 6 falsy values
* 0
* "Empty String"
* undefined
* NaN
* null
* false

```js
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

```

2. <ins>*Truthy Values*</ins>: The values which return true, when we are convert them in to boolean type those value we can say that truthy value.

```js
Note : Except 6 falsy values all are truthy values 
a = Boolean("saurabh");
console.log(a, typeof a); // true boolean

a = Boolean(123);
console.log(a, typeof a); // true boolean

a = Boolean(true);
console.log(a, typeof a); // true boolean
```

>##### <ins>ASSIGNMENT OPERATOR (+= , -= , *= , /= , %=)
```js
Example:
1. a += b => a = a + b
2. a -= b => a = a - b
3. a *= b => a = a * b
4. a /= b => a = a / b
5. a %= b => a = a % b
```

```js
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
```

>##### <ins>UNARY OPERATOR</ins>

*INCREMENT OPERATOR*

* pre-increment(++i): increment value first later use
* post-increment(i++): use first later increment the value

*DECREMENT OPERATOR*

* pre-decrement(--i): decrese value first later use
* post-decrement(i--): use first decrese the value

```js

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
```

>##### <ins>RELATIONAL OPERATOR</ins>

< , > , <= , >= , == , != , === , !==

>@ The return type of all relational operator is boolean.

|==|===|
|--|---|
|use it for normal comparison | use it for strict comparison|
|In == it compares only the values but not DT|In === it compares values as well as DT|
|In == type cohersion will happened|In === type cohersion will not happened|

```js
var x = 143;
var y = 45;

console.log(x<y); // false
console.log(x>y); // true
console.log(x>=y); // true
console.log(x<=y); // false
console.log(x==y); // false (check only content)
console.log(x===y); // false (check content as well as data types)
console.log(x!==y); // false -> true


let p = 10; // number
let q = 10 // number

console.log(p === q); // 1. content 2. number true

var x = "10";
var y = 10;
console.log(x==y); // type cohersion is happened
console.log(x===y); // type cohersion is not happened
```
>##### <ins>LOGICAL OPERATOR</ins>

|OPERATION|OPERATOR|
|:---------:|:--------:|
|AND | &&|
|OR |  |
|NOT | !|

```js
var a = 4; //5
var b = 8;
// first condition is false then does not check for second condition
if(a++<=3 && ++b<=50){ 
    console.log("If block is executed!!!");
}else{
    console.log("Else block is executed!!!");
}
console.log(a, b); //5 8

console.log("-------------------");
var a = 4; // 5
var b = 8; // 8

// first condition is true then doesnot check for second condition
if(a++<=10 || ++b<=50){   
    console.log("If block is executed!!!");
}else{
    console.log("Else block is executed!!!");
}
console.log(a, b); //5 8
```
>##### <ins>TERNARY / CONDITIONAL OPERATOR</ins>

>@Very much important in ReactJS 

*SYNTAX : *

CONDITION ? (true)EXPRESSION 1 : (false)EXPRESSION 2 ;

```js
(20 > 10) ? 20 : 10 ;  o/p - 20 (true)
(10 > 20) ? 20 : 10 ;  o/p - 10 (false)
```

```js
var num = 20;
var res = num%2 == 0 ? `${num} is even`: `${num} is odd`;
```
```js
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
```