// More about foreach loop let's take an example and understand it :

// const coding = ["js","cpp","java","ruby","python"];
// // It will consoles all the values inside the array.But suppose you want to store it into a variable.Is a foreach loop return the value inside the array.Let's see below:
// coding.forEach((item)=>{
//     // console.log(item);
//     // In js the foreach loop can't return any values of the array.So it will give the result undefined in the terminal.
//     return item;
// })

// But if you want to store the values inside another variable. You can do these to make it possible:
// const mynumber=[1,2,3,4,5,6,7,8,9,10]
// const myNewNumber=[]
// mynumber.forEach( (num) => {
//     if (num>4) {
//         myNewNumber.push(num);
//     }
// })
// console.log(myNewNumber);
// As you see it was a way more lengthy than the filter method it was just two lines of code to store the result in the another variable.
// Now if you want to store the values of the arrays inside an array,you need to provide a particular condiition such that it returns the values using the filter method or we can say it Returns the elements of an array that meet the condition specified in a callback function. Let's take an example below:
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums=nums.filter((num) => num > 4);
// console.log(newNums)

// Example for filter method:
//We can do filters for the below object named as books.We can learn all things such that in future if we want to fetch any request from the database it is the same as the given array of objects such that we need to fetch the result we want.
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
