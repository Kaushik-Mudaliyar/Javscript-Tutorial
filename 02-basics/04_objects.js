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

