'use script'

console.log(`3-Manipulating DOM Elements`)

/**
 * !3. **Manipulating DOM Elements**
   - **Creating Elements**
     - Using `document.createElement()`
     - Setting attributes with `setAttribute()`
     - Inserting elements using `appendChild()`, `insertBefore()`, and `replaceChild()`
   - **Modifying Elements**
     - Changing text content: `textContent`, `innerText`, and `innerHTML`
     - Modifying styles: `style` property and `classList` methods (`add()`, `remove()`, `toggle()`)
   - **Removing Elements**
     - Using `remove()` and `parentNode.removeChild()`
 */


document.links[0].href = `being.com`
console.log()

document.links[0].id = `search-engine-alt`
console.log()


// Insert a string in the HTMl using write method   3️⃣
document.write('o_O')

// Insert Image 1️⃣

// In DOM, What is the html tag is called   1️⃣
// root node

// In DOM, What are the title, h1 & p tags are called   1️⃣
//  text node

// document.body.innerHTML = '<h1>Hello World!</h1>';



// output = parent.firstChild;
// output = parent.lastChild = `HeLlO`;

// child.parentNode.style.backgroundColor = `#ccc`;
// child.parentNode.style.padding = `1rem`;

// output = secondItem.nextSibling.style.color = 'red';

// document.forms[0].id = 'new-id';

// output = document.links[0].href = 'facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList = 'google-classlist';

// output.forEach((out) => {
//   console.log(out);
// });

// Set Attributes

// document.getElementById(`app-id`).id = `new-id`;
// document.getElementById(`new-id`).title = `New List`;
// document.getElementById(`new-id`).innerText = `New List`;
// console.log(document.getElementById(`new-id`).title);

// document.getElementById(`new-id`).setAttribute('class', 'o_O');

// const titleAlt = document.getElementById(`new-id`);
// console.log(titleAlt);
// console.log(titleAlt.textContent);
// titleAlt.textContent = 'O_O';
// titleAlt.innerText = `Hello Again!`;
// titleAlt.innerHTML = `<strong>Sup!</strong>`;

// CHange Stype

// titleAlt.style.color = `crimson`;
// titleAlt.style.background = `black`;
// titleAlt.style.padding = `1rem `;
// titleAlt.style.border = `.25rem solid crimson`;
// titleAlt.style.borderRadius = `1rem`;

// const secondItemAlt = document.querySelector(`li:nth-child(2)`);
// secondItemAlt.innerText = 'Apple Juice';
// secondItemAlt.style.color = `Green`;

// const list = document.querySelector(`ul`);
// console.log(list);

// const firstItem = list.querySelector(`li`);
// firstItem.style.color = `blue`;

// const thirdItem = list.querySelector(`li:nth-child(3)`);
// thirdItem.style.color = `white`;

// const listArray = Array.from(list);

// listArray.forEach((item) => {
//   // item.style.background = `black`;
//   console.log(item);
// });

// let paragraph = document.querySelector('p');

// console.log(paragraph.innerText);

// let paragraphs = document.querySelectorAll(`p`);

// console.log(paragraphs);

// // let paragraphArray = Array.from(paragraph);

// // console.log(paragraphArray);

// paragraphs.forEach((item) => {
//   console.log(item.innerText);
//   // item.style.background = `red`;
//   item.innerText += ` **`;
// });

// paragraph.innerText = `Ninjas are awesome!`;
// const contentAlt = document.querySelector(`.content`);

// console.log(contentAlt.innerHTML);

// // contentAlt.innerHTML = `<h1>THIS WHERE WE HOLD THEM</h1>`;
// contentAlt.innerHTML += `<h1>THIS WHERE WE HOLD THEM</h1>`;
// contentAlt.style.background = `#702f18`;


// const people = ['mario', 'luigi', `yoshi`];

// people.forEach((item) => {
//   console.log((contentAlt.innerHTML += `<p>${item} was here!</p>`));
// });

// const link = document.querySelector(`a`);

// console.log(link);
// console.log(link.getAttribute(`href`));

// link.setAttribute(`href`, `http://google.com`);

// console.log(link);
// console.log(link.getAttribute(`href`));

// link.innerText = `o_O`;

const message = document.querySelector(`p.errorAlt`);

// console.log(message.getAttribute(`class`));
// message.setAttribute(`class`, `alt`);
// message.setAttribute(`style`, `color: white`);


