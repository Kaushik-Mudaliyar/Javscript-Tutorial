// Truthy and falsy values in javascript..
let userEmail = undefined;

if (userEmail) {
  console.log("Excuted..");
}
// Falsy values are those which if we use it then it will give false as a result. This values are:
// false,0,-0,BigInt 0n,"",null,undefined,NaN.

// Truthy values are those if we use it then it will give true as a result.This values are:
// true,1,"false"," " and many more which are not in falsy..

// How can we check the array in if else
const myarray = [];
if (myarray.length == 0) {
  console.log("Array is Empty!");
}
// How can we check the object in if else
const myobj = {};
if (Object.keys(myobj).length == 0) {
  console.log("Object is Empty!");
}

// Nullish Coaleaseing Operator (??): null,undefined
let val1;
// val1=5 ?? 10
// In case of null it will give the value which was not null.
// val1=null ?? 10
// Same In Case of undefined.
// val1= undefined ?? 10
// It gives the first value in this case:
val1 = undefined ?? 15 ?? 10;

console.log(val1);

// Ternary operator
// These operator is a short form of the if else operation.It uses ?: to get the result 1 or 2.Let's take an example:
const isloggedIn = true;
// (conditon) part? true part:false part.
isloggedIn == true
  ? console.log("LoggedIn Succesfully..")
  : console.log("Cannot LoggedIn");
