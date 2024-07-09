// Map method or function in javascript:

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Let's say we want to add 10 to all the numbers inside the array.Lets use the map function to return the result.
// const newNums=myNumbers.map((num) => num + 10);     //you can do this using for each also..

// Chaining in javascript:It means to use multiple methods continuosly in a given variable..You can see it below how to do it:
const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNums);