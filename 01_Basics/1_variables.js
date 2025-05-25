const accountId = 14455222
let accountEmail = "abc@gmail.com"
var accountPass = "12345"   
accountCity = "Kolkata"//this is also possible
let accountState;

//accountId = 2 //constant value changing is not allowed
accountEmail = "xyx@mail.com"
accountPass = "22112211"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState])

//Variables are decleared using let and var.Now javascript generally had a problem that it doesnot know about scope so we dont use var.The curly braces are called scope
// let solves the javascript scope problem prefer not to use var beacuse of issue in block scope and fucntional scope
//variables in js if state not defined is issued to undefined state