// For Loops is a very commonly used loops in javascript.
// These loops helps us to print the same thing many times.
// Let's take an example:
// You need to print numbers from 1 t0 10
// It was small as we just need to print just 10 numbers but if you need to print 100 or 1000 numbers what should you do so there we can use loop to do the repetetive task continuosly.
// let number=1;
// console.log(number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)
// console.log(++number)

// Using Basic For Loop to print the value 1 to 10 :
// You can see how short is this code which can be used to console value of 1 to 10:
// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

// Using this basic for loop we can iterate through the array.
// let's take an example:
// let arr = [1, 2, 3, 4, 5];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// Using these basic for loop we can iterate the string also.
// let str = "Kaushik";
// for (let index = 0; index < str.length; index++) {
//   const element = str[index];
//   console.log(element);
// }

// There are two functions used in javascript which are continue and break:
// The break statement break the loop and exit the loop but the continue statement break for that particular condition and then continues the execution of loops.
// As you see in the output it only prints the index upto 4 and when it is 5 it breaks from the loop.
// for (let index = 1; index <=10; index++) {
//   // using break statement:
//   if (index==5) {
//     break;
//   }
//   console.log(index);
// }

// The continue statement jumps the loop from 5 and then executes the whole index and skips the number 5.
for (let index = 1; index <= 10; index++) {
  // using continue statement:
  if (index == 5) {
    continue;
  }
  console.log(index);
}
