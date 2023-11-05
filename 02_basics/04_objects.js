// singleton

// const tinderUser = new Object() // -->  singleton
const tinderUser = {}; // --> literal

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mesbah",
      lastname: "Himel",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4); // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.Here, {} is the targert

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(Object.keys(users));
// console.log(Object.values(users));

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in bangla",
  price: "999",
  courseInstructor: "himel",
};


//✅🚩 destructuring
// course.courseInstructor
const { courseInstructor } = course;
console.log(courseInstructor);
const { courseInstructor: instructor } = course; // when name is complicated and need to use another name
console.log(instructor);


// JSON talk

// same as object,but it uses keys and values both as strings
// {
//     "name": "himel",
//     "coursename": "js in bangla",
//     "price": "free"
// }

// in API when data comes as array of objects
[{}, {}, {}];
