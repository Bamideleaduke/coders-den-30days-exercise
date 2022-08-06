// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// [].join('')

// Question 1a
// 1. reverse a given array without using the reserve method, and get the sum of elements in array.// if the array length is greater than ten and an even Number, get the sum of the second half
// where you got the sum where each element is multiplied by two.

// given [1,2,3,4], output should be [4,3,2,1] and 10
let arr = [];
for (let i = 4; i >= 1; i--) {
  arr.push(i);
  sum = arr[0] + arr[1] + arr[2] + arr[3];
}
console.log(arr, sum);

// given [1,2,3,4,5,6,7,8,9,10,11,12], you should get [12,10,8,6,4,2] and 21
// 1b
let arr12 = [];
let even;
let secondHalf;
// for(let 1=12;i>0;1-=2) willl get the even number
for (let i = 12; i >= 1; i--) {
  arr12.push(i);
  even = arr12.filter((arr12) => arr12 % 2 === 0);
}
console.log(arr12);
secondHalf = arr12.splice(6, 12);
let secSum =
  secondHalf[0] +
  secondHalf[1] +
  secondHalf[2] +
  secondHalf[3] +
  secondHalf[4] +
  secondHalf[5];
console.log(even, secSum);

// Question 2
// 2. change a string to uppercase, take away all white spaces at the begining and and end
// of the string, and get the first 4 elements of the string. if the string is less than
// 4 characters, console.log('error').
let sentence = " Coders ";
let upper = sentence.toUpperCase();
let tee = upper.trim();
let sub = tee.substring(0, 4);
//console.log(sentence,sub)
if (sub.length <= 4) {
  console.log(sub);
} else {
  console.log("error");
}
// ternary operator
sub.length <= 4 ? console.log(sub) : console.log("error");

// Question 3
// 3. Get yesterday's date (dayof the week, month, year)

let date = new Date();
let Y = date.getFullYear();
let m = date.getMonth() + 1;
let dd = date.getDate() - 1;
let d = date.setDate(date.getDate() - 1);

let day = date.getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(day, `${Y}/${m}/${dd}`);