const headline = document.querySelector(`h1`);

// headline.setAttribute(`style`, `margin: 3rem`);

console.log(headline.style);
console.log(headline.style.color);

// headline.style.margin = `.5rem`;
// headline.style.padding = `3rem`;
// headline.style.border = `.5rem solid black`;
// headline.style.textAlign = `center`;

// headline.style.padding = ``;

const result = document.querySelector(`p.errorAlt`);

// Change a p tag's text inside using querySelector method     1️⃣3️⃣
document.querySelector(`p`).innerText = `:'(`

// Put a p tag node element inside a variable. Select a node with attribute using querySelector. Using the variable change the HTML using innerHTML       4️⃣
const firstParagraph = document.querySelector(`.error`)
firstParagraph.innerText = `💥💥💥`

// result.setAttribute(`class`, `error`);

console.log(result.classList);

result.classList.add(`error`);
result.classList.remove(`error`);

result.classList.add(`success`);
result.classList.remove(`success`);

const challengeField = document.querySelectorAll(`.challange p`);

// console.log(challengeField);

challengeField.forEach((item) => {
  if (item.innerText.includes('error')) {
    item.classList.add(`error`, `output`);
  } else if (item.innerText.includes(`success`)) {
    item.classList.add(`success`, `output`);
  } else {
    item.classList.add(`output`);
  }
});

const titleAlt = document.querySelector(`#title`);

titleAlt.classList.toggle(`O_o`);
titleAlt.classList.toggle(`O_o`);

console.log(titleAlt);

console.log(`009 Parents, Children & Siblings`);

const article = document.querySelector(`article`);

// console.log(article.children);

// console.log(Array.from(article.children));

// console.log(article.children);

// Array.from(article.children).forEach((item) => {
//   item.classList.add(`article-element`);
// });

// Imagine you have same attribute in a divnode. Put a div tag node element inside a variable. Select all nodes with same attribute using querySelector. Using the variable change the HTML using innerHTML       4️⃣6️⃣
const nextParagraph = document.querySelector(`div.error`)
nextParagraph.innerText = `🔥🔥🔥`

document.querySelector('#intro-text')

document.querySelector(`input[type='text']`)

document.querySelector(`li:nth-child(2)`)

// const secondItem = document.querySelector(`li:nth-child(2)`).innerText

// secondItem.innerText = `🍎`

// secondItem.style.color = `red`

// In console print all the p tags using querySelectorAll as a Nodelist 4️⃣
const all_P_Tags = document.querySelectorAll(`p`)
console.log(all_P_Tags) 

// From the p tag's nodelist print the 2nd p tag's content  4️⃣
console.log(all_P_Tags[1])

//  Get the p tags with attribute using querySelectorAll as a Nodelist. Using forEach change all of them  4️⃣
const paragraphWithAttribute = document.querySelectorAll(`.error`)

paragraphWithAttribute.forEach(item => {
  item.innerText = `🌱🌱🌱`
})

// Get all the node tags with h1 tag using getElementsByTagName and print them as a HTMLCollection  5️⃣
const allH1Tags = document.getElementsByTagName(`h1`)
console.log(allH1Tags)

// Now convert the HTMLCollection to NodeList and print the Text  5️⃣
const converter = Array.from(allH1Tags)
console.log(converter)

converter.forEach(item => {
  console.log(item.innerText)
})

const title = document.getElementById(`intro-text`)
title.textContent = `😆`
console.log(title.textContent)


title.innerText = `😂`

title.innerHTML = `<strong>Intro ot DOM</strong>`

title.style.color = `crimson`
title.style.backgroundColor = `White`
title.style.padding = `2rem`


// DOM Node Types

// 12
// Insert Image

// DOM Element Relationships

// Declare a variable that represents the parent node
const parent = document.querySelector(`.parent`)

// Print all the child node of the parent node 
parent.childNodes

// Print the 1st child of the parent node 
console.log(parent.childNodes[3])

// Print the text content of the 1st child 
console.log(parent.childNodes[3].textContent)

// Print the node name of the 1st child 
console.log(parent.childNodes[3].nodeName)


// Print the text content of the 1st child 
console.log(parent.childNodes[3].innerHTML)

// Print the outer HTML of the 1st child 
console.log(parent.childNodes[3].outerHTML)

