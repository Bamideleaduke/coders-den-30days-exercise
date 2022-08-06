

// Exercises: Level 1
console.log("EXERCISE: LEVEL 1\n ...")

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'


    
	// Print the string on the browser console using console.log()
    
console.log(challenge)

    // Print the length of the string on the browser console using console.log()
   
    console.log(challenge.length)

    // Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())



    // Change all the string characters to lowercase letters using toLowerCase() method

    console.log(challenge.toLowerCase())


    // Cut (slice) out the first word of the string using substr() or substring() method


    console.log(challenge.substr(3,5))



    // Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    console.log(challenge.substring(3,21))



    // Check if the string contains a word Script using includes() method

    console.log(challenge.includes('Script'))



// Split the string into an array using split() method

console.log(challenge.split(''))




// Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))



// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let textSp =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(textSp.split(','))







// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace("JavaScript", "Python"))





// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))





// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt('J'))


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))






// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))










// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let wordIn = 'You cannot end a sentence with because because because is a conjunction'

console.log(wordIn.indexOf('because'))





// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(wordIn.lastIndexOf('because'))





// 19.	Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


console.log(wordIn.search("because"))









// 20.	Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of   JavaScript '.
let triiiim = ' 30 Days      Of Python '
console.log(triiiim.trim(' '))









// 21.	Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(triiiim.startsWith(' 30'))

console.log(triiiim.startsWith('30'))



// 22.	Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(triiiim.endsWith('Python '))
console.log(triiiim.endsWith('Python'))






// 23.	Use match() method to find all the a’s in 30 Days Of JavaScript
 console.log(challenge.match(/a/gi))








// 24.	Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str = "30 "
let str2 = str.concat('Days of','JavaScript ' )
console.log(str2)








// 25.	Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(str2.repeat(2) )









// Exercise: Level 2
console.log("EXERCISE: LEVEL 2 \n ...")

// 1.	Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. 
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another. ")







// 2.	Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Mother Teresa : \"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")







// 3.	Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numCheck = '10';
let nncheck = +numCheck
let num10 = 10;
 console.log(numCheck === num10);
 console.log(nncheck === num10);







// 4.	Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let parse = parseFloat(9.8);
console.log(parse)
console.log(Math.round(parse))







// 5.	Check if 'on' is found in both python and jargon
let py ='python';
let jar = 'jargon';
console.log(py.includes('on'),jar.includes('on')) 



// 6.	I hope this course is not full of jargon. Check if jargon is in the sentence.

let jarsent = 'I hope this course is not full of jargon.';
let confirmJ = jarsent.includes('jargon');
console.log(confirmJ)


// 7.	Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()* 101))



// 8.	Generate a random number between 50 and 100 inclusively.
// Math.floor(Math.random()*(max-min +1)) + min;
let rround = Math.floor(Math.random()*(100-50 +1)) + 50;
console.log(rround);


// 9.	Generate a random number between 0 and 255 inclusively.
console.log(Math.round(Math.random()*256))




// 10.	Access the 'JavaScript' string characters using a random number.

let javaIndex = 'Javascript'
;
console.log(javaIndex.charAt(Math.random()*10));


// 11.	Use console.log() and escape characters to print the following pattern.
// 12.	1 1 1 1 1
// 13.	2 1 2 4 8
// 14.	3 1 3 9 27
// 15.	4 1 4 16 64
// 5 1 5 25 125

let escapeT = `12.\t 1 \t 1 \t 1 \t 1 \t 1\n13.\t 2 \t 1 \t 2 \t 4 \t 8 \n14.\t 3 \t 1 \t 3 \t 9 \t 27\n15.\t 4 \t 1 \t 4 \t 16\t 64 \n5 \t 1 \t 5\t 25\t125  `;

console.log(escapeT);


// 16.	Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let bsentence = `16. You cannot end a sentence with because because because is a conjunction`;

let because = bsentence.substr(34,27);

console.log(bsentence.replace(because,' '));
// console.log(bsentence.indexOf('because'));



// Exercises: Level 3
console.log("EXERCISE: LEVEL 3\n ...")
// 1.	'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.


let searchLove = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let countL = /love/gi
console.log(searchLove.search('love'))
console.log(searchLove.match(/love/g))
console.log(searchLove.match(countL))


// 2.	Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseNum = "You cannot end a sentence with because because because is a conjunction"
console.log(becauseNum.match(/because/gi))


// 3.	Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing;
     &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.
      %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`
let removeAt =sentence.replace(/@/gi,'')
let removeAnd =removeAt.replace(/&/gi,' ')
let removeAsh =removeAnd.replace(/#/gi,'')
let removePerse = removeAsh.replace(/%/gi,'')
let removeHy = removePerse.replace(/;/gi,'')
let removeSign = removeHy.replace(/\$/gi,'')


console.log(removeSign)







    // 4.	Calculate the total annual income of the person by extracting the numbers from the following text. 
    // 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const calcSalary = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
const removeN = /\d+/g
const salary = calcSalary.match(removeN)
const parseN = parseInt(salary[0]) + parseInt(salary[1]) + parseInt(salary[2])
console.log(parseN)
console.log(`Total Annual Income is ${parseN} euro`)



    // 🎉 CONGRATULATIONS ! 

