const myDate = new Date()
//console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1); // to get the current month
//console.log(newDate.getDay()); // // Sunday - Saturday : 0 - 6

//console.log(`${newDate.getDay()} and the time is ${newDate.getTime()} `);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

// const anotherDate = new Date()
// anotherDate.toLocaleString('default',{
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// })
// console.log(anotherDate.year);

const date = new Date(Date.UTC(2023,0,22));
console.log(date);
// Request a weekday along with a long date
const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("en-In", options));

/*
to know more options: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
*/