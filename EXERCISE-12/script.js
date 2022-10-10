
/* Exercises: Level 1
Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’ */
let txt = 'Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const digitPattern = /\d+/gi;
const extractDigit = txt.match(digitPattern);
const annualIncome = Number(extractDigit[0]) + Number(extractDigit[1]) + Number(extractDigit[2])
console.log(annualIncome)




const question = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
const point = question.match(/-?\d/g);
const sortedarr = point.map(item => +item).sort((a,b)=> a-b);
const distance = sortedarr[sortedarr.length-1] - sortedarr[0]
console.log(distance)

// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12


/*
Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/
const validJs = "firstname first_name";
const pattern = new RegExp("firstname")
const confirm = pattern.test(validJs)
console.log(confirm)

function is_valid_variable(r) {
const yyy = new RegExp(r)
return yyy.test(validJs)
}
console.log(is_valid_variable("first_name"))
console.log(is_valid_variable("first-name"))
console.log(is_valid_variable("1first_name"))
console.log(is_valid_variable("first_name"))

/*

Exercises: Level 2
Write a function called tenMostFrequentWords which get the ten most frequent word from a string? */
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    const arr = paragraph.split(" ")
    console.log(arr)

    const count = paragraph.match(/you/gi)
    console.log(count, count.length)
        
      for (const element of arr){
        const count = paragraph.match(/you/gi)
        console.log(element)
        // console.log(`word :${element} and count : ${count.length}`)
      }
  

    //console.log(tenMostFrequentWords(paragraph))
    /*
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]
console.log(tenMostFrequentWords(paragraph, 10))
[{word:'love', count:6},
{word:'you', count:5},
{word:'can', count:3},
{word:'what', count:2},
{word:'teaching', count:2},
{word:'not', count:2},
{word:'else', count:2},
{word:'do', count:2},
{word:'I', count:2},
{word:'which', count:1}
]
*/

/*
Exercises: Level 3
Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
*/
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(r) {
  return r.replace(/@|%|#|&|\$/gi, "")
}
 console.log(cleanText(sentence))
 
 
 
// 1. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
const cleanedText = `I am a teacher, and I love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? `
console.log(cleanedText.match(/\w+/g));
function mostFrequentWords(cleanedText){
const cleanSentence = cleanedText.match(/\w+/g);
console.log(cleanSentence);
let occurance = {};
for (let word of cleanSentence){
  if(occurance[word]) {
    occurance[word]++;
  }else{
    occurance[word] = 1;
  }
}
console.log(occurance)
// console.log(Object.values(occurance))
let max = 0;
let mostOccurred = "";

// for (let word of cleanSentence){
//   if(occurance[word] > max){
//     // debugger
//     max = occurance[word];
//     mostOccurred = word;
//   }
// }
console.log(Object.values(occurance))
const res = Array.from(Object.keys(occurance), key => [key, occurance[key]]);
// res.sort((a,b) => b[1] - a[1]);
console.log(res)
// return [res[0][0], res[4][0], res[2][0]];
return `{word: ${res[0][0]}, count:${occurance["I"]}}, {word: ${res[6][0]}, count: ${occurance["teaching"]}}, {word: ${res[3][0]},count: ${occurance["teaching"]}}`
// return mostOccurred;
// return ["word :"+ cleanSentence , cleanSentence.length];
}
 console.log(mostFrequentWords(cleanedText));
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
 


// 🎉 CONGRATULATIONS ! 🎉
