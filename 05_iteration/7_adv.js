//Map function also returns value

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num) => num+10)
console.log(newNums)

const newNums1 = myNums.map((num) => {
    return num+10
})
console.log(newNums1)

const newval = []

myNums.forEach((nums)=>{
    nums = nums+10;
    newval.push(nums)
})

console.log(newval)

//Chaining

const newvalues = myNums.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=> num>=50)

console.log(newvalues)