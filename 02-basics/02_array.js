const marvel_heroes = ["Thor", "IronMan", "CaptainAmerica"];
const dc_heroes = ["Batman", "Superman", "Flash"];

console.log(marvel_heroes);

//Here if we use push operation then the dc_heroes array will be pushed inside the array not the value,the whole array is pushed..
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

//Same as above if we use concat method then it  pushes the value  inside the array(all_heroes) not in the same array which is marvel_heroes..
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

// Many people uses the spread operations by which the values are only stored in the array and not the whole array inside the array..
const new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Kaushik"));
// It will create a new array using the values inside the parenthesis and the value inside the array is 'K','a','u','s','h','i','k' like this..
console.log(Array.from("Kaushik"));
//It returns the empty set array because it does not convert the values inside the console.log..
console.log(Array.from({ name: "Kaushik" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
// It will make an array with all the score values we defined..
console.log(Array.of(score1, score2, score3));
// It will check whether the array is defined in the code or not..
console.log(Array.isArray(another_array));
