//Date is the single object is declared from 1st Jan , 1970. All the dates are calculated from there.These are calculated on milliseconds

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let newDate = new Date(2025,0,23,5,3); // mobth starts from 0 and then date
console.log(newDate.toLocaleString());

let date1 = new Date("2025-01-14");
console.log(date1.toLocaleString());


//Time Stamp

let myTime = Date.now();
console.log(myTime);
console.log(newDate.getTime());
console.log(Math.floor(myTime/1000));

let date2 = new Date();
console.log(date2);
console.log(date2.getMonth()+1); // Since month starts from 0
console.log(date2.getDay())

console.log(date1.toLocaleDateString('default',{
    weekday: "long",
    
}))

