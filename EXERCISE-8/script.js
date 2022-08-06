
// Exercises
// Exercises: Level 1
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo
const dog = {
"name" : "Bingo",
"legs" : 4,
"color":"Black",
"age": 5,
bark : function() {
  return "woof woof";
},
// getDogInfo: function() {
//   return `${dog["name"]} has ${dog["legs"]} legs, ${dog["color"]} in color nad have lived for ${dog["age"]} years. Bingo bark ${dog.bark()} everyday`
// }
};
dog.breed = "German",
dog.getDogInfo = `${dog["name"]} has ${dog["legs"]} legs, ${dog["color"]} in color nad have lived for ${dog["age"]} years. Bingo bark ${dog.bark()} everyday`
console.log(dog)

// Exercises: Level 2
// Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'
  ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};
let mostSkilledPerson;
let maxx = 0;
for (const person in users){
  const userSkill = users[person].skills.length;
 console.log(userSkill)
 if(userSkill > maxx){
  maxx = userSkill
  mostSkilledPerson = [maxx, person]
 }

}
console.log(mostSkilledPerson)

// Or
// let answ = "";
// let max = 0;
// let login;
// for(let keys in users){
//   if((users[keys].skills).length > max){
//     max = (users[keys].skills.length);
//     answ = keys
//   }
// }
// console.log(answ)
// console.log(login);

// console.log(Math.max.apply(0,arr))


// Count logged in users,count users having greater than equal to 50 points from the following object.

let loginNum;
let ans = [];
let num = 0;
for (const user in users){
  const login = users[user].isLoggedIn?.length;
  if(users[user].isLoggedIn){
   loginNum = user
   ans.push(loginNum).length
   num += ans
  }
}
console.log(ans)
console.log(num)




// Find people who are MERN stack developer from the users object

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object

// Get all the values of users object

// Use the countries object to print a country name, capital, populations and languages.

// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
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
console.log(personAccount.totalExpense())
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//     const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];


// // let product;
// const rate = (productName) =>{
//   for(const data in products){
//     if(productName == products[data].name){
//       // return products[data].ratings[0].rate
//       switch(products[data].ratings[0]?.rate){
//         case 5:
//           return "Excellent";
          
//           case 4:
//             return "Good";
            
//             case 3:
//               return "Average";
              
//       }
//     }
//   }
//   return productName;
// };
// console.log(rate("TV"))
// let product;
const ratings = (productName) =>{
  for(const product of products){
    if(productName == product.name){
      // return products[data].ratings[0].rate
      let rate = product.ratings[0]?.rate;
      switch (true){
        case rate >= 4 && rate <= 5:
          return "Excellent";
          
          case rate >=3 && rate < 4:
            return "Good";
            
            case rate >=2 && rate < 3:
              return "Average";
              
              case rate >=1 && rate < 2:
                return "Nice";

              case rate >=0 && rate < 1:
                return "Manageable";

              default:
                return "No rating";
      }
    }
  }
  return productName;
};
console.log(ratings("TV"))


// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// 🎉 CONGRATULATIONS ! 🎉
// */ 