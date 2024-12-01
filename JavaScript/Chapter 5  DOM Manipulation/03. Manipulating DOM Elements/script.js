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