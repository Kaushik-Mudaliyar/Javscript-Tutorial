let myname = "Kaushik    ";
let channelname = "codersforlife   ";
// console.log(myname.trim().length);
// console.log(channelname.trim().length);

// Here we need to create a new method using prototype, which will trim the spaces and then give the length.
// console.log(myname.truelength)

const myhero = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getspidermanPower: function () {
    console.log(`Spiderman Power is ${this.spiderman}`);
  },
};
// Here we are injecting kaushik named function to the object and when we accessed it prints the value inside it .
Object.prototype.kaushik = function () {
  console.log("Hello Kaushik");
};

Array.prototype.heyKaushik = function () {
  console.log("Kaushik says Hello");
};

// calling the kaushik named function
// heroPower.kaushik()
// heroPower.heyKaushik()
// myhero.kaushik()
// myhero.heyKaushik()

// inheritance
const user = {
  name: "kaushik",
  email: "kaushik@google.com",
};
const Teacher = {
  makevideo: true,
};
const TeachingSupport = {
  isAvailable: true,
};
const TaSupport = {
  makeAssignment: "Js Assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherusername = "Chaiaurcode";

String.prototype.truelength = function () {
  console.log(`${this}`);

  console.log(`True length is : ${this.trim().length}`);
};
anotherusername.truelength();
