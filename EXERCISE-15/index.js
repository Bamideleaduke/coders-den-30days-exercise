// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name,age,color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs=legs
        this.score = 0
    }
    get getAnimal(){
        const info = "A " +this.name+ " can live up to " + this.age +" years";
        return info;
    }
    get getscore(){
       return this.score
    }
    set setAnimal(score){
        this.score += score
    }
    static getAnimalInfo(){
        const info = "A " +this.name+ " can live up to " + this.age +" years";
        return info;
    }
}
// Create a Dog and Cat child class from the Animal Class.
const Dog = new Animal("German Shepard",3,"Black",4);
Dog.setAnimal = 4
console.log(Dog)
console.log(Dog.score)
console.log(Dog.getAnimal)
let Cat = new Animal("Cat",5,"black and white",4);
console.log(Cat)
console.log(Animal.getAnimalInfo())

// Exercises Level 2
// Override the method you create in Animal class
class Student extends Animal {
    constructor(name,age,color,legs,gender,eye_color){
        super(name,age,color,legs)
        this.gender = gender
        this.eye_color = eye_color
    }
}
const Student1 = new Student("Goat",2,"Brown",4,"Male","Blue")
const Student2 = new Student("Goat",2,"Brown",4,"Female","Gray")
console.log(Student1)
console.log(Student2)

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log(ages.length); 
class Statistics {
    constructor(){this.age = ages}
   get count(){return ages.length}
   get sum(){return ages.reduce((acc,cur)=> acc+cur)}
   get min(){ages.sort((a,b)=>a-b);return ages[0]}
   get max(){ages.sort((a,b)=>b-a);return ages[0]}
    range(){return this.max-this.min}
   mean(){return Math.ceil(this.sum/this.count)}
   median(){ages.sort((a,b)=>a-b);return ages[Math.floor(ages.length/2)]}
   mode(){ages.reduce((ac,cr)=>{return {'mode':cr,'count':cr.length}})}
}
const statistics = new Statistics()
console.log('Count:', statistics.count) // 25
console.log('Sum: ', statistics.sum) // 744
console.log('Min: ', statistics.min) // 24
console.log('Max: ', statistics.max) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