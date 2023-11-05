// singleton --> if an object is created using constructor it is singleton
// Object.create --> constructor for creating singleton 

// object literals

const mySym =  Symbol("PIN1")

const JsUser = {
    name: "Himel",
    "full name": "Himel Mesbah", // can't access with dot(.) notaion 
    [mySym]:"PIN_Number_1",
    age: 18,
    location: "Khulna",
    email: "himel@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)// symbol can't access with dot(.) notaion
// console.log(JsUser[mySym]) // ✅ way to access the symbol

JsUser.activity ="Football"
JsUser.email = "himel@chatgpt.com"
//Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "himel@microsoft.com"
// JsUser.activity ="Football"//freeze()➖prevents the addition of new properties
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);
