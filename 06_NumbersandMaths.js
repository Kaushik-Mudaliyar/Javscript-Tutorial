//Here simply we are assigning value 400 to mynumber so it automatically make it number datatype..
const mynumber = 400;
console.log(mynumber);

//You can also explicitly define number..
const newnumber = new Number(100);
// console.log(newnumber);
// console.log(newnumber.toString().length)
// console.log(typeof newnumber);
// console.log(newnumber.toFixed(2))

const other_number = 139.556;
console.log(other_number.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString(`en-IN`));

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(44.66));
// console.log(Math.ceil(44.66));
// console.log(Math.floor(44.66));
// console.log(Math.min(3,4,56,34,2,1));
// console.log(Math.max(3,4,56,34,2,1));
//It will give random value between 0 and 1..
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
