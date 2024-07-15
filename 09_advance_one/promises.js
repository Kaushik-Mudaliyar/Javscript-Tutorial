// In today's world everyone uses the fetch keyword to access api's.
// We should learn fetch in next video.
// fetch(`https://something.com`).then().catch().finally()

// There are two things we can do using promises. First we can create promise or we can consume promise.
// So,Let's create promise:

const promiseOne = new Promise(function (resolve, reject) {
  // Do Async task
  // DB calls, Cryptography etc..
  // Now onwards we are creating setTimeout function which will console text.
  setTimeout(() => {
    console.log(`Async Task is Completed`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log(`Promise Consumed`);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async Task 2`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Asyc 2 resolved`);
});

// Here we are passing parameter to the resolve method and accessing in the then block directly.
// We can pass parameters using the resolve also.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Kaushik", email: "k@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// Here we are understanding the concept of reject where the error will be resolved.
// And also understanding the finally which will run either the promise will resolve or rejected.
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "kaushik", password: 123 });
    } else {
      reject(`ERROR:Something went wrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolve or rejected."));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: 123 });
    } else {
      reject(`ERROR:JS went wrong`);
    }
  }, 1000);
});

// Using async await to handle the promise
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// using async await
// async function getAllUsers() {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`E:`, error)
//     }

// }
// getAllUsers()

// using then and catch
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
