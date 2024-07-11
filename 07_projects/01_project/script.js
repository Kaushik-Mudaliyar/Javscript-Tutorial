// Here we need to write a script such that we can change the color according to the boxes color.
const buttons = document.querySelectorAll(`.button`);
const body = document.querySelector(`body`);
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Using Switch case:
    // let backgroundColor = e.target.id;
    // switch (backgroundColor) {
    //   case 'grey':
    //     body.style.backgroundColor = 'grey';
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = 'white';
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = 'blue';
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = 'yellow';
    //     break;
    // }

    // Using if statement:
    if (e.target.id === `grey`) {
      body.style.backgroundColor = `grey`;
    }
    if (e.target.id === `white`) {
      body.style.backgroundColor = `white`;
    }
    if (e.target.id === `blue`) {
      body.style.backgroundColor = `blue`;
    }
    if (e.target.id === `yellow`) {
      body.style.backgroundColor = `yellow`;
    }
  });
});