// Print the inner Text of the 1st child 
console.log(parent.childNodes[3].innerText)

// Change the text content of the 1st child 
parent.childNodes[3].innerText = `Child One 👶`

// Change the text color of the 1st child 
parent.childNodes[5].style.color = `red`



// Print the 1st child of the parent node using firstChild
console.log(parent.firstChild)
// Print the last child of the parent node using lastChild
console.log(parent.lastChild)

// Insert text content before 1st child
parent.firstChild.textContent = `I hit it First`
// Insert text content after last child
parent.lastChild.textContent = `Kanye West`

// Getting parent node from child node

// Select the child node
console.log(document.querySelector(`.child`))
// Select the parent node using the child node
console.log(document.querySelector(`.child`).parentNode)
// Select the parent element using the child node
console.log(document.querySelector(`.child`).parentElement)
// Change the background color of the parent element using the child node
console.log(document.querySelector(`.child`).parentNode.style.backgroundColor = `gray`)
// Change the padding of the parent element using the child node
console.log(document.querySelector(`.child`).parentNode.style.padding = `1rem`)

// Siblings

// Selcet the 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`))
// Selcet the next sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling)
// Change the background color of the sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling.style.backgroundColor = `teal`)
// Selcet the prevous sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).previousSibling)
// Change the background color of the previous sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).previousSibling.style.backgroundColor = `red`)



const secondChild = document.querySelector(`.child:nth-child(2)`)

secondChild.addEventListener('click', () => {
    secondChild.style.backgroundColor = `yellow`
})

// // Declare a variable that select a p tag
// const para = document.querySelector(`p`)


// console.log(para.innerText)

// // Replace the text
// // para.innerHTML = `Text changed using innerText`

// // Now keep the previous text but add to it
// // para.innerHTML += ` Added Text`

// // Select all the p tags.
// const allPara = document.querySelectorAll(`p`)
// console.log(allPara)

// // All text at the end of each p tags
// // allPara.forEach(para => {
// //     console.log(para.innerText += ` **`)
// // })

// // Declare a variable that selects a div with attribute
// const content = document.querySelector(`.content`)

// // Change the html
// // content.innerHTML = `<strong>Updated using innerHTML</strong>`

// // Create an array. Add each of it's item as HTML to the div with attribute
// const dmcHeros = ['dante', 'nero', 'vergil']

// dmcHeros.forEach(item => {
//     content.innerHTML += ` <p>${item}</p>`
// })

// // Create a variable that selects a link
// const link = document.querySelector(`a`)

// // CHange the href of the link
// link.setAttribute('href', 'https://www.bing.com/')

// // Change the text of the link
// link.innerText = 'bing'

// // Declare a variable that select a p tag with class attribute. Now add an id attribute to it
// const error = document.querySelector('.error')
// error.setAttribute('id', 'error')

// // Now change the style of the link
// error.setAttribute('style', 'font-size: 2rem')

// // Change the css class of a HTML tag
// const title = document.querySelector(`h1`)

// title.style.margin = '5rem'
// title.style.color = 'crimson'
// title.style.fontSize = '2.5rem'
// title.style.margin = ''


// error.setAttribute('class', 'error')
// error.setAttribute('class', 'success')


// console.log(title.classList)

// title.classList.add('error')
// title.classList.remove('one', 'two', 'three')

// console.log(title.classList)

// // Task
// const taskList = document.querySelectorAll('.task p')
// console.log(taskList)


// // taskList.forEach((item) => {
// //     if (item.innerText.includes('error')) {
// //         item.classList.add('error')
// //     } else if (item.innerText.includes('success')) {
// //         item.classList.add('success')
// //     } else {
// //         return '🍌'
// //     }
// // })

// taskList.forEach((item) => {
//     if (item.textContent.includes('error')) {
//         item.classList.add('error')
//     } else if (item.textContent.includes('success')) {
//         item.classList.add('success')
//     } else {
//         return '🍌'
//     }
// })

// document.querySelector('h1').classList.toggle('test')
// // document.querySelector('h1').classList.toggle('test')

// const article = document.querySelector('article')

// console.log(article.children)

// console.log(Array.from(article.children))

// articleArray = Array.from(article.children)

// articleArray.forEach((child) => {
//     child.classList.add('article-element')
// })

// const titleH2 = document.querySelector('h2')

