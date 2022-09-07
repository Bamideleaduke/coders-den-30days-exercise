// Exercises
// Exercises: Level 1
// localStorage.setItem('name','Asabenah');
// Store you first name, last name, age, country, city in your browser localStorage.
let info = {
    'firstName':'Barakat',
    'lastName':'Bamidele',
    'age':20,
    'country':'Nigeria',
    'city':'Lagos'
};
const infoJson = JSON.stringify(info,undefined,4);
 localStorage.setItem("personInfo",infoJson);
console.log(localStorage);

// getItem from the storage
let firstName = localStorage.getItem('firstName');
let getP = JSON.parse(firstName)
console.log(getP)
// let parseInfo = JSON.parse(infoJson);
// let inffo = localStorage.getItem('personInfo')
// console.log(inffo);
// let age = localStorage.getItem('age');
// console.log(firstName,age)

// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    'firstName':'Barakat',
    'lastName':'Bamidele',
    'age':20,
    'skills':['HTML','CSS', 'JAVASCRIPT'],
    'country':'Nigeria',
    'city':'Lagos'
};
localStorage.setItem("Student", JSON.stringify(student,undefined,3))
console.log(localStorage)
// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstName: "Ayo",
    lastName:"Shay",
    income:33000,
    rent: 12000,
    dataSubscription: 1500,
    totalExpense : function () {
      return "The total expenses for this month is " + (this.rent + this.dataSubscription) + " naira"
    },
    accountInfo: function () {
  return this.firstName + " "+ this.lastName + " " + "earns " + this.income + " thousand naira monthly"
    }
  }
// 🎉 CONGRATULATIONS ! 🎉