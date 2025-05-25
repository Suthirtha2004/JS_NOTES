const name = "Archer";
const repoCount = 50;

//Use backticks they are like place holders in javascript - String , String injection,string interpolation

console.log(`Hello my name is ${name} and amy repo count is ${repoCount}`);

const g = new String('Archer Knight'); //String is an object
console.log(g[0]);
console.log(g._proto_);
console.log(g.length);
console.log(g.toLowerCase());
console.log(g.charAt(2)); //Position character at
console.log(g.indexOf('t'));//Find the position of character

const newString = g.substring(0,4); //The last character is exclusive and it goes from 0 to 3.We can give neg values but it avoids it and starts from 0
console.log(newString);

const anString = g.slice(2,-5); //In slice we an give negative values
console.log(anString);

const str1 = "     Archer  ";
console.log(str1.trim());//trim start and trim end and works on whitespaces characters

const url = "https://oww.google.com"
console.log(url.replace('o','w'));

console.log(url.includes('com'))

const str2 = new String("Archer-Knight");
console.log(str2.split('-'));//Seperators we use here



