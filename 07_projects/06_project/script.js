// Generate a random color

const randomColor = function () {
  const hex = `0123456789ABCDEF`;
  let color = `#`;
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
// console.log(Math.floor(Math.random() * 16));
let Interval_id;
document.querySelector(`#start`).addEventListener(`click`, () => {
  if (!Interval_id) {
    Interval_id = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 2000);
  }
});
document.querySelector(`#stop`).addEventListener(`click`, () => {
  clearInterval(Interval_id);
  Interval_id = null;
});
