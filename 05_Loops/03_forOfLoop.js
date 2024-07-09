// The higher order loops in javascript are for-in loop, for-of loop, for-each loop.
// These loops are used for different purpose in javascript to iterate through arrays and objects.
// It is used to do the iteration easily for arrays and in objects also.

// for of loop:

// const arr = [1, 2, 3, 4, 5];
// for (const iterator of arr) {
//   console.log(iterator);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//   console.log("Each char is " + greet);
// }

// Maps in javascript:
// It consits of unique entries.Map is a object.
// It holds the key value pair.We cannot create duplicate values in maps.
const map = new Map();
map.set(`In`, `India`);
map.set(`USA`, `United States Of America`);
map.set(`FR`, `France`);
// When we print the map we can see that it does not print the india things another time.That is why it is used to print map.
map.set(`In`, `India`);
// console.log(map)

// Now if we want to iterate through this map we can use for of loops:
for (const [key, value] of map) {
  console.log(key, `:-`, value);
}

// Now if we want to iterate through the object using for of loops:
const myobject = {
  game1: "NFS",
  game2: "Spiderman",
};
// We cannot iterate the objects using for of loops as seen below:
// for (const [key,value] of myobject) {
//     console.log(key,`:-`,value);
// }
