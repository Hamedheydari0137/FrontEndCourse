var firstname="Hamed";
var lastname="Heydari";
var age="29";
var height="1.83";
var weight="81";
var job="Front-End Developer";


console.log (firstname);
console.log (lastname);
console.log (age);
console.log (height);
console.log (weight);
console.log (job);

var x=18.25;
var y=16;
var average=(x+y) /2;

console.log (average);

var midterm=18.25;
var final=16;
var average= (midterm+final) /2;



var average=17.25;

if (average>= 10) {
    console.log ('pass');

}else {
    console.log ('fail');
}
console.log ('end of the script');


var number=3;
if (number ==2) {
    console.log ("even", 2);
}  else if (number==4) {
    console.log ("even", 4);
}  else if (number==1) {
    console.log ("odd", 1);
}  else if (number===3) {
    console.log ("odd", 3);
}  else if (number==5) {
    console.log ("odd", 5);
}  else {
    console.log("end of the script");
}


var number=7;
console.log ("the number is:", number)
if (number>0) {
    console.log ("the number is positive.");
} else if (number<0) {
    console.log ("the number is negative");
} else {
    console.log ("the number is zero");
}

console.log ("end of the script");


var x=6;
var y=13;


if (x>y) {
    console.log (x,"larger");
} else if (y>x) {
    console.log (y, "larger");
} else {
    console.log ("Both numbers are equal");
}

console.log ("end of the script");


var score=75;

if (score>= 90 && score<=100) {
    console.log ("A");
} else if (score>=80 && score<=89) {
    console.log ("B");
} else if (score >=70 && score<=79) {
    console.log ("C"); 
} else if (score>=60 && score<=69) {
    console.log ("D");
} else if (score>= 0 && score<60) {
    console.log ("E");
} else {
    console.log ("Invalid score");
}

console.log ("End of the script");


var year=2024;


if (((year / 4)* 4 == year && (year /100)* 100 != year)|| (year/400)*400==year) {
   console.log (year + " is a leap year");
} else {
    console.log (year + "is not a leap year");
}

console.log ("end of the script");




var correctUsername= "admin";
var correctPassword= "1234";

var username= "admin";
var password= "1234";

if (username ===correctUsername && password === correctPassword) {
    console.log ("Access granted");
} else {
    console.log ("Access denied");
}

console.log ("end of the script");



/////////////////////////////////////////////////////////////////////////



// Exercise 1

for (var i=2; i<20; i += 2) {
    console.log (i);
}

for (var i=1; i<=20; i++){
    if (i % 2===0) {
        console.log(i);
    }
}

// Exercise 2


var sum=0;

for (var i=1; i<100; i++) {
    if (i%3===0 || i%5===0){
        sum=sum+i;
    }
}

console.log("sum:", sum);

var sum=0;

for (var i=1; i<100; i++) {
    if (i%3===0 || i%5===0){
        sum += i;
    }
}

console.log("Sum:", sum);

// Exercise 3

for (var i=1; i<50; i++) {
    if (i%4 !== 0 && i%6 !==0){
        console.log (i);
    }
}

// Exercise 4


for (var i=1; i<100; i++) {
    if (i%7 ==0 && i%9 ==0){
        console.log (i);
    }
}

var first=0;

for ( var i=1; i<=100; i++){
    if (i%7===0 && i% 9===0 && first===0 ){
        first=i;
    }
}

console.log ("first number divisible by both 7 and 9", first);

// Exercise 5

for (var i=1; i<100; i++){
    if (i% 2===0 && i%3 !==0){
        console.log (i);
    }
}

var count=0;

for (var i=1; i<=100; i++) {
    if (i% 2===0 && i% 3!==0) {
        count++;
    }
}

console.log ("Count", count);

// Exercise 6


// for (var i=2; i<=50; i++) {
//     var count=0;
//     for (var i2=1; i2 <= i; i2++){
//         if (i % 12===0){
//             count++;
//         }
//     }
//     if (count===2){
//         console.log (i);
//     }
// }

// Exercise 7

var a=0;
var b=1;

for (var i=0; i<10; i++) {
    console.log(a);
    var next=a+b;
    a=b;
    b=next;
}
