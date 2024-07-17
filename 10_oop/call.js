// As we know that there is a call stack where the whole program's execution is processed one by one. Where first there is a global execution context and then above it there are many function which we are calling are stacked one by one.
// function hello()
// {
// callme()
// }
// This function is stacked at the top of the call stack and for this function the outer layer is the hello function. So here the this keyword of callme() refers to the global execution context.
// but there is a problem. In browser, the window is the global execution context but in node environment there is a empty object .

// Let's understand call method below with an example:

function setUserName(username) {
  // complex DB calls
  this.username = username;
  // But we got this called in the console , it means this console runs but it does not pass the parameters due to the exection context . Here after the print statement the work of the function ended . so it was poped out of the call stack . That's why the createUser does not get the username as it do not have any execution context.
  console.log("called");
}
function createUser(username, email, password) {
  // we dont get the username in the console. Actually it was not called technically,so we need to call it explicitly.
  // setUserName(username)

  // for this we are using the call method explicitly, here we are passing this so that it will pass the value to the createUser's this not in the setUserName's this.By this we get the username
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

// Conclusion : The call method gives the current execution of the function to another function to get the needed values insdie it.

const user1 = new createUser("kaushik", "k@google.com", `1213`);
console.log(user1);
