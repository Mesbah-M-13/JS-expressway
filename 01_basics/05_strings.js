const name = "Himel";
const repoCount = 20;

// console.log("I'm "+name +" and repo count value :-"+repoCount);
// console.log(`Hello I'm ${name} and my repo count is ${repoCount}`);

const gameName = new String("mesbah-m13-com");

console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
//console.log(newString); // exclude the end index

const anotherString = gameName.slice(-14, 6);
//console.log(anotherString);// slice() extracts up to but not including indexEnd

const newStringOne = "   mesbah    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com/mesbah%20himel";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
//The split() method splits a string into an array of substrings & returns the new array.
