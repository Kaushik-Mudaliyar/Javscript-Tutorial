// When in javascript there was no concept of class keyword or classes so to get and set everyone is using functions in javascript.Let's take an example :
// To get and set the value inside the function we need to use the Object's defineProperty such that we can  define it for different purpose.

// By these way we can get or set a method using functions when there was not any concept of classes in javascript
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}abc`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user1 = new User("k@gmail.com", 232);
console.log(user1.email);
console.log(user1.password);
