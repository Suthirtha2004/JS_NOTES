const user = {
    username : "Archer",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)      //this - refers to current context
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "Knight" //It will display Knight.Beacuse this refers only to the current context only
user.welcomeMessage()

console.log(this) // We are in node environment so "this" refers to the empty environment
//But in window if we use then this refers to the window object - Standalone place

//*****************ARROW */

function one(){
    let username = "Archer"
    console.log(this) //Now this produces a lot more features like many different things it shows from the node environment
    console.log(this.username) //this can acccess current context of the objects and cannot be explicitly used to access components of function
}
one()

const two=function(){
    let username = "Archer"
    console.log(this) //Now this produces a lot more features like many different things it shows from the node environment
    console.log(this.username) //this can acccess current context of the objects and cannot be explicitly used to access components of function
}
two()

const three = () => {
    let name = "Archer"
    console.log(this);   // we can use this
}

three()

//Arrow 1st Way
const addTwo = (num1,num2) => { //Explicit return 
    return num1 + num2
}

console.log(addTwo(3,4))

//Implicit return in Arrow function don't use parenthesis here , dont need to write return

const add2 = (num1,num2) => num1 + num2
console.log(add2(2,4))

const addnew = (num1,num2) => (num1 +num2) //We dont need to use return function since its written in parenthesis
console.log(addnew(5,6))

//To return object to the function

const addvar = (num1,num2) => {username : "Archer"} //parameters  => return value

console.log(addvar(1,2)) //In this way we cannot return objects we have to use parenthesis

const addvar1 = (num1,num2) => ({username : "Archer"}) //Object return in function
console.log(addvar1(1,2))

const myArray = [2,3,4,5,6]
//myArray.forEach(() => ()) 