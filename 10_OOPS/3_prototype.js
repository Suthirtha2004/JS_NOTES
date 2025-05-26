// let Myname = "Archer      ";

// //My default bake in a function 

// console.log(Myname.trueLength);//trueLength - prepare a method so that any array can access it

// To add a property to the object like a power and we can add it to the object

let myHeros = ["A","B","C"]

let powersHero = {
    A : "fight",
    B : "heal",
    C : "save"
}

Object.prototype.archer = function(){
    console.log("Everyone is moonknight");
}

//Since we have set the property to object it is inherently given to the sub groups
powersHero.archer();
myHeros.archer();

//But what if we assign it to only array ?

Array.prototype.knight=function(){
    console.log('Fight for survival');
}

myHeros.knight();
//powersHero.knight(); - not given to the parent class


//Inheritance 

const User ={
    name : "Archer",
    email : "abc@mail.in"
}

const Teacher = {
    work : "Teach"
}
const TeachingSupport = {
    isAvailable : true,
}

const TASupport = {
    makeAssign : 'JS task',
    fullTime : true,
    __proto__ : TeachingSupport
}

//What if we want to do prototypical inheritance

Teacher.__proto__ = User

//Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

//Creating a new method

let Myname = "Archer         ";
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`);
}

Myname.trueLength();
"Knight".trueLength();
"Moonknight".trueLength();