//Immediately Invoked Function Expression (IIFE)

(function func1(){
    console.log(`DB connected`)
})();
 //What if we dont need to write func1 again and again just want immediately invoking the function 
//The first parenthesis defines the function definition while the second one tells about the function execution as we know in block scope we use parenthesis we can define there

//IIFE used to immediate invoke and to help solve global scope pollution
//We need to add the semicolon to end the function within the block scope 

( () => {
    console.log(`DB2 Connected`)
}) (); //We add semicolon 

( (name) => {
    console.log(`DB2 Connected`)
}) ("Archer"); //Name IIFE
