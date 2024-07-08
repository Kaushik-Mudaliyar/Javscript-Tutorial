// Control Flow
// It is very useful as we can control the flow of program using if else and switch
// Let's take an example:
// By this way you can execute a if statement. The if statement is only run if the condition inside the if is true. If it is false the code written inside the if block cannot execute.
// if (true) {
//     console.log("Executed")
// }

// let age = 18
// We can use many comparision operations to check whether the given conditions is true or false.
// In this we are using == which checks whether the age which is 18 is equal to 18. And if it was true then the if condition block executes.
// If it was false it does not enter the block.
// if (age == 18) {
//     console.log("Age is greater than 18")
// }

// Here this statement runs and does not have any dependencies on if block .So it will console the sentence every time code runs.
// console.log("Age is not greater than 18")

// Comparision Operations:
// >,<,<=,>=,==,===(it checks the values and also their respective datatypes),!=
// We can use all this operations to check the conditions..
// Let's take some example
// if (age>=18) {
//     console.log("Age is greater than or equal to 18");
// }
// The else statement runs when the if statement is false means if it is true it will run the if block otherwise else block. 
// else{
//     console.log("Age is less than 18");
// }

// if elseif else ladder:
// let balance=1000
// if (balance<500) {
//     console.log("Balance is less than 500");
// }
// else if (balance<750) {
//     console.log("Balance is less than 750");

// }
// else if (balance<900) {
//     console.log("Balance is less than 900");
// }
// else{
//     console.log("Balance is less than 1200");
// }


// There are some logical operations in javascript:
// let userEmail=true
// let userId=false
// For &&(And operation) when both the operands of the conditions is true then the condition would be true.It is same as we learnt in physics.
// truth table:
// userEmail userId Answer
// true      true   true
// true      false  false
// false     true   false
// false     false  false

// if (userEmail&&userId) {
//     console.log("Executed..");
// }

// For ||(Or operations) when one of the operands of the condition is true then the condition is true.
// truth table:
// userEmail userId Answer
// true      true   true
// true      false  true
// false     true   true
// false     false  false

let userEmail=true
let userId=false
if (userEmail||userId) {
    console.log("Executed..")
}
