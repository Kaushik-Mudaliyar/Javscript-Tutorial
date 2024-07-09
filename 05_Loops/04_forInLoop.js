// For in loops in javascript.
const myobject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// Using the for in loop we can iterate the object.
for (const key in myobject) {
  // if you only need the keys of the object you can console using key:
  // console.log(key);
  // And if you only need the values inside of the key you can console like this:
  // console.log(myobject[key]);
  // This statement prints the whole key and there respective values inside the object.
  // console.log(`${key} shortcut is for ${myobject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  // when we console this loop,it return the index of the value like 0,1,2,3,4
  // console.log(key)
  // if you want to get the values inside the array you can use same as object:
  // console.log(programming[key])
}

const map = new Map();
map.set(`IN`, `India`);
map.set(`USA`, `United States Of America`);
map.set(`FR`, `France`);

// We cannot do iteration in maps using for in loops ,that's why we cannot get anything in the terminal.
// for (const key in map) {
//   console.log(map[key])
//}
