let result = 0;
function calculateCartPrice(...num) {
  for (const i of num) {
    result += i;
  }
  return result;
}
// add values of an array using function
// console.log(calculateCartPrice(4, 34, 4, 12));

const user={
  name:"Meril",
  age: 23,
}

function getUserInfo(data) {
  console.log(`Name is ${data.name} and he is ${data.age} years old`);
}
// getUserInfo(user)
// also we can pass object here directly

getUserInfo({
  name: "Mesbah",
  age:27,
})
