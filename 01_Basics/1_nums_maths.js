const score = 400;

const balance = new Number(100)
console.log(balance) //Number of object type

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const num = 25.8993;
console.log(num.toPrecision(3)); // Returns a string type and precisely does it

const hun =1000000
console.log(hun.toLocaleString()); //Roman number system
console.log(hun.toLocaleString('en-IN'));//Indian number system

//+++++++++++++++ MATHS ++++++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-4)); //Absolute values
console.log(Math.round(4.5666));//round off
console.log(Math.ceil(4.9));//Chooses the ceil or top value
console.log(Math.floor(4.9));//Chooses the lower most value
console.log(Math.max(4,3,6,7));
console.log(Math.min(5,6,7,8));

//Random
console.log(Math.random()) ; //Provides random values between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));//For providing the range between 0 to 9

const min =10;
const max = 20;
console.log(Math.random() * (max-min + 1)+min) // To find the answers between two numbers








