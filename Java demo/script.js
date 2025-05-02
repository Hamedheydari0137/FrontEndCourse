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


