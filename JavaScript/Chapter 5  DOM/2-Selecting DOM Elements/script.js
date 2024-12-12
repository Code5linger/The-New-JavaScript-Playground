console.log('2-Selecting DOM Elements')

/**
 * !2. **Selecting DOM Elements**
   - **Methods of Selection**
     - `document.getElementById()`
     - `document.getElementsByClassName()`
     - `document.getElementsByTagName()`
     - `document.querySelector()`
     - `document.querySelectorAll()`
   - **Element vs. Node Selection**
     - Understanding the difference between selecting elements and nodes.

 */

// What is window object    2️⃣
// The `window` object represents the global browser environment. It serves as the top-level container for all JavaScript code and provides methods, properties, and objects (like `document`, `console`, `localStorage`) to interact with the browser, DOM, and user.

// What is the connection of document object and window     2️⃣
// The `document` object is a property of the `window` object. The `window` represents the browser's global context, while the `document` represents the HTML document loaded in that context. You access `document` via `window.document`, but since `window` is implicit, you can simply use `document`.

// Access window object inside console    1️⃣3️⃣
// console.log(window)

// Access document object inside console with window object    1️⃣3️⃣
// console.log(window.document)

// Access document object inside console without window object    1️⃣2️⃣
// console.log(document)

// Previously using console.log we got the HTML elements. Now just print the properties and methods     3️⃣
// console.dir(document)

// Print all the elements of documents as HTMLCollection using all property   7️⃣
// console.log(document.all)

// Print an element using document.all    7️⃣
// console.log(document.all[11])

// Print the length of document.all element   7️⃣
// console.log(document.all.length)

// Print the HTML content using documentElement   7️⃣
// console.log(document.documentElement)

// Print just the header content  7️⃣
// console.log(document.head)

// Print the children of the head element 7️⃣
// console.log(document.head.children)

// Print just the body content  7️⃣
// console.log(document.body)

// Fond out the doctype   7️⃣
// console.log(document.doctype)

// Fint out the domain    7️⃣
// console.log(document.domain)

// Print the children of the body element   7️⃣
// console.log(document.body.children)

// Find out the charecter set   7️⃣
// console.log(document.characterSet)

// Find out the content type    7️⃣
// console.log(document.contentType)

// Print out all the forms    7️⃣
// console.log(document.forms)

// Print out the 2nd form   7️⃣
// console.log(document.forms[0])

// Print out the id of the 2nd form   7️⃣
// console.log(document.forms[0].id)

// Change the id of the form    7️⃣
// document.forms[0].id = `new-id`
// console.log(document.forms[0].id)

// Print the method used in the form    7️⃣
// console.log(document.forms[0].method)

// Print the action used in the form    7️⃣
// console.log(document.forms[0].action)

// Get Location in console using window object    1️⃣2️⃣
// console.log(window.location)

// Get Location in console using document object    1️⃣2️⃣
// console.log(document.location)

// Get Location in console without using any object    1️⃣2️⃣
// console.log(location)

// Get height & width of the browser    2️⃣
// console.log(`Height ${innerHeight}px, Width ${innerWidth}px`)

// What is navigator    2️⃣
// The `navigator` object provides information about the browser and the user's device, such as browser name, version, language, and platform. It also allows interaction with features like geolocation and permissions.

// Print the navigator object in the console
// console.log(navigator)

// Get the URL using document object    1️⃣
// console.log(document.URL)

// Print the HTML body using document object    3️⃣
// console.log(document.body)

// Print the HTML body content using innerHTML property    3️⃣
// console.log(document.body.innerHTML)

// Print the HTML body text using innerText property    3️⃣
// console.log(document.body.innerText)

// Print all the links inside the HTML    3️⃣
// console.log(document.links)

// Print the 1st link inside the HTML    3️⃣
// console.log(document.links[0])

// console.log(document.links[0].href)

// console.log(document.links[0].classList)

// Introducing DOMTokenList

// console.log(document.images)

// console.log(document.images[0])

// console.log(document.images[0].src)

// Replace all the content inside the HTML  3️⃣
// document.body.innerHTML = `<h1>Hello World!</h1>`

