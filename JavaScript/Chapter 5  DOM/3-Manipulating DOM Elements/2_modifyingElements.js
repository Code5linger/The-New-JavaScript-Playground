//! Modifying Elements

//TODO Get.Change Content

//* Inside html create 2 div, 1 with class `content`. In 1st div add 3 `p` last with a `error` class. In last div add a another `p`

//* Declare a variable the selects a `p` tag
const para = document.querySelector(`.domTest p`)

//* Use the variable to change the inner Text
// para.innerText = `o_O`

//* Wow, thats a bit invasive. How about keep the previous text and add new text to it 
para.innerText += `😱`

//* Declare a variable the selects all `p` tag
const paraAll = document.querySelectorAll(`p`)

//* Using a callback function log all inner text of `p` tag
// paraAll.forEach(item=> {
//   console.log(item.innerText)
// })

//* Now add something new to each `p`
// paraAll.forEach(item=> {
//   item.innerText += `🎉`
// })

//* Select the div with class `content` and change the `p` tag with `h1`
const content = document.querySelector(`.content`)

// content.innerHTML = `<h1><mark>Replaced</mark></h1>`

//* Create an array with 3 items. Add each of them as independent `p` tag inside the content div

const array = ['🅰️', '🅱️', '❌']

// array.forEach(item => [
//   content.innerHTML += `<p>${item} was added</p>`
// ])

//* Add a link to html & a variable that selects it. Using it print the link address. Use getAttribute
const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

//* Now change the link address using setAttribute
link.setAttribute(`href`, `https://www.torrentbd.net/`)

//* Change the link text 
link.innerText = `TorrentBD`

//* Declare a variable that selects the p with `error` class. Log its class using getAttribute
const msg = document.querySelector(`p.error`)

console.log(msg.getAttribute(`class`))

//* Change the class from `error` to `success`
msg.setAttribute(`class`, `success`)

//* Now just change the text color style from white to red
msg.setAttribute(`style`, `color: red`) 

//* Turn the h1 into orange with inline css. Declare a variable the selects it
const title = document.querySelector(`h1`)

//* Using the variable add background color to it.
// console.log(title.setAttribute(`style`, `background: purple`))

//* As you can see, one style overwrite's another. You can fix it with title.style. Add both style to title

title.style.background = `purple`
title.style.color = `white`
title.style.padding = `1rem`

//* Now chage the font size of title & center it
title.style.fontSize = `3rem` 
title.style.textAlign = `center`

//* Ok enough fun, now remove the font size
title.style.fontSize = ``

//* Print all the classes of the variable 
console.log(msg.classList)

//* Now add a new class to the variable using add()
msg.classList.add(`royal`)

//* Remove previous classes from the variable using remove()
msg.classList.remove(`success`)

//TODO Challenge
//* Create 10 p tags with demo text. Some must inclue `error` text some `success` some nither & some both. Those with `success` in them add `success` class and `error` with erro. For those with both add `royal`
const challenge = document.querySelectorAll(`.challenge p `)


// challenge.forEach(item => {
//   console.log(item.textContent)
//   if (item.textContent.includes(`success`)) {
//     if (item.textContent.includes(`error`)) {
//       item.classList.add(`royal`)
//     } else {
//       item.classList.add(`success`)
//     }
//   } else if (item.textContent.includes(`error`)) {
//       item.classList.add(`error`)
//   } 
// })

//* 🪝 Use span to hide some `succes` text from the p tags. Dose the code still wokrs? Recreate the challenge with `innerText` if not. See the difference 
challenge.forEach(item => {
  console.log(item.innerText)
  if (item.innerText.includes(`success`)) {
    if (item.innerText.includes(`error`)) {
      item.classList.add(`royal`)
    } else {
      item.classList.add(`success`)
    }
  } else if (item.innerText.includes(`error`)) {
      item.classList.add(`error`)
  } 
})

//* Give a HTML tag a class using toggle 
console.log(content)
content.classList.toggle(`success`)

