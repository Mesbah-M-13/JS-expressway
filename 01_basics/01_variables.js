const accountId = 1234;
let accountEmail = "fromkhul@example.com";
var accountPassword = "0123";
accountCity = "Dhaka";
let accountState;// declared a variable without any value/initialization

//accountId = 999
//console.log(accountId);//Assignment to constant variable ➡▶ once assigned value using const u can not change/alter it

accountEmail = "kpc@fb.com";
accountPassword = "889977";
accountCity = "Khulna";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

// var   ==> It gets hoisted to the top of its scope and initialized undefined.
//           It can be updated or re-declared.
//           Can be declared without initialization.
//           Can be accessed without initialization as its default value is “undefined”.


// let   ==> It also got hoisted to the top of its scope but didn't initialize.
//           It can only be updated and can't be re-declared.
//           Can be declared without initialization.
//           Cannot be accessed without initialization, leading to ‘referenceError’. 

// const ==> It also got hoisted to the top of its scope but didn't initialize.
//           It can't be updated or re-declared.
//           Cannot be declared without initialization.  
//           Cannot be accessed without initialization, as it cannot be declared without    
//           initialization in the first place.
	