// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// [].join('')

// 1. reverse a given array without using the reserve method, and get the sum of elements in array.
// if the array length is greater than ten and an even Number, get the sum of the second half
// where you got the sum where each element is multiplied by two.

// given [1,2,3,4], output should be [4,3,2,1] and 10
let array = [];
let sum = 0;
for (let i = 4; i >= 1; i--){
    array.push(i)
    sum = array[0]+array[1]+array[2]+array[3]
}
console.log(array,sum)


// given [1,2,3,4,5,6,7,8,9,10,11,12], you should get [12,10,8,6,4,2] and 21

let arrayy = [1,2,3,4,5,6,7,8,9,10,11,12];
for (let i = 0; i < arrayy.length ; i--){
// let reverse = arrayy.push(i)
console.log(arrayy) 

} 


// 2. change a string to uppercase, take away all white spaces at the begining and and end 
// of the string, and get the first 4 elements of the string. if the string is less than
// 4 characters, console.log('error').

let strings = ' folasha yo ';
let upperCase = strings.toUpperCase();
console.log(upperCase)
let str = upperCase.toString().trim();
console.log(str)

// let firstFourElement = (upperCase.join(''))
// console.log(firstFourElement.slice(0,4))




// 3. Get yesterday's date (dayof the week, month, year)

// const yesterday = new Date ()
// const Y = yesterday.getFullYear()
// const M = yesterday.getMonth() + 1
// const D = yesterday.getDate()
// console.log(`${date}/${month}/${year}