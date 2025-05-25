//Array Specific Loops
//For of
const arr = [1,2,3,4,5]
for (const val of arr) {    //val -> iterator and object -> the thing on which we will do looping
    console.log(val);
}

const greetings ="Hello World"
for (const i of greetings) {
    console.log(`Each char is of ${i}`);
}

//Maps - unique values
const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")
map.set('IN',"India") // duplicate values not considered and the order remains same

console.log(map)
for (const key of map){
    console.log(key) // The values are returned in an array format
}
for (const [key,value] of map){
    console.log(key,': ',value) // Destructuring of array
}

//Objects 
const myObj ={
    'game1' : 'NFS' ,
    'game2' : 'Spiderman'
} //Objects are not iteratable through the for of loop