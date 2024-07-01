// If you want to run the same code many times the codespace you can create a function such that it would not complex and also using functions we can write less code also..
// lets take an example:
// You need to print hello world 5times in your code. So without using functions you need to write:
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

// But using function you can write clean code:
// function definiton:
function printHelloWorld() {
  console.log("Hello world");
}
// Function call
// if you write this only it is the reference to the function,it cannot print the value inside the function.
// printHelloWorld

// If you really want to call the function.You need to write it like this:
// printHelloWorld();
// printHelloWorld();

// Lets make another function to learn the concepts in detail:
// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2);
// }
// It is returning NaN because we are not passing any values/arguments to the function so it gives the NaN..
// addTwoNumbers();

// If we want the addition to be done.So we need to pass the values/arguments in the functions..
// addTwoNumbers(3,5)

// But if you make a variable and store the value of this function it will not give 8 but give undefined because it does not return any number to the variable.
// Here it will give answer 8,but if try to print the result it will give undefined it means it stores undefined in the result variable..
// const result=addTwoNumbers(3,5)
// console.log("Result is: "+result);

// If you want to store the result of function in a variable you need to write the function in another way:
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  // You can write it in another way also:
  return number1 + number2;
}
// Now the result of the value is 8 not undefined..
const result = addTwoNumbers(3, 5);
// console.log("Result is: " + result);

//If you want to have a username which is already there if the user not give any arguments inside the function.You can do this:
function loginUserMessage(username="Kaushik") {
    // return `${username} just logged in`

    // You can also use if else to write the above program such that it does not allow the user to not pass arguments..
    if (username===undefined) {
        console.log("Please Enter the valid Username");
        return
    }
    else{
        return `${username} just logged in`
    }
    
}
//So it will not print the above function value because it uses the return type not console.log method to print the message.So get the message you need to console it or store the value inside a variable and console the variable...
// if you are not passing the values or parameters it return undefined..
// console.log(loginUserMessage())

//Here we are making a function which return the price of the product..
// But there is a problem if we give more than one price it will only return the first one ..
// So to get all the values inside the same variable we can use the rest/spread operation to get all the prices..
// rest operation can be used using ... syntax.
function CalculateCartPrice(...num1) {
    return num1;
}
// Now it will return every price passing through the function call..
// console.log(CalculateCartPrice(200,344))

// function using objects
const user={
    username:"Kausik",
    price:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);
// we can also pass the object directly in the function 
handleObject({
    username:"Manish",
    price:333
})

// function using array

const myNewArray=[200,440,299,599]

function SecondValueArray(anyArray)
{
    return anyArray[1]
}

// console.log(SecondValueArray(myNewArray))
// You can also pass the array directly inside the functions like this:
console.log(SecondValueArray([100,500,600]))