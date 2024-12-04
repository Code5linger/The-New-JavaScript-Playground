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