//* Now take it back, again with toggle 
content.classList.toggle(`success`)

//* Add 2 image to the HTML and give them classes. Declare variables the select those images 
const pixOne = document.querySelector(`.imageOne`)
const pixTwo = document.querySelector(`.imageTwo`)

//* Using those variables, give each of them css classes (ex: Error, Success)

pixOne.classList.add(`success`)
pixTwo.classList.add(`error`)

//* Now Remove the error class and add royal class
pixTwo.classList.remove(`error`)
pixTwo.classList.add(`royal`)

//* Add an event listener to the 2nd image that while clickd it rounded the background. & return to original on another click

// pixTwo.addEventListener("click", () => {
//   pixTwo.classList.toggle(`rounded`)
// })

//* Thats too clanky. Add animation

//* Rotale the 1st image 1 turn while cliked. & return to original on another click

// pixOne.addEventListener(`click`, () => {
//   pixOne.classList.toggle(`rounded`)
//   pixOne.classList.toggle(`rotate`)
// })

//* Log the class list of each image on click
pixOne.addEventListener(`click`, () => {
  pixOne.classList.toggle(`rounded`)
  pixOne.classList.toggle(`rotate`)
  console.log(pixOne.classList)
})

pixTwo.addEventListener("click", () => {
  pixTwo.classList.toggle(`rounded`)
  pixTwo.classList.toggle(`royal`)
  pixTwo.classList.add(`error`)

  console.log(pixTwo.classList)
})

//* Change/Add alt text to both image, than log them
pixOne.alt = `Image 1 Alt Text`
pixTwo.alt = `Image 2 Alt Text`

console.log(pixOne.alt, pixTwo.alt)

//* Now log alt text to both image using getAttribute

console.log(pixOne.getAttribute(`alt`), pixTwo.getAttribute(`alt`))

//* Now the alt text of both image using setAttribute
console.log(pixOne.setAttribute(`alt`, `🖼️`), pixTwo.setAttribute(`alt`, `🖼️`))

//* Now Create a custom attribute with value using setAttribute

pixOne.setAttribute(`customAttr`, `💥`)
pixTwo.setAttribute(`customAttr`, `💣`)

//* Create custom attribute using `dataset` way
//* Add `data-xxx` to the img in HTML with value

console.log(pixOne.dataset, pixTwo.dataset)

//* Create another custom attribute using `dataset` way, than log it

console.log(pixOne.dataset, pixTwo.dataset)

//* Add an event listener to the image that useses the dataset

pixOne.addEventListener(`click`, () => {
  console.log(`${pixOne.dataset.name} | ${pixOne.dataset.text}`)
})

//* Log the natural with of the image

console.log(pixOne.naturalWidth)

//* Add an event listener to the image that wait till the webpage load than print the natural width

window.addEventListener('load', () => console.log(pixTwo.naturalWidth))




//** - Inside the HTML create and/or the h1 tag with `myHeading` id. Declare a variable that selects it using html tag (ex: h1, p. No id or class)
const myHeading = document.querySelector(`h1`)

//** - Log the text using text content
console.log(myHeading.textContent)

//** - Now change the text using text content 
myHeading.textContent = `This is a new heading 🗞️`

//* Now change the text using innerText

myHeading.innerText = `This is even newer heading 📰`

//* textContent & innerText both replace the text. What is the difference. 
myHeading.innerHTML = `This is <span style="display: none;">even newer </span>heading 📰`
console.log(myHeading.innerText)
console.log(myHeading.textContent)

//* Add an an h2 in HTML and a variable that selects it. Using it add an emoji to it 
const domTest = document.querySelector(`.domTest h2`)

console.log(domTest.textContent += `🍕`)

//* Using `insertAdjacentText` method add another emoji next to it. || After check the HTML code in the browser to see where it is
domTest.insertAdjacentText('beforeend', '🍕')

//* Using `insertAdjacentText` method add another emoji before the text. || After check the HTML code in the browser to see where it is
domTest.insertAdjacentText('afterbegin', '🍕 ')




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

