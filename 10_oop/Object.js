// Here we are learning the prototypes in javascript.
// In javascript everything is a object, where as we know array and string is a object. Here function is also a function but also a object.
// So we can use a function as a object and use methods on it or can create another method using it.
// And the most important line that Javascript is a Prototype Based Language.
// Due to prototypes we get the classes, this keyword,new keyword etc..
// which are used to make things more easier..
// We see everything in this code file...

function multiplyby5(num) {
  return num * 5;
}
multiplyby5.power = 2;
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
// Here we can create and inject our functions to the prototype such that we can call it and use it creating new variable of that function.
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)
// Here we got the error that it cannot read properties of that particular function as in the declaration it did not know that we injected some function to the prototype.
// chai.printMe()

// So if we want to get the properties or methods of that function we need to use the new keyword/constructor function such that it knows that there is a function created by you , you want to use.
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// Now it will get access to the printMe function which we have created using prototype function.
chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
