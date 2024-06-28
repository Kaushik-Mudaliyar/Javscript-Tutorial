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
// console.log(hereos[0])
// console.log(hereos[1])
// console.log(hereos[2])

let obj=
{
    name :"kaushik",
    age : 20,
}
console.log(obj.name,obj.age);

const myfunction = function() {
    console.log("Hello world");
}
// myfunction();

// console.log(typeof obj)
// console.log(typeof myfunction)
// console.log(typeof userEmail)
// console.log(typeof id)


// ++++++++++++++++++++++++++++++++++++++++++++++

// There are types through which a javascript file can be stored in memeory:-
// Stack(Primitive types) , Heap(Non-primitive types)
//Here it does not reference to the other variables,it just copy the value in the stack.
let myname="KaushikM"
let anothername=myname
anothername="ManishM"
// console.log(myname)
// console.log(anothername)

//Here the user1 object is created and we are creating user2 such that it takes value from user1,such that it takes the reference from the same memory where the user1's values are stored so if you change the email or user_name of user2 you are changing the actual value of the object. By this way the actual value could be passed.
let user1={
    email:"user@gmail.com",
    user_name:"Kaushik"
}
let user2=user1
//After changing the value in user2 it will automatically changed the value in user1
user2.user_name="Manish"
console.log(user2.email)
console.log(user1.user_name)
console.log(user2.user_name)
