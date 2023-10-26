// () --> parenthesis
// [] --> square brackets
// {} --> curly braces

// array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeors = ["shaktiman", "naagraj"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

//console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// Array --> Stores a collection of multiple items under a single variable name
/*
    1.JavaScript arrays are resizable and can contain a mix of different data types
*/
const myArray = [0,1,2,3];
const myAnotherArr = [9, 8, 7, 6, 5, 4, true, "Himel"];

//console.log(myAnotherArr["one"]); //    2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using "arbitrary strings" as indexes, but **
//console.log(myAnotherArr["0"]); //** must be accessed using nonnegative integers (or their respective string form) as indexes.
//console.log(myAnotherArr[0]); //    3.JavaScript arrays are zero-indexed: the first element of an array is at index 0

//  4.JavaScript array-copy operations create shallow copies(A shallow copy of an object is a copy whose properties share the same references/same object or properties(primitive type vs reference type)== call stack and heap memory concept)

const myHeors = ["Spees", "Flash","Raju"];

// another 2 ways to declare an Array
const myArr2 = new Array(0,1,2,3,5,6)
const myArr3 = Array(2,4,6,8)
// console.log(`Array2 is-->${myArr2} and Array3 is -->${myArr3}`);
// console.log(myArr3[3],myArr2[1]);

 // Array Methods
// myArray.push(4) // Appends new elements to the end of an array
// myArray.push(5)
// myArray.pop()  // remove last element from an array 

// myArray.unshift(-1) // Inserts new elements at the start of an array
// myArray.unshift(-2) // it creats a problem as all element needs to shift one space to the right
// myArray.shift()   // Removes the first element from an array

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(30)); // -1 as value 30 does not exist
// console.log(myArray.indexOf(0));

// const newArr = myArray.join()// Adds all the elements of an array into a string, separated by the specified separator string.
// console.log( newArr);
// console.log(typeof newArr);

// console.log(myArray);


const myNewArr = [1, 2, 3, 4, 5,6];
console.log("A ▶", myNewArr);

const myn1 = myNewArr.slice(1, 3);
console.log(myn1);

console.log("B ▶", myNewArr);

const myn2 = myNewArr.splice(1, 3); // splice()--> manipulates original array
console.log(myn2);

console.log("C ▶", myNewArr);



const myArr = [0, 1, 2, 3, 4, 5];
/*-----------------🚩 INTERVIEW 🚩---------------- */

console.log(`Original Array :-->`,myArr);
//+++++++ ✅ slice & splice ✅ ++++++++
console.log(`Slice array: A-->`, myArr.slice(-5,-3));//Returns a copy of a section of an array , end exclude
//+++++++ ✅ slice & splice ✅ ++++++++
console.log(`Splice array: B--> }`,myArr.splice(1,3));// returns An array containing the elements that were deleted.
console.log(`Original Array after applied splice:-->`,myArr);