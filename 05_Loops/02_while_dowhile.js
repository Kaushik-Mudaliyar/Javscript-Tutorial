// As we see the for loop there is also while and do while in javascript
// You see most people use for loop in the program as it was very short and easy to use.
// While loop takes a condition and the loop runs until the condition is true, if it is false then while loops stops running.
// Let's take an example:
// let number=1;
// while (number<=10) {
//     console.log(number);
//     // It is the difference between the for and while loops you need to increment or decrement by yourself otherwise the loop will not end and becomes an infinte loop.
//     number++;
// }

// Do while loop is same as while loop but there is a twist as in do while loop the condition is checked after running the entire block of code one time and then checks whether true or false..
// Let's take an example:
// let num=1;
// do {
//     console.log(num);
//     num++;
// } while (num<=10);

// Above was the basic example but here is the main thing do while can do when i make the num=11 then it console the number and then checks the condition.
let num = 11;
do {
  console.log(num);
  num++;
} while (num <= 10);
