// In javascript the getter setter mehtod is available , where we can get and set a property in the class.
// For getter and setter we are using get and set keyword inside the class and define a method:
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}kaushik`;
  }
  set password(value) {
    this._password = value;
  }
}
const kaushik = new User("k@kaushik.ai", "1232");
console.log(kaushik.email);
console.log(kaushik.password);
