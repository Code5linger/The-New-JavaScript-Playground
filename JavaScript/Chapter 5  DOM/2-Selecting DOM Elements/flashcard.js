'use strict'

//! What is window object
//* The window object represents the global browser environment. It serves as the top-level container for all JS code and provides methods, properties and objects like document, console, localStorage to interact with the browser, DOM and user

//! What is the connection of document object and window
//* The document object is a property of the window object.
//* The window represents the browsers global context. While the document represents the HTMl

console.log(window)
console.log(window.document)
console.log(document)
//! 06 - Previously using console.log we got the HTML elements of `document`. Now just print the properties and methods
console.dir(window)
console.dir(document)
//TODO 07
console.log(document.all)
//TODO 08 : Both Works () & []
console.log(document.all(7))
console.log(document.all[7])

console.log(document.all.length)
//Todo 10
console.log(document.documentElement)

console.log(document.head)
console.log(document.head.children)     //! Element  Cant Use forEach
console.log(document.head.childNodes)   //! Node     Can use forEach

console.log(document.body)

console.log(document.body.innerHTML)
console.log(document.body.innerText)

console.log(document.doctype)
console.log(document.domain)
//TODO: 16 - Print the children of the body element as HTMLCollection
console.log(document.body.children)

console.log(document.characterSet)
console.log(document.contentType)
//TODO: 19 - Print out all the forms as HTMLCollection
console.log(document.forms)
//! Update Image 
console.log(document.forms[1])
console.log(document.forms[0][1])
console.log(document.forms[0][1].id)
console.log(document.forms[0].method)
console.log(document.forms[0].action)

console.log(window.location)
console.log(document.location)
console.log(location)

console.log(innerHeight, innerWidth)

//! 28 - What is navigator
//* The Navigator object provides information about the browser and the user's device, such as browser name, ersion, language and platform. It allows interaction with features like geolocation and permission

console.log(navigator)

console.log(document.URL)

console.log(document.links)
console.log(document.links[0])
console.log(document.links[0].href)
console.log(document.links[0].className)
console.log(document.links[0].classList)

//TODO: What is domTokenList

console.log(document.images)
console.log(document.images[0])
console.log(document.images[0].src)
console.log(document.images[0].id)

console.log(document.getElementById('demo'))

const main = document.getElementById('main')
console.log(main)

const title = document.getElementById('title')
console.log(title)
console.log(title.innerText)

console.log(document.getElementById('intro-text').innerText)
console.log(document.getElementById('intro-text').id)
console.log(document.getElementById('intro-text').className)
//TODO 47
console.log(document.getElementById('intro-text').getAttribute('id'))

console.log(document.getElementsByClassName('demo-para'))

//! 49 - what is the difference between getElementById and getElementsByClassName
//* getElementById Selects a single element with a specific ID. Returns the element or null if not found
//* getElementsByClassName Selects all elements with a specific class. Returns a live HTMLCollection

const demoPara = document.getElementsByClassName('demo-para')

//! 50 - why getElementById returns a single element but getElementsByClassName multiple element
//* ID: Must be unique per HTML spec, so getElementById always returns one element
//* Class: Can be shared by mustiple elements, so getElementsByClassName returns all matching elements

console.log(document.getElementsByTagName('p'))

//! 52 - Using the previous variable, print all the tags using forEach
const pTag = document.getElementsByTagName('p')
console.log(pTag)
// pTag.forEach(tag => {
//     console.log(tag)
// })

const child = document.querySelector(`#demo`)
console.log(child)
const parent = document.querySelector(`.demo`)
console.log(parent)

const list = document.querySelector(`ul`)
console.log(list)
const listItem2 = document.querySelector(`#list-item:nth-child(2)`)
console.log(listItem2)

const error = document.querySelector('.error')
console.log(error.outerHTML)
console.log(error.innerHTML)

console.log(document.querySelector('p').innerHTML)

console.log(document.querySelector('.error-2').innerHTML)
//! 61 - Print the inner HTML of the `div tag with error class` (Combo Selector) using querySelector
console.log(document.querySelector('div.error').innerHTML)

console.log(document.querySelector('#test').innerHTML)
//! 
console.log(document.querySelector(`input[type='text']`))

console.log(document.querySelectorAll(`li`))

const listItem = document.querySelectorAll(`li`)
listItem.forEach(item => {
    console.log(item.textContent += ` 🐉`)
})

console.log(document.querySelectorAll('p'))

const paragraph = document.querySelectorAll('p')
paragraph.forEach(item => {
    console.log(item.textContent += ` 💫`)
})

console.log(document.querySelectorAll('div'))

//! 

//! 





//! 


//! 


//! 


//! 


//! 









