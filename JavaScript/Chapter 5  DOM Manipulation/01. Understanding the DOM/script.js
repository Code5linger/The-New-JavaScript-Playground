
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
// Print a HTML element node's text inside console using getElementById method     1️⃣3️⃣5️⃣8️⃣
console.log(document.getElementById('intro-text'))

// Print a HTML text node's text inside console using getElementById method     1️⃣3️⃣5️⃣8️⃣
console.log(document.getElementById('intro-text').innerText)

console.log(document.getElementById('intro-text').id)

document.getElementById('intro-text').id = `New ID`
console.log()

document.getElementById('intro-text').title = `Shopping🛒`
console.log()

document.getElementById('intro-text').setAttribute(`class`, `title`)
console.log()



console.log(document.getElementById('intro-text').className)

console.log(document.getElementById('intro-text').getAttribute(`id`))

// Put a HTML text node element inside a variable. Using the variable change the HTML using innerHTML     1️⃣3️⃣5️⃣8️⃣
const introText = document.getElementById(`intro-text`)
introText.innerHTML = `<h1>XD</h1>`

// Put all the p tags with same attribute inside a variable as HTMLCollection using getElementsByClassName    5️⃣
const errorClass = document.getElementsByClassName(`error`)
console.log(errorClass)

// Change a p tag's text inside using querySelector method     1️⃣3️⃣
document.querySelector(`p`).innerText = `:'(`

// Put a p tag node element inside a variable. Select a node with attribute using querySelector. Using the variable change the HTML using innerHTML       4️⃣
const firstParagraph = document.querySelector(`.error`)
firstParagraph.innerText = `💥💥💥`

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



// what is the difference between getElementById and getElementsByClassName 5️⃣
// - **`getElementById`**: Selects a single element with a specific ID. Returns the element or `null` if not found.
// - **`getElementsByClassName`**: Selects all elements with a specific class. Returns a live HTMLCollection (can contain multiple elements).

// why getElementById returns a single element but getElementsByClassName multiple element    5️⃣
// - **`ID`**: Must be unique per HTML spec, so `getElementById` always returns one element.
// - **Class**: Can be shared by multiple elements, so `getElementsByClassName` returns all matching elements.

// What is the difference between the HTMLCollection and nodelist   5️⃣
// - **HTMLCollection**:
//   - Live: Updates automatically if the DOM changes.
//   - Contains only HTML elements.

// - **NodeList**:
//   - Static (default): Doesn't update automatically.
//   - Can include any node type (elements, text, comments).

// Why cant i use forEach function on HTMLCollection but can in NodeList  5️⃣
// - **HTMLCollection**: Doesn't support `forEach` directly because it's not an array.
// - **NodeList**: Supports `forEach` as it's array-like and often iterable.

// How to convert HTMLCollection to NodeList  5️⃣
// Convert HTMLCollection using `Array.from()` to use `forEach`.

/*
SOURCES
4️⃣   003 The Query Selector
5️⃣   004 Other Ways to Query the DOM
6️⃣   21 - The DOM - Selecting Elements
7️⃣   0070_Document_Element_Properties 
8️⃣   0071_DOM_Selectors_Single_Elements 
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

// From AI
/*
#### 3. **Manipulating DOM Elements**
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

const title = document.getElementById(`intro-text`)
title.textContent = `😆`
console.log(title.textContent)


title.innerText = `😂`

title.innerHTML = `<strong>Intro ot DOM</strong>`

title.style.color = `crimson`
title.style.backgroundColor = `White`
title.style.padding = `2rem`



// From AI
/*
#### 4. **Event Handling**
   - **Understanding Events**
     - What are events? Bubbling vs. capturing.
   - **Adding Event Listeners**
     - Using `addEventListener()` and `removeEventListener()`
     - Event delegation: how to manage events on dynamically added elements.
   - **Common Events**
     - Click, change, input, focus, blur, and more.
*/

// From AI
/*
#### 5. **Advanced Manipulation Techniques**
   - **Animations and Transitions**
     - Basic CSS transitions and animations.
     - Using JavaScript to manipulate CSS properties for animations.
   - **Using Libraries**
     - Overview of libraries like jQuery for simplified DOM manipulation.
     - Introduction to modern frameworks (React, Vue, Angular) and how they manage the DOM.
   - **Performance Optimization**
     - Understanding reflow and repaint.
     - Techniques for optimizing DOM manipulation (batch updates, virtual DOM concepts).
*/
       
// From AI
/*
#### 6. **Dynamic Content Manipulation**
   - **Working with JSON and APIs**
     - Fetching data with `fetch()` and manipulating the DOM with the fetched data.
   - **Creating Dynamic Forms**
     - Building forms that add/remove fields dynamically.
     - Validating input in real-time.
*/

// From AI
/*
#### 7. **Best Practices and Patterns**
   - **Separation of Concerns**
     - Keeping HTML, CSS, and JavaScript separate.
   - **Modular Code**
     - Organizing code into functions or modules for better maintainability.
   - **Accessibility Considerations**
     - Ensuring your manipulations are accessible (ARIA roles, focus management).
*/

// From AI
/*
#### 8. **Testing and Debugging**
   - **Unit Testing**
     - Introduction to testing frameworks (Jest, Mocha).
     - Writing tests for DOM manipulation functions.
   - **Debugging Techniques**
     - Using breakpoints, logging, and error handling for debugging DOM manipulations.
*/
       
// From AI
/*
#### 9. **Project Ideas for Practice**
   - **To-Do List App**
     - Create, update, and delete tasks with DOM manipulation.
   - **Interactive Form**
     - Build a multi-step form with dynamic field additions.
   - **Image Gallery**
     - Implement an image gallery that fetches data from an API and displays it dynamically.
*/

// From AI
/*
#### 10. **Keeping Up-to-Date**
   - **Follow Updates in JavaScript**
     - Keep track of new features in JavaScript and the DOM API.
   - **Community Engagement**
     - Join forums, participate in discussions, and follow relevant blogs or YouTube channels.
*/