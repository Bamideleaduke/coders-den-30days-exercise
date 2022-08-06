// Exercises: Level 1
// ex1: 7 ; ex2: 1,4-8,10,14,15 ; ex3: 1

/* Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */
let nowD = new Date();
console.log(
  nowD.getFullYear() +
    "-" +
    nowD.getMonth() +
    "-" +
    nowD.getDate() +
    " day-" +
    nowD.getDay() +
    " " +
    nowD.getHours() +
    "hrs " +
    nowD.getMinutes() +
    "min"
);
console.log(nowD.getTime() + " seconds")

//Exercises: Level 2
//1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 50

let b = prompt("Input base value");
let h = prompt("input height value");
let areal = 0.5 * b * h;
alert("Area :" + areal);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// 4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let pi = 3.14;
let c = 8.84;
let circum = 2 * pi + "r";
let r = (c / 2) * pi;
console.log(r);
let area = pi * r * r;
console.log(area);
// 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 0;
let yIntercept = 2 * x - 2;
let mInt = x + yIntercept;
console.log("y : " + yIntercept);

// 6 Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = y2 - y1 / x2 - x1;
console.log(m);
// 7 Compare the slope of above two questions.
console.log(mInt === m);
// 8 Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xx = -3;
let y = xx ** 2 + 6 * xx + 9;
console.log(y);

// 9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// 10  If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "Pineapple";
if (name.length > 7) {
  console.log("your name is long");
} else console.log("your name is short");

// 11 Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// 12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

// 13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// 14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of yours you live: 100
// You lived 3153600000 seconds.
let now = new Date();
let sec = 3153600000;
let year = now.getFullYear();
// calc agee
let agee = year - 1922;
let livedSec = agee * sec;
console.log(
  " you have lived " + livedSec + " seconds in your years of existense"
);
// input age directly
let age = 100;
let liveSec = age * sec;

console.log(
  " you have lived " + liveSec + " seconds in your years of existense"
);

// 15 Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let noww = new Date();
let yyy = noww.getFullYear();
let MM = noww.getMonth();
let dd = noww.getDate();
let hh = noww.getHours();
let mm = noww.getMinutes();

console.log(yyy + "-" + MM + "-" + dd + "  " + hh + ":" + mm);
console.log(dd + "-" + MM + "-" + yyy + "  " + hh + ":" + mm);
console.log(dd + "/" + MM + "/" + yyy + "  " + hh + ":" + mm);
// Exercise 3
// 15 Create a human readable time format using the Date time object, with hours and minutes not more than 2 digit
console.log(yyy + "-" + MM + "-" + dd + "  " + hh + ":" + mm);