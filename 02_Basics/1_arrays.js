//Arrays - datatype of multiple data items and they are resix=zable and tehy are of mixed type.Not Associative and accessed using indexing
//Array does shallow copy - Property of same reference point
//Deep Copy - not reference point

const myarray = [0,1,2,3,4,5];
const arr1 = ["A","B","C"];

const arr2 = new Array(1,2,3,4);
console.log(arr2[0]);

//Array Methods

arr2.push(6)
arr1.push(7)
console.log(arr2);

arr2.pop()
arr2.unshift(9) // adds the last element at first
arr2.shift()//pops the element at first

console.log(arr2)

console.log(arr2.includes(9)); //returns boolean type
console.log(arr2.indexOf(3));

let newArr = arr2.join(); //adds all the elements of the array into a string
console.log(newArr);
console.log(arr2) 

//Slice and Splice

console.log("A ",arr2)
const myn1 = arr2.slice(1,3)
console.log(myn1)

const myn2 = arr2.splice(1,3)
console.log("C" ,arr2)
console.log(myn2)