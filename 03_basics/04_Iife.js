// IIFE(Immediately Invoked Function Expressions)

// IIFE is used to invoke the function immediately after defined.It is defined using the curly braces.Let's take an example:

// This was the simple function definition:
function myfunction() {
  console.log("Hello");
}
// AFter defining we need to call it such that it will call the function.
myfunction();

// There is question that why we use the iife function.So the answer is that to get the function call immediately after defining the function.And to avoid the global variable pollution.
// let's make an example of how to define a iife function
(function myWorld() {
  console.log("World");
})();

// It was very much useful for database connections when a user open the website or app.The database connections should be started.
(function myConnection(params) {
    console.log(`DB Connected`)
})();

// We can use arrow function to apply the iife function
(()=> {
    console.log("Arrow function called")
})();
// We can also give parameter to the iife function.
((name)=> {
    console.log(`${name}`)
})("Kaushik");
