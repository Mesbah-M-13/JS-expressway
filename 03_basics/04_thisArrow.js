const user={
    name:"himel",
    registerPrice: 999,

    welcomeMessage:function () {
        console.log(`${this.name}, welcome to website`);
    }
}
// user.welcomeMessage();
// user.name = "Mesbah"
// user.welcomeMessage();

// console.log(this);

// function sleep() {
//     let userName = "Himel"
//     console.log(this.userName); // this is not used inside only function, use it inside object function
// }
// sleep()

const sleep = () =>{
    let userName = "Himel"
    console.log(this.userName); 
}

//sleep()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4))

const addTwo = () => ({username: "himel",age:23})

console.log(addTwo().username);

const createMilkshake = (name) => ({
    name:"himel",
    price: 499
  }
)    
  
  const raspberry = createMilkshake();
  
  // 'Raspberry'
  console.log(raspberry.name);

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()