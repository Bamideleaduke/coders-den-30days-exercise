import countriess  from "./countries-data.js" 
// Exercises
// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland',"England"]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Explain the difference between forEach, map, filter, and reduce.
// Define a call function before you them in forEach, map, filter or reduce.
// Use forEach to console.log each country in the countries array.
countries.forEach(ele => {
    console.log(ele)
});
// Use forEach to console.log each name in the names array.
names.forEach(elem => {
    console.log(elem)
});
// Use forEach to console.log each number in the numbers array.
// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(item => {
   console.log(item.toUpperCase())
})
// Use map to create an array of countries length from countries array.
const arr = [];
countries.map(item => {
    arr.push(item.length)
 })
 console.log(arr)
// Use map to create a new array by changing each number to square in the numbers array
const num=[]
numbers.map(item=>{
    num.push(item**2)
})
console.log(num)
// Use map to change to each name to uppercase in the names array
// Use map to map the products array to its corresponding prices.
const newArr=[];
products.map(item =>{
    newArr.push(item.product,item.price)
})
console.log(newArr)
// Use filter to filter out countries containing land.
const filter = countries.filter(item=>{
  return  item.includes("land")
})
console.log(filter)
// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
const filter2 = countries.filter(item=>{
    return  item.length == 6
  })
  console.log(filter2)
// Use filter to filter out country start with 'E';
const filter3 = countries.filter(item=>{
    return  item.startsWith("E")
  })
  console.log(filter3)
// Use filter to filter out only prices with values.
const price = products.filter(item =>{
    return typeof item["price"] == "number"
})
console.log(price);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// const arrR = [2,"hi",4,true,"yes","bye"]

function getStringLists(arrR){
  const random = arrR.filter(ele =>{
       return  typeof ele === "string"
  })
  return random
} 
console.log(getStringLists([2,"hi",4,true,"yes","bye"]))

// Use reduce to sum all the numbers in the numbers array.
const red = numbers.reduce((acc,curr)=>{
  return  acc+curr
})
console.log(red)
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const redux = countries.reduce((acc,curr)=>{
return `${acc}, ${curr}`
})
console.log(`${redux} are north european coutries`)
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
const somee = names.some((val)=>{
  return val.length > 7
})
console.log(somee)
// Use every to check if all the countries contain the word land
const checkW = countries.every((letter) =>{
    letter.includes("land")
})
console.log(checkW)
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
const findL = countries.find((item)=>{
  return  item.length === 6
})
console.log(findL)
// Use findIndex to find the position of the first country containing only six letters in the countries array
const findC = countries.findIndex((ele)=>{
return ele.length === 6
}) 
console.log(findC)
// findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findN = countries.findIndex((ele)=>{
  return ele == "Norway"
})
console.log(findN)
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// Exercises: Level 2
const productss = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const tProduct = productss.map(item => Number(item.price)).reduce((acc,curr)=> acc + curr)
console.log(tProduct)
// Find the sum of price of products using only reduce reduce(callback))
const rProduct = productss.reduce((ele,ind)=>{
return ele + Number(ind.price)
},0)
console.log(rProduct)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(e){
return e.filter(ell=> ell.includes("land") )
}
console.log(categorizeCountries(countries))
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countriesStart = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland',"England",'Newyork','Newyok']
function arrObj(x,y){
  // reduce
  const red = x.reduce((ac,cr)=>{
    return [cr.startsWith(y),ac]
  })
  return red
  // filter
  // const cc = x.filter(country =>{
  //  return country.startsWith(y)
//   return (country.match(new RegExp(y,'g'))) && country;
//    }).length
// return {letter:y,count:cc}
}
console.log(arrObj(countriesStart,'N'))
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const countriesJs = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland',"England","Nigeria","Dubai","England","Egypt","Poland","Ukraine","Canada","Kenya","Togo","Benin Rep","Niger"];
function getFirstTenCountries(e){
  return e.slice(0,10)
// return  e.slice(-10)
}
console.log(getFirstTenCountries(countriesJs))


// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// Exercises: Level 3
console.log(countriess[1].name);
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
let sortName = countriess.sort((a,b)=>a.name.charCodeAt()-b.name.charCodeAt());
let sortCapital = countriess.sort((a,b)=>a.capital.charCodeAt()-b.capital.charCodeAt());
let sortPop = countriess.sort((a,b)=>a.population-b.population);
console.log(sortCapital)
// *** Find the 10 most spoken languages:
let sortLang = countriess.filter(item=> {
  // item.languages == "English"
  (item.languages)
})
console.log(countriess.length)
console.clear()

function mostSpokenLang(c,n){
  const spokenLang =c.reduce((acc,curr)=>{
  let lang = curr.languages;
  return [...acc,...lang]
},[])
console.log(spokenLang)
const langCount = spokenLang.reduce((ac, cr) => {
  return { ...ac, [cr]: ac[cr] + 1 || 1 };
},{});
console.log(langCount)
const dataTemp = Object.entries(langCount).reduce((acc, cur) => {
  return [...acc, { country: cur[0], count: cur[1] }];
}, []);
return dataTemp.sort((a,b)=>{return b.count - a.count}).slice(0,n)
}
console.log(mostSpokenLang(countriess,3))
// console.log(sortLang.length)
// const langLength = countriess.forEach(ele => {
//   let langg = ele.languages
//   if(ele.languages == langg){
//   }
// });
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
// *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulated(c,n){
  const popS = c.sort((a,b)=>{return b.population - a.population}).slice(0,n)
  return popS.map((cr)=>{
    const t = {country:cr.name,count:cr.population}
    return t
  },{})
}
console.log(mostPopulated(countriess,3))
// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics ={
count:function (){return ages.length},
sum:function(){return ages.reduce((acc,curr)=> acc+curr)},
// min:function(){return ages.reduce((acc,curr)=> (acc<curr)?curr:null)},
min:function(){ ages.sort((a,b)=>a-b); return ages[0]},
max:function(){ ages.sort((a,b)=>a-b); return ages[ages.length-1]},
range:function(){return  this.max()-this.min()},
mean:function(){return Math.ceil(ages.reduce((acc,curr)=>acc+curr)/ages.length)},
median:function(){ages.sort((a,b)=>a-b); return ages[Math.floor(ages.length/2)]},
mode:function(){ 
  let mode ={}; let count = 0;let max=0;
    for(let i = 0; i<ages.length; i++){
      let item = ages[i];
     mode[item]? mode[item]++ : mode[item] =1;
      if(count<mode[item]){ 
        max = item; 
        count = mode[item];
      } 
    }
    return {max,count}
}
}
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// 🎉 CONGRATULATIONS ! 🎉
function mostSpoken(c,n){
 const sL = c.reduce((ac,cr)=>{
  const lang = cr.languages
  return [...ac,...lang]
 },[])
//  return sL
for(let i =0;i<sL.length;i++){
  sL
  let count = 0;
if(sL[i] === sL[i]){
  // count+=l.length
  // un = {lang:l,count:count}
return {country:sL[i],count:sL[i].length}
}else{
  return null
}
}
}
console.log(mostSpoken(countriess,3))