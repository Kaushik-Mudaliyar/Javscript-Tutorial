// There are two scopes in javascript, which are local and global scope.
// Scopes means the code inside or outside of the {}(block)..
// Local Scope:The variable which was defined inside of the {} block is called local Scope.
// Global Scope:The variable which was defined outside of any block is called a Global Scope.
// let a = 30;
// const b = 20;
// var c = 10;

// If you console all the variables it will give the result,but there is a twist..
// when we use if block and inside that if block we are defining the same varaibles and let's see what happen?
if (true) {
  let a = 30;
  const b = 20;
  var c = 10;
}
//Here if we are defining using let keyword it will not work as it only works inside the if block. so we are getting error.
// console.log(a);

//Here if we are defining using const keyword it will not work as it only works inside the if block. so we are getting error.
// console.log(b);

// But for var it is interesting we can console the value inside the variable c.so we does not get error and get the given value which was inside the if block.
// That is why in today's time no one use these var variables because it create huge complexity in large codebase if user one defined the variable outside the block and another user who is not aware of these he change these variable inside a block it creates a huge confusion due to that var is not used nowadays..
console.log(c);

// More about Scopes using functions..
// Here, we are defining a function named one and inside that a constant variable username and another function two..
function one() {
  const username = "Kaushik";

  function two() {
    const website = "youtube.com";
    // We can access the username as it would treated as global scope for function two. so it can access the username and prints it in the console.
    console.log(username);
  }
  // It will give error as the website variable is defined inside the function two and we are trying to access it outside the function block, that's why it give an error.
  // console.log(website)
  two();
}
one();

// More about Scopes using if condition:
if (true) {
  const username = "kaushik";
  if (username === "kaushik") {
    const website = " Youtube";
    console.log(username + website);
  }
  // It will give error because website is defined in the above if block not the one which we are consoling.
  // console.log(website);
}
// It will throws error because of the same reason (It is defined inside the if block and we are accessing the value outside of the block.)
// console.log(username)

// +++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

// Here we can call the function before defining the function and returns the value of addOne.
addOne(5);
function addOne(num) {
  return num + 1;
}
// It will return the addOne function.
// addOne(5)

addTwo(5);
// But if we are trying to return the addTwo function it will give errors as it was defined inside a variable. so we cannot use it before defining the function,but we can call a function before defining a function.
const addTwo = function (num) {
  return num + 2;
};
// It will return the addTwo function.
// addTwo(5)
