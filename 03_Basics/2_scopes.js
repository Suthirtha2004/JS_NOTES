//Curly braces are scopes.But when declared with object they are not scope they are object declaration but when with function they are called scope

var c = 300
let a = 500
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner" ,a) //Prints 10

}
console.log(a);// Values cannot be displayed out of scope // Prints 500
//console.log(b);//Values in constant cannot be displayed out of scope
console.log(c); //Values in variable can be displayed outside . VAr taked value in the block scope

// { } - Block scope and outside of that is global Scope.In case of block scope it overrides it
// The global scope in windows console and in block scope are different totally

//Nested Scope

function one(){
    const username ="Archer"

    function two(){    //two can access the variables of one because one is global to two
        const website = "JS"
        console.log(username);
    }
    //console.log(website); //one cannot access the variables of two

    two()
}

one()

if(true){
    const username = "Archer"
    if(username === "Archer"){
        const web = "JS"
        console.log(username + web)
    }
    //console.log(web) outside of scope
}

//console.log(username); outside of scope

//*************NOTES*******************//
console.log(addone(5))
function addone(num){
    return num + 1
}

 //addtwo(2) - This is the problem which we cannot do here.This is Hoisting
const addtwo = function(num){ //Expression - A type of function 
    return num + 2
}

console.log(addtwo(5))
