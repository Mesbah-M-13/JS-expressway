
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);
let i = 20
while (i>10) {
    //console.log(`greater and value is ${i}`);
    i--
}

for (let i = 10; i < 11; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 11; j++) {
        //const element = i * j;
        console.log(`${i} * ${j} = ${i * j}`);
    }
}