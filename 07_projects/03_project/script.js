const clock = document.querySelector(`#clock`);
setInterval(() => {
  let date = new Date();
  // clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
  clock.innerText = `${date.toLocaleTimeString()}`;
}, 1000);
