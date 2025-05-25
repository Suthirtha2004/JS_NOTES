// //OBJECT LITERAL

// const user = {
//     username : "Archer",
//     loginCount : 15,
//     signedIn : true,

//     getUserDetails : function(){
//             console.log("Got user details from database");
//             console.log(`Username : ${this.username}`);
//             console.log(this); // provides the total object and current context
//     }
// }

// console.log(user["username"])
// console.log(user.getUserDetails()) //cannot pass reference we have to run the program
// console.log(this) //Nothing in global context output - {}
// //this - refers to the current context

// //CONSTRUCTOR FUNCTION

// // const promiseOne = new Promise(); //The new keyword helps to do the constructor function>it helps to create multiple instances of the same object literal .It helps to create new context.
// // const date = new Date()

// function myuser(username,loginC,isloggedIn){
//     this.username = username ; //The parameter passed will be set to the username only
//     this.loginC = loginC;
//     this.isloggedIn = isloggedIn;

//     return this; //The other objects can access this
// }

// const UserOne = myuser("Archer",50,true);
// console.log(UserOne)
// console.log(UserOne.isloggedIn);
// const UserTwo = new myuser("Lana", 30, false);
// console.log(UserTwo);
// console.log(UserTwo.isloggedIn);