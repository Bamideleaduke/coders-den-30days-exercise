// Create a class of Houses with 3 properties (windows, doors and rooms)...create another class (Duplex) that inherits all the properties of Houses, then create an object from the houses class
class Houses {
    constructor(windows,doors,rooms){
this.windows = windows;
this.doors = doors;
this.rooms = rooms;
    }
}
class Duplex extends Houses{   
    constructor(windows,doors,rooms,cushions){
        super(windows,doors,rooms)
        this.cushions = cushions;
    }
}
const obj = new Duplex("4 windows","2 doors","3 bedrooms","3 Sitter");
console.log(obj);

// 
// 
// const inte = document.getElementsByTagName('h1');
// console.log(inte);
// inte.innerHTML = "Flopped Interview";
// window scope and session scope
