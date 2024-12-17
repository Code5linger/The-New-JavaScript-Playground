//! Modifying Elements

//TODO Get.Change Content

//** - Inside the HTML create and/or the h1 tag with `myHeading` id. Declare a variable that selects it using html tag (ex: h1, p. No id or class)
const myHeading = document.querySelector(`h1`)
console.log(myHeading)

//** - Log the text using text content
console.log(myHeading.textContent)

//** - Now change the text using text content 
myHeading.textContent = `This is a new heading 🗞️`

//TODO Creating Elements - querySelector

//** - Inside the HTML create and/or the `input` tag with `description` class. Declare a variable that selects it using html tag (ex: h1, p. No id or class)
// const input = document.querySelector(`input`)
const input = document.querySelector(`input.description`) //! After Error 

//T**- Inside the HTML create and/or the `p` tag with `description` class. Declare a variable that selects it using html tag. There are more p tag. SO use a combo class
const p = document.querySelector(`p.description`)

//** - Inside the HTML create and/or the `button` tag with `description` class. Declare a variable that selects it using html tag (ex: h1, p. No id or class)
// const button = document.querySelector(`button`)
const button = document.querySelector(`button.description`) //! After Error 

//** - Add an event listener to the button. While clicked, the button would change the p tag using text content with the value inserted into the `input`
button.addEventListener('click', () => {
  p.textContent = input.value + ':'
})

//** - Add an event listener to the button. While clicked, the button would change the p tag using innerHTML with the value inserted into the `input` as HTML tag (ex: h1)
// button.addEventListener('click', () => {
//   p.innerHTML = `<h1>${input.value}</h1>`
// })

//** - Inside the HTML create a `ul` with 4 `li`. Declare a variable that selects the `ul` 
const ul = document.querySelector(`ul`)

//** - Using the variable, replace 4 `li` with 1 `li` 
// ul.innerHTML = `<li>💥</li>`

//TODO Modifying Elements - getElementById

//TODO Modifying Elements - Form

//* Log the input type of the form 
console.log(input.type)

//* Log the class name of the input
console.log(input.className)

//* Modify the form input into a check box
// input.type = 'checkbox'

//* Add title to `p` element
p.title = '📃' 



// document.links[0].href = `being.com`
// document.links[0].id = `search-engine-alt`
// output = document.links[0].href = 'facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList = 'google-classlist';

// output.forEach((out) => {
//   console.log(out);
// });

// document.forms[0].id = 'new-id';

// const titleAlt = document.getElementById(`new-id`);
// console.log(titleAlt);
// console.log(titleAlt.textContent);
// titleAlt.textContent = 'O_O';
// titleAlt.innerText = `Hello Again!`;
// titleAlt.innerHTML = `<strong>Sup!</strong>`;

//TODO Modifying Elements - Change Styles

//* Change the text color of p variable 
p.style.color = `black`

//* Change the background color of p variable 
p.style.background = `gray`

//* Change the padding of p variable 
p.style.padding = `1rem .5rem`

//* Change the border of p variable 
p.style.border = `.25rem solid purple`

//* Change the border radius of p variable 
p.style.borderRadius = `.25rem`

//* Create a button with id `toggleList`. Declare a variable that selects it. 
const toggleBtn = document.querySelector(`#toggleBtn`)

//* Put every element with `description` class inside a same div. Declare a variable that selects it.
const list = document.querySelector(`.toggleList`)

//* Add an event listener to the button that while clicked, hides the `list` 
// toggleBtn.addEventListener('click', () => {
//   list.style.display = `none`
// })

//* Add an event listener to the button that while clicked, hides the `list`. and show it when clicked again .(⚙️ Change Button Text )
toggleBtn.addEventListener('click', () => {
  if (list.style.display == `none`) {
    list.style.display = `block`
    toggleBtn.textContent = `➖`
  } else {
    list.style.display = `none`
    toggleBtn.textContent = `➕`
  }
})

//TODO : Changing text content: `textContent`, `innerText`, and `innerHTML`

// document.body.innerHTML = '<h1>Hello World!</h1>';
// const secondItemAlt = document.querySelector(`li:nth-child(2)`);
// secondItemAlt.innerText = 'Apple Juice';
// secondItemAlt.style.color = `Green`;

// paragraph.innerText = `Ninjas are awesome!`;
// const contentAlt = document.querySelector(`.content`);


// console.log(contentAlt.innerHTML);

// contentAlt.innerHTML = `<h1>THIS WHERE WE HOLD THEM</h1>`;
// contentAlt.innerHTML += `<h1>THIS WHERE WE HOLD THEM</h1>`;
// contentAlt.style.background = `#702f18`;


// const people = ['mario', 'luigi', `yoshi`];

// people.forEach((item) => {
//   console.log((contentAlt.innerHTML += `<p>${item} was here!</p>`));
// });

// const result = document.querySelector(`p.errorAlt`);

// Change a p tag's text inside using querySelector method     1️⃣3️⃣
// document.querySelector(`p`).innerText = `:'(`

// Put a p tag node element inside a variable. Select a node with attribute using querySelector. Using the variable change the HTML using innerHTML       4️⃣
// const firstParagraph = document.querySelector(`.error`)
// firstParagraph.innerText = `💥💥💥`

// parent.childNodes[3].innerText = 'OnE';
// parent.childNodes[5].style.color = 'red';

//TODO : Modifying styles: `style` property and `classList` methods (`add()`, `remove()`, `toggle()`)

// result.classList.add(`error`);
// result.classList.remove(`error`);

// result.classList.add(`success`);
// result.classList.remove(`success`);

// const challengeField = document.querySelectorAll(`.challange p`);

// console.log(challengeField);

// challengeField.forEach((item) => {
//   if (item.innerText.includes('error')) {
//     item.classList.add(`error`, `output`);
//   } else if (item.innerText.includes(`success`)) {
//     item.classList.add(`success`, `output`);
//   } else {
//     item.classList.add(`output`);
//   }
// });

// const titleAlt = document.querySelector(`#title`);

// titleAlt.classList.toggle(`O_o`);
// titleAlt.classList.toggle(`O_o`);
