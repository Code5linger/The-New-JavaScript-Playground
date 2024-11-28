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
// **What is the DOM?**     1️⃣
// DOM is created by the browser when an HTML document loads inside it.
    
/*
    The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows developers to manipulate elements, attributes, and styles dynamically using JavaScript.
*/

// How developers manipulate a HTML document inside a browser1️⃣
//  When a HTML document is loaded inside a browser, the browser creates an object which modes the loaded HTML document. The object is called document object. The document object is the root of the DOM hierarchy. It provides methods and properties to access and manipulate its elements, structure, and content.

// Access document object inside console    1️⃣
console.log(document)

// Get Location in console using document object    1️⃣
console.log(document.location)

// Get the URL using document object    1️⃣
console.log(document.URL) 

// Print a HTML text node's text inside console using getElementById method     1️⃣
console.log(document.getElementById('intro-text').innerText)

// Insert Image 1️⃣

// In DOM, What is the html tag is called   1️⃣
// root node

// In DOM, What are the title, h1 & p tags are called   1️⃣
//  text node


/*
SOURCES
1️⃣ 002 The DOM Explained   
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