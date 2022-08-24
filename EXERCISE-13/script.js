// Exercises:Level 1
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
// Display the countries array as a table
console.table(countries)
// Display the countries object as a table
console.table(users)
// Use console.group() to group logs
console.group("Names")
for (let user in users) {
    const userName = users[user].name;
    const userCountry = users[user].country
    console.log(`${userName} is from ${userCountry}`)
}
console.groupEnd()
// Exercises:Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10,"Nah")
// Write a warning message using console.warn()
console.warn("This is a sincere warning to you")
// Write an error message using console.error()
console.error("This is screaming Bug!!!")
// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
console.time("while loop");
let i =0;
while(i<10){
    i++
    console.log(i)
}
console.timeEnd("while loop");
// 
// for let
console.time("for let loop");
for(let i=1;i<=10;i++){
    console.log(i)
}
console.timeEnd("for let loop");
// 
// 
console.time("for of loop");
let j = [1,2,3,4,5,6,7,8,9,10]
for (const item of j) {
    console.log(item*2) 
}
console.timeEnd("for of loop");
// 
// 
console.time("for each loop");
j.forEach(ele => {
    console.log(ele*3)
});
console.timeEnd("for each loop");

// 🎉 CONGRATULATIONS ! 🎉