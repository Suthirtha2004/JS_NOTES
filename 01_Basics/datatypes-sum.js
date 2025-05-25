//Based on the data stored in memory and data is accessed that is divided into primitive and non-primitive datatypes
// Primitive - 7 types
/* String = changes in copy call by value all of them
Number , boolean , null , undefined , Symbol - unique for component value, BigInt 
*/
//Reference Type / Non primitive - Arrays , Objects , Functions 

//JS 
const score =100; // JS doesnt need for specifications
const scoreval=100.3;
const logged = false;
const outTemp = null
let usermail ; //value goes here undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNum = 79845123054444445544n

//Array

const heroes = ["A","B","C"] ;//Reference types
let myobj ={
    name  : "Archer",
    age : 12,
}

const myfunc = function(){         //constant type function declaration
    console.log("Hello world");
}
 //Use typeof to know datatype of javascript

 console.log(typeof myfunc); //Basiaclly the function is object function type


 //******************************************************************************************* */
 //MEMORY
 /* 
 Stack -primitive datatype we will get copy of that variable
 Heap - reference of original value changes will occur in original value
*/
let myName = "Archer"

let anotherName = myName;
anotherName = "Knight";
console.log(myName)
console.log(anotherName)


let user1 = {
    email : "abc@mail.com",    // Goes to heap
    id :1,
}

let user2 = user1;
user2.email  = "xyz@mail.com" //The dot operator is used to access the object properties

console.log(user1.email);
console.log(user2.email);