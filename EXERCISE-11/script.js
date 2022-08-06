
// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring
// Find the persons who have less than two skills


// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
  const [name,skills,[htmlScore,cssScore,jsScore,reactScore] ] = student;
  console.log(name, skills, jsScore, reactScore);

// David (4) ["HTM", "CSS", "JS", "React"] 90 95

// Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ];
      const convertArrayToObject = (n) =>{
        const [[name1,skill1,scores1],[name2,skills2,scores2],undefined] = n
        const obj = [{"name" : name1, "skills":skill1,"scores":scores1 },{"name":name2,"skills":skills2,"scores":scores2},{"name":"Eve","skills":skills2,"scores":scores2}];
        return obj
        // for (const [...person] of [n]){
        //   const [name1,skill1,score1] = person[0]
        //   return {"name": name1, "skill":skill1,"score":score1}; 
        // }
      }
    console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]


// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
    const studentt = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 }, 
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    };
    
// The copied object output should look like this:
const newStudent = {...studentt};
const {name:namee, age, skills:{frontEnd, backEnd,dataBase,dataScience}} = newStudent;
frontEnd.push({"skill":"Bootstrap","level":8})
backEnd.push({"skill":"Express","level":9})
dataBase.push({"skill":"SQL","level":8})
dataScience.push("SQL")
console.log(newStudent)
//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }
// 🎉 CONGRATULATIONS ! 🎉
