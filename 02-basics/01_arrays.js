// Arrays in Javascript

const Myarr = [0, 1, 2, 3, 4, 5];
// console.log(Myarr);
// console.log(Myarr[0]);

//We can also define the array with another method using new keyword
const Myarr2 = new Array(1, 2, 4, 5, 6);
// console.log(Myarr2);

//Array Methods
//Push Method:
Myarr.push(6);
// console.log(Myarr);
Myarr.push(7);
// console.log(Myarr);

// Pop Method:
Myarr.pop();
// console.log(Myarr);

// Unshift Method:
Myarr.unshift(8);
// console.log(Myarr)

// Shift Method:
Myarr.shift(8);
// console.log(Myarr)

// console.log(Myarr.includes(9));
// console.log(Myarr.indexOf(9));

const newArray = Myarr.join();
// console.log(typeof Myarr);
// console.log(typeof newArray);

// slice and splice

//difference between slice and splice is slice does not includes the upper range and splice removed the element from the original array in which we have Myarr. So the slice gets a particular range of values from the array and dont change the array. But the splice get the range of values and also it was removed from the original array.
console.log("A ", Myarr);

const myn1 = Myarr.slice(1, 3);
console.log("B", Myarr);
console.log(myn1);

const myn2 = Myarr.splice(1, 3);
console.log("C", Myarr);
console.log(myn2);
