//Immediately Invoked Function Expressions IIFE
(function Hello() {
    console.log("Hello world,DB connected...");
})(); // ; --> to end context of an IFFE

//()()    (function defination)(function execution)
(()=>{
console.log("DB connected two");
})();

// pass parameter and arguments in an IFFE
((userName)=>{
    console.log(`Good Morning,${userName}`);
})("Himel")

function greet(name) {
    console.log(`Welcome ${name}`);
}
greet("Mesbah")