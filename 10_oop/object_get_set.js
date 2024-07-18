// We can also set and get value using object as we know function is also a object,that means Object can also have a set and get property to set and get value..
const User = {
  _email: "k@gmail.com",
  _password: 123,

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return `${this._password}abc`;
  },
  set password(value) {
    this._password = value;
  },
};
const user1 = Object.create(User);
console.log(user1.email);
console.log(user1.password);
