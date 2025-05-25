//For Each loop

const coding =["js","ruby","java","python","cpp"]
coding.forEach( function (item) {
    console.log(item)  //Callback function doesnot have a name they just have a parameter which remains common for all the array elements present
})

//Arrow Function

coding.forEach( (val) =>{
    console.log(val)
} )

//Simple function definition

function printAll(val){
    console.log(val)
}

coding.forEach(printAll) //pass the reference of the function

coding.forEach((item,index,arr)=>{
        console.log(item,index,arr) //For each can take a large no. of parameters like item , index and array
})

const codes = [
    {
        langName : "javascript",
        langFileName : "js"
    },

    {
        langName : "java",
        langFileName : "java"
    } ,

    {
        langName : "python",
        langFileName : "py"
    }
]

codes.forEach((item) =>{
    console.log(item.langName,item.langFileName)
})