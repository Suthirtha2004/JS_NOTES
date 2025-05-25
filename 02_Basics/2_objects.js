//const obj1 = new Object() ; // This is a Singleton object
//Non-Singleton Object

const obj1 = {}
obj1.id = "1515";
obj1.name = "Archer";
obj1.isLoggedIn = false

console.log(obj1);

const obj2 = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Archer" ,
            lastname : "Knight"
        }
    }
}

console.log(obj2.fullname.userfullname.firstname)

//what if fullname doesnt exist and we want API response

console.log(obj2.fullname?.userfullname.firstname)

//Concatenating Objects
const obj3 = {1: "A" , 2: "B"}
const obj4 = {3: "C",4: "D"}
const obj5 = {5 : "E",6: "F"}
const objnew ={obj3 , obj4} //Gets into object3 only
console.log(objnew)

const objnew1 = Object.assign({},obj3,obj4,obj5) //All values get assigned to a new object and thus it helps to merge the source into the target object
console.log(objnew1)


// Spread operator

const objnew2 = {...obj3,...obj4}
console.log(objnew2)

const user = [
    {

    },
    {

    },
    {

    },
]
user[1].email

console.log(Object.keys(obj1)); //Datatype is array
console.log(Object.values(obj1)); //Datatype is array
console.log(Object.entries(obj1)); //Key value pair in array
console.log(obj1.hasOwnProperty('id')); //To detect any property present or not


//De-Structuring Of Object

const course ={
    name : "Computer",
    price : "999",
    instructor : "Archer"
}

//course.name

const {name} = course
console.log(name);

const {instructor : ins} = course //De-structuring of objects
console.log(ins);

//API 
//JSON
// {
//     "name" : "Archer",
//     "coursename" : "JS-Begineer",
//     "price" : "free"
// }
//Array of Obejcts
// [
//     {},
//     {},
// ]     
//JSON - Javascirpt Object Notation



