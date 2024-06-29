// singelton
// Object.create

// object literals
const mySym = Symbol("key1");

const jsuer = {
  "full name": "Kaushikms",
  name: "Kaushik",
  [mySym]: "mykey1",
  age: 20,
  location: "Kalol",
  email: "kaushikmudaliyar@google.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Wednesday"],
};
//Access the value of the object using .method..
console.log(jsuer.age);
//Another method used to access the value of the object..
console.log(jsuer["age"]);
//We cannot use .operations in this case , so we need to use the another method to access the object..
// console.log(jsuer.full name);

//We can use this instead..
console.log(jsuer["full name"]);

console.log(jsuer[mySym]);
console.log(typeof jsuer[mySym]);

// Object.freeze(jsuer)
jsuer.age = 12;
console.log(jsuer["age"]);

jsuer.greeting = function () {
  console.log("Hello Js User");
};
jsuer.greetingTwo = function () {
  console.log(`Hello Js User,${this.name}`);
};
console.log(jsuer.greeting());
console.log(jsuer.greetingTwo());
