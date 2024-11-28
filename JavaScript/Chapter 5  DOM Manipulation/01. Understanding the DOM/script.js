'use strict'

// From AI
/*
#### 1. ** Understanding the DOM **
   - **What is the DOM?**
     - Definition and structure of the Document Object Model.
     - How the browser interprets HTML and creates a DOM tree.
   - **DOM vs. HTML**
     - Differences between the DOM and the HTML structure.
   - **Browser DevTools**
     - Using DevTools to inspect the DOM and view changes in real-time.
*/


// 002 The DOM Explained    
// **What is the DOM?**     1️⃣2️⃣
// DOM is created by the browser when an HTML document loads inside it.
    
/*
    The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows developers to manipulate elements, attributes, and styles dynamically using JavaScript.
*/

// How developers manipulate a HTML document inside a browser1️⃣
//  When a HTML document is loaded inside a browser, the browser creates an object which modes the loaded HTML document. The object is called document object. The document object is the root of the DOM hierarchy. It provides methods and properties to access and manipulate its elements, structure, and content.


// What is window object    2️⃣
// The `window` object represents the global browser environment. It serves as the top-level container for all JavaScript code and provides methods, properties, and objects (like `document`, `console`, `localStorage`) to interact with the browser, DOM, and user.

// What is the connection of document object and window     2️⃣
// The `document` object is a property of the `window` object. The `window` represents the browser's global context, while the `document` represents the HTML document loaded in that context. You access `document` via `window.document`, but since `window` is implicit, you can simply use `document`.

// Access window object inside console    1️⃣3️⃣
console.log(window)

// Access document object inside console with window object    1️⃣3️⃣
console.log(window.document)

// Access document object inside console without window object    1️⃣2️⃣
console.log(document)

// Previously using console.log we got the HTML elements. Now just print the properties and methods     3️⃣
console.dir(document)

// Get Location in console using window object    1️⃣2️⃣
console.log(window.location)

// Get Location in console using document object    1️⃣2️⃣
console.log(document.location)

// Get Location in console without using any object    1️⃣2️⃣
console.log(location)

// Get height & width of the browser    2️⃣
console.log( `Height ${innerHeight}px, Width ${innerWidth}px`)

// What is navigator    2️⃣
// The `navigator` object provides information about the browser and the user's device, such as browser name, version, language, and platform. It also allows interaction with features like geolocation and permissions.

// Print the navigator object in the console
console.log(navigator)

// Get the URL using document object    1️⃣
console.log(document.URL) 

// Print the HTML body using document object    3️⃣
console.log(document.body)

// Print the HTML body content using innerHTML property    3️⃣
console.log(document.body.innerHTML)

// Print the HTML body text using innerText property    3️⃣
console.log(document.body.innerText)

// Print all the links inside the HTML    3️⃣
console.log(document.links)

// Print the 1st link inside the HTML    3️⃣
console.log(document.links[0])

// Replace all the content inside the HTML  3️⃣
// document.body.innerHTML = `<h1>Hello World!</h1>`

// Insert a string in the HTMl using write method   3️⃣
document.write('o_O')

// Print a HTML element node's text inside console using getElementById method     1️⃣3️⃣
console.log(document.getElementById('intro-text'))

// Print a HTML text node's text inside console using getElementById method     1️⃣3️⃣
console.log(document.getElementById('intro-text').innerText)

// Put a HTML text node element inside a variable. Using the variable change the HTML using innerHTML     1️⃣3️⃣
const introText = document.getElementById(`intro-text`)
introText.innerHTML = `<h1>XD</h1>`

// Change a p tag's text inside using querySelector method     1️⃣3️⃣
document.querySelector(`p`).innerText = `:'(`


// Insert Image 1️⃣

// In DOM, What is the html tag is called   1️⃣
// root node

// In DOM, What are the title, h1 & p tags are called   1️⃣
//  text node



/*
SOURCES
1️⃣   002 The DOM Explained  
2️⃣   20 - The DOM - Introduction to the document 
3️⃣   0069_Intro_To_The_DOM 
*/

// From AI
/*
#### 2. **Selecting DOM Elements**
   - **Methods of Selection**
     - `document.getElementById()`
     - `document.getElementsByClassName()`
     - `document.getElementsByTagName()`
     - `document.querySelector()`
     - `document.querySelectorAll()`
   - **Element vs. Node Selection**
     - Understanding the difference between selecting elements and nodes.

*/