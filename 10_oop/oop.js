// In javascript the objects are object literal like in C++ or java there is mainly class than over it object was created but in javascript the object literal is the main part and using it we can define objects and get access to the values inside it.
const user = {
  username: "Kaushik",
  LoginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    // this keyword or you can say this function is used to get the current context of the object or function.
    // console.log(`Username: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

// new keyword is also known as constructor function. It is used to make a new context of the function.
// const promiseOne=new Promise()
// const date = new Date()

function User(username, LoginCount, isLoggedIn) {
  this.username = username;
  this.LoginCount = LoginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}
// The constructor function gives the new instance because in below example we can see that we are defining userOne and userTwo such that when we print userOne we get the values assigned in userTwo . That's why we need to use new keyword because it creates new instance of it and don't overwrites it .
// const userOne =  User("Kaushik",3,true)
// const userTwo =  User("Chai aur code",1,false)
// console.log(userOne);

// using new keyword or constructor function
const userOne = new User("Kaushik", 3, true);
const userTwo = new User("Chai aur code", 1, false);
console.log(userOne);
console.log(userTwo);

// In background what happens in new keyword:
// step 1 : whenever you write a new keyword it creates an empty object.
// step 2 : Constructor function will be called for new keyword.
// step 3 : this keyword's argument will be injected into that empty object.
// step 4 : We will get the object which will have all the values.
