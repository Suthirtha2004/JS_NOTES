//For each doesnot return any value 
// const coding =["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item; //returns undefined
// })

// console.log(values)


//filter also takes call back function it helps to return values filter works on the basis of true and false values
const nums = [1,2,3,4,5,6,7,8,9,10]
const val= nums.filter( (num) => num > 4)
console.log(val)
const val2= nums.filter( (num) => {
     return num > 4 //since we have used the curly braces so we have to use return keyword to return values
})
console.log(val2)


const mynums = []

nums.forEach( (num) => {
    if(num > 4){
        mynums.push(num)
    }
}) //using a new array because it does not return 

console.log(mynums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk)=> bk.genre === 'History')

  console.log(userBooks)

  const books2 = books.filter((bk) => {
    return bk.publish >= 2000
})

console.log(books2)

const book1 = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === 'History'
})

console.log(book1)

