// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
//Promise takes callback function
const promiseOne = new Promise(function(resolve , reject){
        //Do an async task
        // DB calls , cryptography and network , network
        setTimeout(()=>{
            console.log('Async task is completed');
            resolve() //Now the resolve the connected to .then 
        },1000)
        
});

//Consume promise
//resolve has connection with .then()
promiseOne.then(function (){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Asyn Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 is completed");
});

const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username : "Archer",email : "abc@mail.in"}); //Mostly objects are passed in resolve section
        },1000)
})


promiseThree.then(function (user){
    console.log(user)  //then takes a parameter named user which is object is in this case
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Knight",password : "124"});
        }else{
            reject('ERROR : Something is wrong');
        }
    },1000)
});

//Callback hell - solving the chaining of .then and .catch
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((Myusername)=>{
    console.log(Myusername)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is neither resolved or anything"); //Finally - helps to define a constant work
})

const promiseFive = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "JAVASCRIPT",password : "456"});
        }else{
            reject('ERROR : JS is wrong');
        }
    },1000)
});

//USING async and await - waist to do work and then returns error if not done

async function ConsumePromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
//async and await has a problem that it cannot handle errors properly we ned try and catch block
ConsumePromiseFive()

//Fetch - The Main game changer

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json(); // we have to put the await keyword here too because its time consuming and we need to wait for the work to be done;
//     console.log(data);
//     }
//     catch(error){
//         console.log('Error :',error);
//     }
// }

// getAllUsers()


//Using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json(); //chaining of then where the response.json() will be returned ?
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error :",error); // the main working of then is before the work of first then is complete then it moves to the next one making it more reliable.
})

//Fetch makes a special task queue called a Micro task queue or a Priority Queue (it goes to the call stack first and it is executed at first)
//fetch(web api , obejcts/or anything to pass)

