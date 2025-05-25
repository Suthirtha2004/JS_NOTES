const heros = ["A","B","C"]
const dc = ["superman","flash","batman"]

heros.push(dc) // push helps to push the elements into the existing array
console.log(heros[3][1]);

const allHero = heros.concat(dc) // adds the elements into the arrays and then returns into a new array
console.log(allHero)

const newArr = [...heros, ...dc] //The spread operator => ... this one which makes the array elements single wise and then returns them into a new one
console.log(newArr)

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const arr1 = another_array.flat(Infinity) //The flat helps to convert all the arrays placed in any dimension in one array and then the depth is set to Infinity to flatten the array to the last depth
console.log(arr1);


console.log(Array.isArray("Archer"));//Checks if any kind of array is there or not
console.log(Array.from("Archer"));//makes an array based on the elements of the array
console.log(Array.from({name : "Archer"}));//if key or value is not specified , whih one to make array it doesn't work at all and returns a null array

const score1 = 100;
const score2 = 500;
const score3 = 600;

console.log(Array.of(score1,score2,score3));
//Creates the array based on the elements provided and make an array based on that values and then does the necessary array functions