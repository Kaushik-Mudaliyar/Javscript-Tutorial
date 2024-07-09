// The reduce method gives the total of the given array using the accumulator,current value and initial value.
const mynums = [1, 2, 3];
const total = mynums.reduce((acc, currval) => {
  console.log(`The accumulator is ${acc} and the Current value is ${currval}`);
  return acc + currval;
}, 0);
// console.log(total)

// It can be used in shopping cart where we need to calculate the whole cart then we can use reduce such that it will calculate itself.
const shoppingCart = [
  {
    itemName: "js-course",
    price: 999,
  },
  {
    itemName: "py-course",
    price: 1999,
  },
  {
    itemName: "mobile-dev-course",
    price: 2999,
  },
  {
    itemName: "datascience-course",
    price: 12999,
  },
];
const prictToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(prictToPay);
