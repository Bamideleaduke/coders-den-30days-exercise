//  Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// let userAge = prompt("Enter your age");
// userAge >= 18? alert("You are old enough to drive"):alert(`you are left with ${18-userAge} years to drive`);
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
// let myAge = 20;
// let yourAge = prompt("Enter your age");
// if(myAge > yourAge){
//   alert(`I am ${myAge-yourAge} years older than you`)
// }else if(yourAge > myAge){
//     alert(`You are ${yourAge-myAge} years older than me`)
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else ternary operator.
const a =6;
const b = 12;
a>b? console.log(`${a} is greater than ${b}`): console.log(`${a} is less than ${b}`)
//   4 is greater than 3

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = 6;
num%2 == 0? console.log("Even number"): console.log("odd number");
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.


// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = 89;
if(score <= 49){
    console.log("F")
}else if(score <= 59){
    console.log("D")
}else if(score <= 69){
    console.log("C")
}else if(score <= 79){
    console.log("B")
}else if(score <= 100){
    console.log("A")
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = "April";
if(month === "September" || month=="October" || month== "November"){
console.log("Autumn")
}else if(month === "December"||month=="January"||month=="February"){
    console.log("Winter")
}else if(month === "March"||month=="April"||month=="May"){
    console.log("Spring")
}else if(month === "june"||month == "July"||month =="August"){
    console.log("Summer")
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let day = "Saturday";
let weekDays;
if(day == "Monday" ||day== "Tuesday" ||day== "Wednesday" ||day== "Thursday" ||day== "Friday"){
weekDays = `${day} is a Working day`
}else if(day == "Sunday" ||day== "Saturday"){
weekDays = `${day} is a Weekend`
}
console.log(weekDays);

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: February
//   February has 28 days.
let january = 1;let february = 2; let march = 3;let april=4;let may = 5;let june=6;
let july=7;let august=8;let september =9;let october = 10;let november = 11;let december=12;
let monthh = "november";
if(monthh == "january"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),january,0).getDate()} days`)
}else if(monthh == "february"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),february,0).getDate()} days`)
}else if(monthh == "march"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),march,0).getDate()} days`)
}else if(monthh == "april"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),april,0).getDate()} days`)
}else if(monthh == "may"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),may,0).getDate()} days`)
}else if(monthh == "june"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),june,0).getDate()} days`)
}else if(monthh == "july"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),july,0).getDate()} days`)
}else if(monthh == "august"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),august,0).getDate()} days`)
}else if(monthh == "september"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),september,0).getDate()} days`)
}else if(monthh == "october"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),october,0).getDate()} days`)
}else if(monthh == "november"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),november,0).getDate()} days`)
}else if(monthh == "december"){
    console.log (`${monthh} has ${new Date(new Date().getFullYear(),december,0).getDate()} days`)
}

// let neww = new Date();
// let montth = neww.getMonth();
// let year = neww.getFullYear()
// let daysInMonth = new Date(year,montth,0).getDate()
const now = new Date(new Date().getFullYear(),1,0);
console.log(now.getDate());
// console.log(daysInMonth)

// Write a program which tells the number of days in a month, now consider leap year.
// 🎉 CONGRATULATIONS ! 🎉 