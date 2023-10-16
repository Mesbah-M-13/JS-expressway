const accountId = 1234;
let accountEmail = "fromkhul@example.com";
var accountPassword = "0123";
accountCity = "Dhaka";
let accountState;// declared a variable without any value

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
