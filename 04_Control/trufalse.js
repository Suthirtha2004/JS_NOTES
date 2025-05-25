const usermail = "abc@mail.in"
if(usermail){
    console.log("Got user mail"); // this one will run .String assume will have true value
}else{
    console.log("Dont have user mail");
}

const mail1 = []
if(mail1){
    console.log("Got user mail"); // Empty array will have truth value
}else{
    console.log("Dont have user mail");
}

//Falsy Values
// false , 0, -0,BigInt 0n , null , undefined , NaN ," "
//Other than all are true

//Surprise values
// "0" - true (0 within string) , "false" ," " all true values ,[] , {} - empty object
//empty function - function (){} true
const mail2  =""
if(mail2.length === 0){
    console.log("Array is empty")
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty") //The object.keys returns an array of empty and thus we can check using the length property
}
 // false == 0 => true
 // false == "" => true
 //0 == false => true

 //Nullish Coalescing Operator(??) : null undefined
 let val =5;
 val1 = 5 ?? 10;//assigns the first value
 val1 = null ?? 10;
 console.log(val1) //assign the value other than null

 val2 = undefined ?? 15;
 console.log(val2);

 val3 = null ?? 10 ?? 20
 console.log(val3) //assigns the first value to the variable that we got other than null
 //Terneray Operator

 // condition ? true : false
const price = 100
price > 80 ? console.log("less than 80") : console.log("no");
price <= 80 ? console.log("less than 80") : console.log("no");
 
 