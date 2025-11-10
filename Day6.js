function main(){
    let m =+ prompt("Enter Amount");

    switch (m) {
        case 50:
            console.log("Enjoy with Juice🥤");            
            break;

        case 500:
            console.log("Enjoy with Burger 🍔");
            break;
    
        case 1000:
            console.log("Enjoy with Burger🍔 And Juice🥤");
            break;
            
        default:
            console.log("Valid Input");    
    }
}
// main();

// for(let i=0; i<3; i++){
//     console.log("Happy Coding...😀");
// }
// console.log("After Loop");

// let str="";
// for(let i=1; i<=10; i++){
//     if(i<=9)str = str + i + ",";
//     else str = str + i;
// }
// console.log(str);   

var sum=0;
for(let i=1; i<=10; i++){
    sum += i;
}
// console.log(`Sum of 1-10 : ${sum}`);

let prod = 1;
for(let i=1; i<=5; i++){
    prod *= i;
}

// console.log(`Factorial of 5 : ${prod}`);

//EVEN NUMBER WITHIN A RANGE

let num1 = 1;
let num2 = 10;

var str="";
for(let i=num1 ; i<=num2; i++){
    if(i%2==0){
        str += i + " ";
    }
}
// console.log(str);


// SUM OF ODD NUMBERS WITHIN A RANGE

var str="";
var sum = 0;
for(let i=num1 ; i<=num2; i++){
    if(i%2!=0){
        str += i + " ";
        sum += i;        
    }
}

// console.log(`Sum of odd number within range : ${sum}`);


for(let i=1; i<=10; i++){
    if(i%2 == 0){
        // break
        // continue
        // return
    }
    console.log(i);    
}

// WAP TO FIND THE FACTOR OR DIVISORS 

let n=6;
var str="";
for(let i=1; i<=n ; i++){
    if(n%i == 0){
        str += i+" ";
    }
}

// console.log(`Factor or divisior of ${n} : ${str}`);

// WAP  a program to check given number is prime or not

