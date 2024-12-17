//! Creating Elements

//* Under the ul, Create a form input with `addItemInput` with it a button with `addItemButton`. Create variables for each of them 
const addItemInput = document.querySelector(`input.addItemInput`)
const addItemButton = document.querySelector(`button.addItemButton`)



//* Add an event listener to the `addItemButton` that while clicked, log the values inside `addItemInput` as a `li` tag 
// addItemButton.addEventListener('click', () => {
//   let li = document.createElement(`li`)

//   li.textContent = addItemInput.value
//   console.log(li)
// })

//* Now create a `ul` variable that selects the ul using `getElementsByTagName` inside the event listener function. Append the `li` tag inside it 
// addItemButton.addEventListener('click', () => {
//   const ul = document.getElementsByTagName(`ul`)[0] 
//! (`ul`) returns a collection of ul. But we only need the 1st one. So (`ul`)[0] 
//   let li = document.createElement(`li`)

//   console.log(ul)
//   li.textContent = addItemInput.value
//   ul.appendChild(li)
// })

//* Now create a `ul` variable that selects the ul using `querySelector` inside the event listener function. Append the `li` tag inside it 
// addItemButton.addEventListener('click', () => {
//   const ul = document.querySelector(`ul`)
//   let li = document.createElement(`li`)

//   console.log(ul)
// })

//* Now append the `li` tag inside the ul 
// addItemButton.addEventListener('click', () => {
//   const ul = document.getElementsByTagName(`ul`)[0]
//   let li = document.createElement(`li`)

//   li.textContent = addItemInput.value
//   ul.appendChild(li)
// })

//* Reset the input box. 
// addItemButton.addEventListener('click', () => {
//   const ul = document.getElementsByTagName(`ul`)[0]
//   let li = document.createElement(`li`)

//   li.textContent = addItemInput.value
//   ul.appendChild(li)

//   addItemInput.value = ``
// })



/*

// Insert a string in the HTMl using write method   3️⃣
// document.write('o_O')

// document.getElementById(`app-id`).id = `new-id`;
// document.getElementById(`new-id`).title = `New List`;
// document.getElementById(`new-id`).innerText = `New List`;
// console.log(document.getElementById(`new-id`).title);

// const list = document.querySelector(`ul`);
// console.log(list);

// const firstItem = list.querySelector(`li`);
// firstItem.style.color = `blue`;

// const thirdItem = list.querySelector(`li:nth-child(3)`);
// thirdItem.style.color = `white`;

// const listArray = Array.from(list);

// listArray.forEach((item) => {
  // item.style.background = `black`;
//   console.log(item);
// });

// let paragraph = document.querySelector('p');

// let paragraphs = document.querySelectorAll(`p`);

// let paragraphArray = Array.from(paragraph);

// paragraphs.forEach((item) => {
//   console.log(item.innerText);
  // item.style.background = `red`;
//   item.innerText += ` **`;
// });

// Imagine you have same attribute in a divnode. Put a div tag node element inside a variable. Select all nodes with same attribute using querySelector. Using the variable change the HTML using innerHTML       4️⃣6️⃣
// const nextParagraph = document.querySelector(`div.error`)
// nextParagraph.innerText = `🔥🔥🔥`

// document.querySelector('#intro-text')

// document.querySelector(`input[type='text']`)

// document.querySelector(`li:nth-child(2)`)

// const secondItem = document.querySelector(`li:nth-child(2)`).innerText

// secondItem.innerText = `🍎`

// In console print all the p tags using querySelectorAll as a Nodelist 4️⃣
// const all_P_Tags = document.querySelectorAll(`p`)
// console.log(all_P_Tags)

//  Get the p tags with attribute using querySelectorAll as a Nodelist. Using forEach change all of them  4️⃣
// const paragraphWithAttribute = document.querySelectorAll(`.error`)

// paragraphWithAttribute.forEach(item => {
//   item.innerText = `🌱🌱🌱`
// })

//TODO: Using `document.createElement()`

//TODO: Setting attributes with `setAttribute()`
// document.getElementById(`new-id`).setAttribute('class', 'o_O');

// const link = document.querySelector(`a`);

// console.log(link);
// console.log(link.getAttribute(`href`));

// link.setAttribute(`href`, `http://google.com`);

// console.log(link);
// console.log(link.getAttribute(`href`));

// link.innerText = `o_O`;

// const message = document.querySelector(`p.errorAlt`);

// console.log(message.getAttribute(`class`));
// message.setAttribute(`class`, `alt`);
// message.setAttribute(`style`, `color: white`);


// const headline = document.querySelector(`h1`);

// headline.setAttribute(`style`, `margin: 3rem`);

// console.log(headline.style);
// console.log(headline.style.color);

// headline.style.margin = `.5rem`;
// headline.style.padding = `3rem`;
// headline.style.border = `.5rem solid black`;
// headline.style.textAlign = `center`;

// headline.style.padding = ``;


// result.setAttribute(`class`, `error`);


//TODO: Inserting elements using `appendChild()`, `insertBefore()`, and `replaceChild()`

*/
