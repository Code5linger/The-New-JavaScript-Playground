// Declare a variable that select a p tag 
const para = document.querySelector(`p`)


console.log(para.innerText)

// Replace the text
// para.innerHTML = `Text changed using innerText`

// Now keep the previous text but add to it
// para.innerHTML += ` Added Text`

// Select all the p tags. 
const allPara = document.querySelectorAll(`p`)
console.log(allPara)

// All text at the end of each p tags
// allPara.forEach(para => {
//     console.log(para.innerText += ` **`)
// })

// Declare a variable that selects a div with attribute
const content = document.querySelector(`.content`)

// Change the html
// content.innerHTML = `<strong>Updated using innerHTML</strong>`

// Create an array. Add each of it's item as HTML to the div with attribute
const dmcHeros = ['dante', 'nero', 'vergil']

dmcHeros.forEach(item => {
    content.innerHTML += ` <p>${item}</p>`
})

// Create a variable that selects a link 
const link = document.querySelector(`a`)

// CHange the href of the link
link.setAttribute('href', 'https://www.bing.com/')

// Change the text of the link
link.innerText = 'bing'

// Declare a variable that select a p tag with class attribute. Now add an id attribute to it
const error = document.querySelector('.error')
error.setAttribute('id', 'error')

// Now change the style of the link
error.setAttribute('style', 'font-size: 2rem')

// Change the css class of a HTML tag
const title = document.querySelector(`h1`)

title.style.margin = '5rem'
title.style.color = 'crimson'
title.style.fontSize = '2.5rem'
title.style.margin = ''


error.setAttribute('class', 'error')
error.setAttribute('class', 'success')


console.log(title.classList)

title.classList.add('error')
title.classList.remove('one', 'two', 'three')

console.log(title.classList)

// Task
const taskList = document.querySelectorAll('.task p')
console.log(taskList)


// taskList.forEach((item) => {
//     if (item.innerText.includes('error')) {
//         item.classList.add('error')
//     } else if (item.innerText.includes('success')) {
//         item.classList.add('success')
//     } else {
//         return '🍌'
//     }
// })

taskList.forEach((item) => {
    if (item.textContent.includes('error')) {
        item.classList.add('error')
    } else if (item.textContent.includes('success')) {
        item.classList.add('success')
    } else {
        return '🍌'
    }
})

document.querySelector('h1').classList.toggle('test')
// document.querySelector('h1').classList.toggle('test')

const article = document.querySelector('article')

console.log(article.children)

console.log(Array.from(article.children))

articleArray = Array.from(article.children)

articleArray.forEach((child) => {
    child.classList.add('article-element')
})

const titleH2 = document.querySelector('h2')

console.log(titleH2)
console.log(titleH2.parentElement)
console.log(titleH2.parentElement.parentElement)
console.log(titleH2.parentElement.parentElement.parentElement)

console.log(titleH2.nextElementSibling)
console.log(titleH2.previousElementSibling)

// chaining
console.log(titleH2.nextElementSibling.parentElement.children)

const inner = document.querySelector('.innerVscontent')

console.log(inner.innerText)
console.log(inner.textContent)

const pizzaList = document.querySelector('.pizza')
console.log(pizzaList.textContent)

// pizzaList.textContent +=  '🍕'
pizzaList.insertAdjacentText('afterend', '🍕')
pizzaList.insertAdjacentText('beforebegin', '🍕')
pizzaList.insertAdjacentText('beforeend', '🍕')

const pic = document.querySelector('img')
// pic.classList.add('rounded')
// pic.classList.remove('rounded')
// pic.classList.toggle('rounded')
// pic.classList.toggle('rounded')

pic.addEventListener('click', () => {
    pic.classList.toggle('rounded')
})

pic.alt = 'Earth ASEAN Side'        // setter
console.log(pic.alt)                // getter
console.log(pic.naturalWidth)       // getter


const picApi = document.querySelector('.imgAPI');
console.log(picApi)
console.log(picApi.src)
console.log(picApi.alt)
console.log(picApi.naturalWidth)    // Problem: Output 0

window.addEventListener('load', () => {     // Solution: Add a Loader function
    console.log(picApi.naturalWidth)
})

console.log(picApi.getAttribute('alt'))
console.log(picApi.setAttribute('alt', '💛'))
console.log(picApi.getAttribute('alt'))

picApi.setAttribute('o_O', 'O-O')           // Custom Attribute
console.log(picApi.getAttribute('o_O'))

const custom = document.querySelector('#custom')
console.log(custom)
console.log(custom.dataset)

custom.addEventListener('click', () => {
    alert(`Welcome ${custom.dataset.last}. & ${custom.dataset.name}`)
})

const myParagraph = document.createElement('p')
myParagraph.textContent = 'This is a paragraph'
myParagraph.classList.add('special')
console.log(myParagraph)

const myImage = document.createElement('img')
myImage.src = `https://picsum.photos/200`
myImage.alt = 'Image from API'
console.log(myImage)

const myDiv = document.createElement('div')
myDiv.classList.add('wrapper')
console.log(myDiv)

const body = document.querySelector('body')
myDiv.appendChild(myImage)
myDiv.appendChild(myParagraph)
document.body.appendChild(myDiv)            // Keep the hiarerchi dom at last

const heading = document.createElement('h2')
heading.textContent = `The Last of US`

// myDiv.appendChild(heading)
myDiv.insertAdjacentElement('beforebegin', heading)     // appendChild is ok, but insertAdjacentElement is better

// Challenge
const list = document.createElement('ul')
const listItem = document.createElement('li')

// listItem.textContent = '3'
// console.log(list)
// list.insertAdjacentElement('afterend', listItem)
// console.log(list)
// // list.appendChild(listItem)
// listItem.textContent = '2'
// list.insertAdjacentElement('afterend', listItem)

// body.appendChild(list)

// document.body.insertAdjacentElement('afterend', list)

// listItem.appendChild(list)
// list.appendChild(listItem)
listItem.textContent = '3'
list.insertAdjacentElement('afterbegin', listItem)
listItem.textContent = '2'
list.insertAdjacentElement('afterend', listItem)
listItem.textContent = '4'
list.insertAdjacentElement('afterbegin', listItem)
listItem.textContent = '1'
list.insertAdjacentElement('afterbegin', listItem)
// listItem.textContent = '5'
// list.insertAdjacentElement('afterbegin', listItem)

document.body.insertAdjacentElement('afterend', list)

console.log(list)

// body.insertAdjacentElement('afterend', listItem)

//   const ul = document.createElement("ul");
//   const li = document.createElement("li");
//   const text = document.createTextNode("PHP");    
//   li.appendChild(text);
// ul.appendChild(li);
  
// console.log(ul)