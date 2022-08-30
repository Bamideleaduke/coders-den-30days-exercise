// Exercises
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const skillJson = JSON.stringify(skills);
console.log(skillJson)

let age = 250;
const ageJson = JSON.stringify(age);
console.log(ageJson)
let isMarried = true;
const isMarJson = JSON.stringify(isMarried);
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const studentJson = JSON.stringify(student,undefined,2);
console.log(studentJson)
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercises Level 1
// Change skills array to JSON using JSON.stringify()

// Stringify the age variable

// Stringify the isMarried variable

// Stringify the student object

// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties
const studJson = JSON.stringify(student,['firstName','lastName','skills'],2);
console.log(studJson)
// Exercises Level 3
// Parse the txt JSON to object.
let textParse = JSON.parse(txt,undefined,2)
let max = 0;
let mostSkilled;
for (const person in textParse) {
  let usersSkill = textParse[person].skills.length;
    if(usersSkill > max){
        max = usersSkill
        mostSkilled = `${person.toUpperCase()} has the highest skills of ${max} `
    }
}
console.log(mostSkilled)

// console.log(textParse)
// Find the the user who has many skills from the variable stored in txt.
// let max = 0;
// let mostSkilled;
// for (const person in textParse) {
//   let usersSkill = textParse[person].skills.length
//     if(usersSkill > max){
//         max = usersSkill
//         // mostSkilled = [person,max]
//         mostSkilled = `${person.toUpperCase()} has the highest skills of ${max} `
//     }
//     // console.log(person)
// }
// console.log(mostSkilled)

// 
const obj ='{"name":"John","age":20,"car":null}'
for (let json in JSON.parse(obj)){
    json
}
// 🎉 CONGRATULATIONS ! 🎉