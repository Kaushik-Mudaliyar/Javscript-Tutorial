// Datatypes are distinguish as how the data will be stored in the database and can access the data from the database.

// Javscript is a dynamically typed language
// There are two types of datatypes:-

// 1. Primitive
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt 
const score=100
const ScoreValue=100.3

const isLoggedIn = false
const OutsideTemp= null
//It will be undefined
let userEmail;

const id=Symbol(`123`)
const anotherid=Symbol(`123`)
const Outsidetemp=null
console.log(typeof Outsidetemp)
console.log(id===anotherid)

// 2.Reference Type(Non-primitive)
//3 types: Arrays,Objects,functions

const hereos=["IronMan","CaptainAmerica","Thor"]
console.log(hereos[0])
console.log(hereos[1])
console.log(hereos[2])

let obj=
{
    name :"kaushik",
    age : 20,
}
console.log(obj.name,obj.age);

const myfunction = function() {
    console.log("Hello world");
}
myfunction();

console.log(typeof obj)
console.log(typeof myfunction)
console.log(typeof userEmail)
console.log(typeof id)





