// 1. number
let score = 33;

// console.log(typeof(score));
// console.log(typeof score );

// 2. string to number
let scoreOne = "33abc"; //string that can't convert to number("Himel") will give NaN

let valueInNumber1 = Number(scoreOne); // number conversion

//console.log(scoreOne);
// console.log(valueInNumber1);
// console.log(typeof(valueInNumber1));
// console.log(typeof valueInNumber1 );

// 3. null to number
let scoreTwo = null;

let valueInNumber2 = Number(scoreTwo);

// console.log(valueInNumber2);
// console.log(typeof valueInNumber2);

// 4. undefined to number
let scoreThree = undefined;

let valueInNumber3 = Number(scoreThree);

// console.log(valueInNumber3);
// console.log(typeof(valueInNumber3));

// 5. boolean to number
let scoreFour = true;

let valueInNumber4 = Number(scoreFour);
// console.log(valueInNumber4);
// console.log(typeof valueInNumber4);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// Boolean Conversion(b)
// 1. num ==> (b)
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof(booleanIsLoggedIn));

// 2. empty string ==> (b)
let isLoggedIn1 = "";

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);

// console.log(booleanIsLoggedIn1);
// console.log(typeof(booleanIsLoggedIn));

// number to string
let someNumber = 44;

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof(stringNumber));

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// +++++++++++ Operations +++++++++++
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion