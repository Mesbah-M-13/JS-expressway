//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive) ▶▶▶ Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++ Stack & Heap Memory ++++++++++++++++
/*
primitive type  ▶ uses Stack Memory 
non-primitive type ▶ uses heap memory

** Stack Memory --> gives copy of a variable
** Heap  Memory --> gives reference(original value) to the memory location
*/

// stack example
let myYoutubeName = "Mesbah Himel"
let anotherName = myYoutubeName
anotherName = "mesbah_0010"
// console.log(myYoutubeName);
// console.log(anotherName);


// heap example
let userOne={
    country:"Bangladesh",
    email:"mesbah@example.com"
}
let userTwo = userOne
userTwo.email ="mehimel_001@google.com"
console.log(userTwo.email);
console.log(userOne.email);
/*
JavaScript is a dynamically typed language as we do not explicitly need to mention the type when defining the variable like we need to do in C/CPP. The compiler will interpret it automatically.

Data types are categorized in 2 types:
i) Primitive Datatypes:
Number -> (typeof) number
String ->  string
Boolean (true/false) -> boolean
null (a special type)  -> object
undefined -> undefined (Default value when a variable is assigned no value)
Symbol -> symbol
BigInt -> bigint (For large or scientific values)

ii) Non-Primitive (Reference)
All referenced data types have object as type even function is called object function
Array -> object 
Function -> function 
Object -> object
 */