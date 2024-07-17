//  ES6
// Class in Javascript
// class User {
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Kaushik","k@google.com",123)
// console.log(user1.changeUsername())

// behind the scenes of how the class will be working

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
User.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

const user2 = new User("Coder", "c@google.com", 1124);
console.log(user2.changeUsername());
console.log(user2.encryptpassword());
