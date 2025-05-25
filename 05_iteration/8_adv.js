//reduce - helps in reducing values but takes into account of accumulator and current values

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc : ${acc} and curr : ${currval}`)  //accumulator is initiaized to 0 and here the initial value is 0
    return acc + currval
},0)

console.log(myTotal)

//Arrow function

const myTotal2 = myNums.reduce((acc,currval) =>acc+currval,0)
console.log(myTotal2)

const shopcart = [
    {
        item : "js",
        price : 3000
    },
    {
        item : "web dev",
        price : 6000
    },

    {
        item : "data science",
        price : 9000
    }
]

const totalprice = shopcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)
