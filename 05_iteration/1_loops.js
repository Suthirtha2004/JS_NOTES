//for

for(let i=0;i < 10;i++){
    const element = i;
    if(element == 5){
        console.log("5 is printed") //This line is printed first before the number 5
    }
    console.log(element);
}

for(let i=1;i<=10;i++){
    console.log(`Outer loop ${i}`);
    
    for(let j=1;j<=10;j++){
            //console.log(`Inner loop value ${j} and inner loop ${i}`);
            console.log(i + "*" + j +"=" + i*j)
    }
}


let myArray = ["A","B","C"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}
for (let index = 0; index <=myArray.length; index++) { //Array index is out of bounds //if the condition is not used then the loop continues infinitely
    const element = myArray[index];
    console.log(element)
}

//break and continue
for(let i = 0; i< 10;i++){
    if(i==5){
        console.log("Detected 5");
        break; //control flow to break the break keyword is used
    }
    console.log(`Value of is ${i}`)
}
for(let i = 0; i< 10;i++){
    if(i==5){
        console.log("Detected 5");
        continue; //contiue is used to ignore the condition only one condition is skipped and detected and it continues
    }
    console.log(`Value of is ${i}`)
}