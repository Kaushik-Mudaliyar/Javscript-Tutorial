// for each is a higher order function.
// const coding = ["js","cpp","java","ruby","python"];

// Basic for each syntax using callback function
// coding.forEach( function (item) {
//     return console.log(item)
// })

// We can also use the arrow function to make a callback function
// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// In for each function there is not only one parameter but we have also parameter like the index which will give the index of the array and the arr which will give the whole array.
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// This example was of to access the values of objects which was inside the array mycoding.
// By this we can learn in future that we are getting values in array of objects so if you need to access those objects you need to use the foreach loop in these way:
const mycoding =[
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.languageFileName)
})
