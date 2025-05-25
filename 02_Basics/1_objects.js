//Singleton - When we make objects based on constructor we get a singleton object but we make objects in different ways we get different objects
// Literals and Constructors 
//Object Literals

const mySym = Symbol("key1");

const Juser = {
    name : "Archer",
    "full name" : "Archer Knight",
    [mySym] : "mykey1" ,      //Here mySym is declared as a symbol key and the value is stored in it.Basically if we dont write in square brackets it would produce the typeof string
    age : 20,
    location : "kolkata",     //key : value
    email : "xyz@mail.com",
    isLoggedIn : false,
    lastLogin : ["Monday","Sunday"]
}
//To ways to access objects
console.log(Juser.name);
console.log(Juser["name"]) ;//We have to use name in " " because by default it takes the name as string
console.log(Juser["full name"]);
//And the only way to access symbol is use the square brackets dont use " " because its not a string

console.log(Juser[mySym]);

//Overriding keys
Juser.email = "abc@mail.in";
//Object.freeze(Juser) ; //No changes will be accounted object is locked
//eg
Juser.email = "abd@mail.in"
console.log(Juser);

// Function in Objects
 Juser.greeting = function(){
    console.log("Good Night");
 }

console.log(Juser.greeting);// Produces the answer function[anonymous] since the function reference has been shown but the finction is not executed
console.log(Juser.greeting());//function executed 

Juser.greet2 = function(){
    console.log(`Good Night,${this.name}`) ; // this is used to access the current object's keys
}
console.log(Juser.greet2());