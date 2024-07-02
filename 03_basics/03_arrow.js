// this keyword in javascript is used to give the current context of the scope.
// let's take an example:
// In this object we are using this keyword so it will give current context of the username which was kaushik.
const user = {
  username: "Kaushik",
  price: 333,
  welcomeMessage: function welcomeMessage() {
    console.log(`this.username,Welcome to the website.`);
  },
};
// user.welcomeMessage()
// user.username="Manish"
// user.welcomeMessage()
// Let's console the this keyword to get the current context.It will return the empty set as there is not a global variable for these this keyword.
//But in browser it will return the Window value.It will use in the interview  time.
// console.log(this)

// For functions,we cannot use this keyword inside the function to access the current context of the value.Let's take an example:
// function chai(){
//     // It console the whole information about the this keyword inside the function.
//     // console.log(this)

//     // But when we define a variable and then want to console using the this keyword it is not possible and then return the value undefined.Let's take an example:
//     const username="kaushik"
//     console.log(this.username)
// }
// It will return undefined
// const chai = function () {
//     let username="Kaushik"
//     console.log(this.username)
// }
// chai()

// Arrow function in javascript:

// We cannot use this keyword in arrow functions also .It is important question in interview.
const chai = () => {
  let username = "Kaushik";
  console.log(this);
  console.log(this.username);
};
// chai()
// Basic Arrow function:
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,4))
// If we are using curly braces then definetly we need to write return value. But if we need to build a function which was one line code then we can remove the curly braces and return statement also, we can directly use it.
// Implicit funtion in arrow function
// const addTwo = (num1,num2) => num1 + num2
// It was another type we can make a arrow function using parenthesis.
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "Kaushik" });

console.log(addTwo(3, 3));
