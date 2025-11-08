// WAP to find greatest of two number

var a = 20;
var b= 30;
if(a>b){
    console.log(`${a} is greatest`);
}else{
    console.log(`${b} is greatest`);
}

// WAP TO CHECK A GIVEN NUMBER IS EVEN OR ODD

var num = parseInt(prompt("Enter a number!!"));
if(num%2==0){
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}

// WAP TO CHECK A GIVEN CHARACTER IS VOWEL OR CONSONANT
var ch = String(prompt("Enter a charcter!!"));
if(ch == 'a' || ch == 'e' || ch == 'i' ||ch == 'o' ||ch == 'u'){
    console.log(`${ch} is vowel`);
}else{
    console.log(`${ch} is consonant`);
}



// WAP TO CHECK THE YEAR IS LEAP YEAR OR NOT
var year = parseInt(prompt("Enter a year!!"));
if(year % 400 == 0){
    console.log(`${year} is leap year`);
}else if(year % 4 == 0 && year % 100 != 0){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} not a leap year`);
}