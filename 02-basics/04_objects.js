//Using singleton method to create an abject,it will return a empty object..
// const tinderUser = new Object()
// console.log(tinderUser)

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Kaushik"
tinderUser.isLoggedIn=true

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kaushik",
            lastname:"Mudaliyar"
        }
    }
}

// console.log(regularUser.fullname?.userfullname);

// Here we are taking two objects such that we need to concat the values of both obj1 and obj2..

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}
// const obj3={obj1,obj2}
// So here inside the obj3 there is obj1 whole object and obj2 whole object but we want to enter only the values inside the two objects..
// console.log(obj3);

//Here if you want to concat two object such obj1 and obj2 we can use the assign method to concat the sources into a single object..
// const obj4=Object.assign({},obj1,obj2,obj3);

//this was the most used syntax to concat the objects using the spread method here using ... triple dots we can assign a objects value to other object..
const obj4={...obj1,...obj2}
// console.log(obj4);

// Array of objects :-
// Here we are creating an array consists of objects and learning how to get the value of the array of object..
const users=[
    {

    },
    {

    },
    {
        userid:1,
        email:"k@google.com"
    }
]

// console.log(users[2].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// It is used to check whether the property is defind inside the object or not..
// console.log(tinderUser.hasOwnProperty(`isLoggedI`));

// HEre we are making an object which have keys and values 
const course={
    name:"Kaushik",
    price:"999",
    courseInstructor:"Hitesh"
}
// So if you need to access the objects value you are using . operation to console the value like this:
console.log(course.courseInstructor)

// If you want to write a clean code you can write in this way also:
// const {courseInstructor}=course;
// so here after using this we can simply write courseInstructor to console the name of the courseInstructor..
// console.log(courseInstructor);

// if you want that courseInstructor was a long name so you can give a new name to this syntax:
const {courseInstructor:Instructor}=course;
console.log(Instructor);