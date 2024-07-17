// Inheritance in Javascript
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // Super keyword is a method used to get access to the variable created in the parent class or class which we used after extends. It will do the same work which the call was doing. It will automatically sent our this to get the username.
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const teacher1 = new Teacher("Kaushik", "k@google.com", 1323);
teacher1.addCourse();

const user1 = new User("Coder");
user1.logMe();
