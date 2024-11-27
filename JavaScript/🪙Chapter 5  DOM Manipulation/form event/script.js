const form = document.querySelector(`.signup-form`);
const feedback = document.querySelector(`.feedback`);
// const username = document.querySelector(`#username`);

// form.addEventListener(`submit`, (e) => {
//   e.preventDefault();
//   //   console.log(username.value);
//   console.log(form.username.value);
// });

// const username = `sakib`;
// const pattern = /^[a-z]{3,}$/;

// let result = pattern.test(username);

// if (result) {
//   console.log(`Regex test Passed`);
// } else {
//   console.log(`Regex test Failed`);
// }

// let output = username.search(pattern);
// console.log(output);

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //Feedback
    feedback.textContent = `Username is valid`;
  } else {
    //   Feedback help info
    feedback.textContent = `Invalid`;
  }
});

// live feedback
form.username.addEventListener(`keyup`, (e) => {
  //   console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute(`class`, `success`);
  } else {
    form.username.setAttribute(`class`, `error`);
  }
});
