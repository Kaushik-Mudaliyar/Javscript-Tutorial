const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// Here we get the whole thing which was writable,enumerable and configurable and it is such  hardcoded code such that we cannot change.
console.log(descriptor);

// we cannot change Math.PI in javascript
// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)

const chai = {
  name: "Ginger-Chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bni");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== `function`) {
    console.log(`${key}: ${value}`);
  }
}
