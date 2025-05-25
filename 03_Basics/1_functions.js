//Functions - Package of Code to run many times

function Myname() { //Function scopr or definition
    console.log("Archer");
}

Myname() //Function call

function add(num1 , num2){ //here num1 or num2 are arguments
    console.log(num1 + num2);
}

add(3,4); //What if instead of number if give string
add(3,"4"); //String wise concatenation

function add2(num1 , num2){ //here num1 or num2 are arguments
    let result = num1 + num2;
    console.log(result);
    return result; 
    //After a function is returned it doesnot print anything
}

add2(3,5);
function add2(num1,num2) {
    return num1 + num2;
}
const value  = add2(3,5)
console.log(`Result ${value}`);

function LoginMessage(username){
    return `${username} just logged in`
}

console.log(LoginMessage("Archer"))
console.log(LoginMessage(""))
console.log(LoginMessage())

function LoginSetup(username){
    if(username === undefined){
        console.log("Username not defined")
        return
    }
    return `${username} has logged in`
}

console.log(LoginSetup())

function LoginSetup1(username){
    if(!username){
        console.log("Username not defined")
        return
    }
    return `${username} has logged in`
}

console.log(LoginSetup1("Archer"))


//Functions Part 2

//For taking Multiple parameters as arguments
//Using Rest Operator ...
function calculatePrice (...num1){
    return num1;
}
console.log(calculatePrice(200,600,500)); //Returns an array of these elements . The elements are packed into an array

//Objects in JS Functions
const user = {
    name : "Archer",
    id : 14
}

function handleObject(obj){
    return `${obj.name} has roll number ${obj.id}`
}

console.log(handleObject(user)) //But the main issue starts during type safety what id is is not written  but roll numbe ris written
//Issue solved
function Object_specified_after(obj1){
    console.log(`${obj1.name} has id number ${obj1.id}`)
}

Object_specified_after({
    name : "Knight",
    id : 18727
})

//Array in Functions

const myArray = [100,200,300,500]
function printValue(arr){
    return arr[0]
}
console.log(printValue(myArray))

function printValue(arr){
    return arr[2]
}
console.log(printValue([300,400,500,600]))




