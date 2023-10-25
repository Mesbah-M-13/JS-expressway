const myDate = new Date();
console.log(myDate);
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
// let myCreatedDate = new Date("2023-01-14") // yyyy-mm-dd
let myCreatedDate = new Date("01-14-2023"); // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

//  ✅ ----- INTERVIEW-----✅ convert a date to milisec to sec
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // milisec to sec

let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getMonth() + 1); // to get the current month
//console.log(newDate.getDay()); // // Sunday - Saturday : 0 - 6

//console.log(`${newDate.getDay()} and the time is ${newDate.getTime()} `);

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});

const anotherDate = new Date();
const anotherDateInfo = anotherDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
console.log(anotherDateInfo);

const date = new Date(Date.UTC(2023, 0, 22));
// console.log(date);
// Request a weekday along with a long date
const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};
//console.log(date.toLocaleString("en-In", options));

let myDateTime = new Date();

let myTime = myDateTime.toLocaleString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "long",
});
//console.log(myTime);

/*
to know more options: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
*/