// console.log(titleH2)
// console.log(titleH2.parentElement)
// console.log(titleH2.parentElement.parentElement)
// console.log(titleH2.parentElement.parentElement.parentElement)

// console.log(titleH2.nextElementSibling)
// console.log(titleH2.previousElementSibling)

// // chaining
// console.log(titleH2.nextElementSibling.parentElement.children)

// const inner = document.querySelector('.innerVscontent')

// console.log(inner.innerText)
// console.log(inner.textContent)

// // const pizzaList = document.querySelector('.pizza')
// // console.log(pizzaList.textContent)

// // // pizzaList.textContent +=  '🍕'
// // pizzaList.insertAdjacentText('afterend', '🍕')
// // pizzaList.insertAdjacentText('beforebegin', '🍕')
// // pizzaList.insertAdjacentText('beforeend', '🍕')

// // const pic = document.querySelector('img')
// // // pic.classList.add('rounded')
// // // pic.classList.remove('rounded')
// // // pic.classList.toggle('rounded')
// // // pic.classList.toggle('rounded')

// // pic.addEventListener('click', () => {
// //     pic.classList.toggle('rounded')
// // })

// // pic.alt = 'Earth ASEAN Side'        // setter
// // console.log(pic.alt)                // getter
// // console.log(pic.naturalWidth)       // getter


// // const picApi = document.querySelector('.imgAPI');
// // console.log(picApi)
// // console.log(picApi.src)
// // console.log(picApi.alt)
// // console.log(picApi.naturalWidth)    // Problem: Output 0

// window.addEventListener('load', () => {     // Solution: Add a Loader function
//     console.log(picApi.naturalWidth)
// })

// console.log(picApi.getAttribute('alt'))
// console.log(picApi.setAttribute('alt', '💛'))
// console.log(picApi.getAttribute('alt'))

// picApi.setAttribute('o_O', 'O-O')           // Custom Attribute
// console.log(picApi.getAttribute('o_O'))

// const custom = document.querySelector('#custom')
// console.log(custom)
// console.log(custom.dataset)

// custom.addEventListener('click', () => {
//     alert(`Welcome ${custom.dataset.last}. & ${custom.dataset.name}`)
// })

// const myParagraph = document.createElement('p')
// myParagraph.textContent = 'This is a paragraph'
// myParagraph.classList.add('special')
// console.log(myParagraph)

// const myImage = document.createElement('img')
// myImage.src = `https://picsum.photos/200`
// myImage.alt = 'Image from API'
// console.log(myImage)

// const myDiv = document.createElement('div')
// myDiv.classList.add('wrapper')
// console.log(myDiv)

// const body = document.querySelector('body')
// myDiv.appendChild(myImage)
// myDiv.appendChild(myParagraph)
// document.body.appendChild(myDiv)            // Keep the hiarerchi dom at last

// const heading = document.createElement('h2')
// heading.textContent = `The Last of US`

// // myDiv.appendChild(heading)
// myDiv.insertAdjacentElement('beforebegin', heading)     // appendChild is ok, but insertAdjacentElement is better

// // Challenge
// // const list = document.createElement('ul')
// // const listItem = document.createElement('li')

// // listItem.textContent = '3'
// // console.log(list)
// // list.insertAdjacentElement('afterend', listItem)
// // console.log(list)
// // // list.appendChild(listItem)
// // listItem.textContent = '2'
// // list.insertAdjacentElement('afterend', listItem)

// // body.appendChild(list)

// // document.body.insertAdjacentElement('afterend', list)

// // listItem.appendChild(list)
// // list.appendChild(listItem)
// // listItem.textContent = '3'
// // list.insertAdjacentElement('afterbegin', listItem)
// // listItem.textContent = '2'
// // list.insertAdjacentElement('afterend', listItem)
// // listItem.textContent = '4'
// // list.insertAdjacentElement('afterbegin', listItem)
// // listItem.textContent = '1'
// // list.insertAdjacentElement('afterbegin', listItem)
// // listItem.textContent = '5'
// // list.insertAdjacentElement('afterbegin', listItem)

// // document.body.insertAdjacentElement('afterend', list)

// // console.log(list)

// // body.insertAdjacentElement('afterend', listItem)

// //   const ul = document.createElement("ul");
// //   const li = document.createElement("li");
// //   const text = document.createTextNode("PHP");
// //   li.appendChild(text);
// // ul.appendChild(li);
  
// // console.log(ul)

//! All HTML Element Variables 

const slot = document.createElement('div')
const paragraphForSlot = document.createElement('p')
const imageForSlot = document.createElement('img')
const headingForSlot = document.createElement('h1')

const ulForSlot = document.createElement('ul')
const liForUL = document.createElement('li')

//! 5 List items being created, value inserted & being put inside a ul
liForUL.textContent = '3️⃣'
ulForSlot.appendChild(liForUL)

const listItem2 = liForUL.cloneNode(true)
listItem2.textContent = '2️⃣'
ulForSlot.insertAdjacentElement('afterbegin', listItem2)

const listItem1 = liForUL.cloneNode(true)
listItem1.textContent = '1️⃣'
ulForSlot.insertAdjacentElement('afterbegin', listItem1)

const listItem4 = liForUL.cloneNode(true)
listItem4.textContent = '4️⃣'
ulForSlot.insertAdjacentElement('beforeend', listItem4)

const listItem5 = liForUL.cloneNode(true)
listItem5.textContent = '5️⃣'
ulForSlot.insertAdjacentElement('beforeend', listItem5)

//! ul is inserted into the div
slot.appendChild(ulForSlot)

slot.classList.add('creatingHTML')

paragraphForSlot.classList.add('error')
paragraphForSlot.innerHTML = `<strong>Paragraph 4 Slot</strong>`

imageForSlot.src = 'https://picsum.photos/200'
imageForSlot.alt = 'image from api'
imageForSlot.classList.add('rounded')

headingForSlot.textContent = 'Heading 4 Slot'

slot.appendChild(imageForSlot)
slot.appendChild(headingForSlot)
slot.appendChild(paragraphForSlot)
// slot.insertAdjacentElement('afterend', paragraphForSlot)
// slot.insertAdjacentElement('beforebegin', imageForSlot)

slot.classList.add('area')

window.addEventListener('load', () => {
    // document.body.appendChild(slot)
    document.body.insertAdjacentElement('beforebegin', slot)    //! Adding to DOM
})

console.log(slot)

/**
 * ! Beware
 * TODO: Organize Code
 * ! Beware 
*/

/**
 * ! o_O
 */

/**
 * ! O-O
 */

const imgWidth = 200
const imgSRC = `https://picsum.photos/${imgWidth}` 
// const imgAlt = `API ${console.log('👾👾')}` //! Security 
const imgAlt = `API ${console.log('👾👾')}` //! Cross Site Scripting
const item = document.querySelector('.item')


item.innerHTML = `
<div class="area">  
    <h1>What Up!</h1>
    <img src=${imgSRC} alt=${imgAlt} />
</div>
`

// console.log(item.innerHTML)

// console.log(typeof (item))

// const repurposedImage = document.querySelector('.area img')

// repurposedImage.classList.add('rounded')

// console.log(repurposedImage)

// Turing a string into a DOM
// const myFragment = document.createRange().createContextualFragment(item)

// console.log(myFragment)

// document.body.appendChild(myFragment)
// document.body.append(myFragment)

const sourov = document.querySelector('.sourov')

console.log(sourov.children)
console.log(sourov.childNodes)


// Change the id of the form    7️⃣
// document.forms[0].id = `new-id`
// console.log(document.forms[0].id)

// Replace all the content inside the HTML  3️⃣
// document.body.innerHTML = `<h1>Hello World!</h1>`

const main = document.getElementById('main');
console.log(document.getElementById('main'));
main.innerHTML = `<h1>Main say Hello</h1>`;
// document.getElementById('intro-text').id = `New ID`
// console.log()
// document.getElementById('intro-text').title = `Shopping🛒`
// console.log()
// document.getElementById('intro-text').setAttribute(`class`, `title`)
// console.log()
// Put a HTML text node element inside a variable. Using the variable change the HTML using innerHTML     1️⃣3️⃣5️⃣8️⃣
const introText = document.getElementById(`intro-text`)
introText.innerHTML = `<h1>XD</h1>`


// document.querySelector(`#main p`).innerHTML = `Sup!`;

// listItem.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.style.background = `crimson`;
//   }

//   if (index === 0) {
//     // item.innerText += ` teal`;
//     // item.innerHTML
//   }
// });