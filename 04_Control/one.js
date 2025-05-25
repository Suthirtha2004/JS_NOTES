// if
// if(condition) {} condition should be true to execute
// < ,> <=,>= ,== , !=, === (type checking)
const isUserLoggedin  = true
if(2 =="2"){
    console.log("executed")
}
if(2 ==="2"){
    console.log("executed") //striict check in
}

const temp = 41
if(temp < 50){
    console.log("less than 50")
}else{
    console.log("greater than 50")
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power ${power}`)
}

//console.log(`User power ${power}`) - Out of block scope
//If var is used then the variable is declared globally so it shouldn't be used

const balance = 1000
if(balance > 500) console.log("test"); //Implicit scope declaration we need to use semicolon and multi lines are restricted
if(balance > 500) console.log("test") , console.log("test 1"); //use comma to use multi lines

if(balance < 500){
    console.log("less than 500")
}else if(balance < 750){
    console.log("less than 750")
}else{
    console.log("less than 1200")
}

const userLoggedin = true
const debitCard = true
const userLoggedGoogle = true
const userLoggedEmail = true

if(userLoggedin && debitCard){ //checks both statement
    console.log("Allow to enter");
}

if(userLoggedGoogle || userLoggedEmail){ //Or condition
    console.log("user logged in");
}

//&& and || are called Logical Operators
