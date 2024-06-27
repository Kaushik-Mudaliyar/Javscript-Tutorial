// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

//In javascript it converts differently for equality check like == and comparisons like > < >= <= it will convert the null item to 0 and then checks the condition . That's why it is true.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//If you want to check the items strictly , it means to check the whole condition but it also checks the datatypes of both the comparision prperties.
//It will throw false as the datatypes are not same.
console.log("3"===3);

