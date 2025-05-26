//OBJECT LITERAL

const user = {
    username : "Archer",
    loginCount : 15,
    signedIn : true,

    getUserDetails : function(){
            console.log("Got user details from database");
            console.log(`Username : ${this.username}`);
            console.log(this); // provides the total object and current context
    }
}

console.log(user["username"])
console.log(user.getUserDetails()) //cannot pass reference we have to run the program
console.log(this) //Nothing in global context output - {}
//this - refers to the current context

//CONSTRUCTOR FUNCTION

// const promiseOne = new Promise(); //The new keyword helps to do the constructor function>it helps to create multiple instances of the same object literal .It helps to create new context.
// const date = new Date()

function myuser(username,loginC,isloggedIn){
    this.username = username ; //The parameter passed will be set to the username only
    this.loginC = loginC;
    this.isloggedIn = isloggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username} to Github`)
    }
    return this; //The other objects can access this
}

const UserOne =  new myuser("Archer",50,true);
//const UserTwo = myuser("Lana", 30, false); //USer two overrides if not written "new" keyword
const UserTwo = new myuser("A",15,false)
console.log(UserOne.constructor)
console.log(UserOne.isloggedIn);
console.log(UserTwo);
console.log(UserTwo.isloggedIn);