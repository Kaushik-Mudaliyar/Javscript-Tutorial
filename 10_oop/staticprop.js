class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  // After using static we can stop the object to access the createId function, In this way static keyword is used.
  static createId() {
    return `123`;
  }
}
const kaushik = new User("Kaushik");
console.log(kaushik.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher1 = new Teacher("kaushik", "k@google.com");
// Here after inheritance of the User Class it cannot have access to the createId() function due to the static keyword
console.log(teacher1.createId());
