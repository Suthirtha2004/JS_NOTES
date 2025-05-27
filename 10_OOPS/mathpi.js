//Object.getOwnPropertyDescriptor()

//console.log(Math.PI); -- We cannot change the value of math.pi

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

//According to this , the writable property of the math.pi library is set to false enumerable and configurable are set to false 
// so it is hard-coded and set to false

const user = {
    name : "Archer",
    followers : 41,
    isAvailable : true ,

    followCount : function(){
        console.log("hello world")
    }
    
}

console.log(Object.getOwnPropertyDescriptor(user)); //The property descriptor needs a property to give its description but we have passed only an object and so we need to pass a property just like PI

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,'name',{ //changing the properties of the object
        //writable : false ,
        enumerable : false // to stop iteration of properties
})

// console.log(Object.getOwnPropertyDescriptor(user,'name'));

for(let [key,value] of Object.entries(user)){ //Obejct is not iterable but we can use entries and for of 
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);

    }
    

}