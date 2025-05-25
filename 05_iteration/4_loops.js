//Objects - for in loop

const myObj ={
    js : 'javascript',
    cpp : 'c++',
    rb :'ruby',
    swift : 'swift by apple'
}

for (const key in myObj){
    console.log(key) //Key values printing
}

for (const key in myObj){
    console.log(`${key} is a shortcut for ${myObj[key]}`)
}

//Arrays

let arr = ["js","cpp","java","rb"]
for(const i in arr){
    console.log(i) //returns the key values or index values of the arrays it is the speciality of for in
    console.log(arr[i])
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")

for(const key in map){
    console.log(key) //Maps are not iterable in this way they have some constraints
}

