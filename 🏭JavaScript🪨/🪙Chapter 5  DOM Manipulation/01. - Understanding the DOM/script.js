//  JavaScript DOM Manipulation Roadmap

// # 3. **Manipulating DOM Elements**
//    - **Creating Elements**
//      - Using `document.createElement()`
//      - Setting attributes with `setAttribute()`
//      - Inserting elements using `appendChild()`, `insertBefore()`, and `replaceChild()`
//    - **Modifying Elements**
//      - Changing text content: `textContent`, `innerText`, and `innerHTML`
//      - Modifying styles: `style` property and `classList` methods (`add()`, `remove()`, `toggle()`)
//    - **Removing Elements**
//      - Using `remove()` and `parentNode.removeChild()`

// # 4. **Event Handling**
//    - **Understanding Events**
//      - What are events? Bubbling vs. capturing.
//    - **Adding Event Listeners**
//      - Using `addEventListener()` and `removeEventListener()`
//      - Event delegation: how to manage events on dynamically added elements.
//    - **Common Events**
//      - Click, change, input, focus, blur, and more.

// # 5. **Advanced Manipulation Techniques**
//    - **Animations and Transitions**
//      - Basic CSS transitions and animations.
//      - Using JavaScript to manipulate CSS properties for animations.
//    - **Using Libraries**
//      - Overview of libraries like jQuery for simplified DOM manipulation.
//      - Introduction to modern frameworks (React, Vue, Angular) and how they manage the DOM.
//    - **Performance Optimization**
//      - Understanding reflow and repaint.
//      - Techniques for optimizing DOM manipulation (batch updates, virtual DOM concepts).

// # 6. **Dynamic Content Manipulation**
//    - **Working with JSON and APIs**
//      - Fetching data with `fetch()` and manipulating the DOM with the fetched data.
//    - **Creating Dynamic Forms**
//      - Building forms that add/remove fields dynamically.
//      - Validating input in real-time.

// # 7. **Best Practices and Patterns**
//    - **Separation of Concerns**
//      - Keeping HTML, CSS, and JavaScript separate.
//    - **Modular Code**
//      - Organizing code into functions or modules for better maintainability.
//    - **Accessibility Considerations**
//      - Ensuring your manipulations are accessible (ARIA roles, focus management).

// # 8. **Testing and Debugging**
//    - **Unit Testing**
//      - Introduction to testing frameworks (Jest, Mocha).
//      - Writing tests for DOM manipulation functions.
//    - **Debugging Techniques**
//      - Using breakpoints, logging, and error handling for debugging DOM manipulations.

// # 9. **Project Ideas for Practice**
//    - **To-Do List App**
//      - Create, update, and delete tasks with DOM manipulation.
//    - **Interactive Form**
//      - Build a multi-step form with dynamic field additions.
//    - **Image Gallery**
//      - Implement an image gallery that fetches data from an API and displays it dynamically.

// # 10. **Keeping Up-to-Date**
//    - **Follow Updates in JavaScript**
//      - Keep track of new features in JavaScript and the DOM API.
//    - **Community Engagement**
//      - Join forums, participate in discussions, and follow relevant blogs or YouTube channels.

console.log('#1 - Understanding the DOM');

// # 1. **Understanding the DOM**

//    - **What is the DOM?**
//      - Definition and structure of the Document Object Model.
//      - How the browser interprets HTML and creates a DOM tree.

//    - **DOM vs. HTML**
//      - Differences between the DOM and the HTML structure.

//    - **Browser DevTools**
//      - Using DevTools to inspect the DOM and view changes in real-time.

console.log('20 - The DOM - Introduction to the document');

console.log(window); // +
console.log(window.location); // +
console.log(location);
console.log(innerHeight);
console.log(innerWidth);
console.log(window.document);
console.log(document); // +
console.log(navigator);

console.log('002 The DOM Explained');

console.log(document.URL);
console.log(document.getElementById('demo'));
console.log(
  'DOM Visualization,  DOM Tree Structure, Root Node & Text Node, Attribute'
); // +

console.log(`0069_Intro_To_The_DOM `);

console.log(window.document);
console.dir(window.document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);

// document.body.innerHTML = '<h1>Hello World!</h1>';
// document.write('Hello from JS');
console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = `<h1>Main say Hello</h1>`;

document.querySelector(`#main p`).innerHTML = `Sup!`;

console.log(`0074_Traversing_The_DOM_All_Nodes `);
let outpu;

const parent = document.querySelector('.parent');

// outpu = parent.childNodes;
// outpu = parent.childNodes[1].textContent;
// outpu = parent.childNodes[1].nodeName;
// outpu = parent.childNodes[3].textContent;
// outpu = parent.childNodes[3].innerHTML;
// outpu = parent.childNodes[3].outerHTML;
// outpu = parent.childNodes[3].innerText = 'OnE';
// outpu = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild = `HeLlO`;

const child = document.querySelector('#child');

output = child.parentNode;
output = child.parentElement;

// child.parentNode.style.backgroundColor = `#ccc`;
child.parentNode.style.padding = `1rem`;

const secondItem = document.querySelector('#child:nth-child(2)');

// output = secondItem.nextSibling.style.color = 'red';

console.log(output);

// # 2. **Selecting DOM Elements**
//    - **Methods of Selection**
//      - `document.getElementById()`
//      - `document.getElementsByClassName()`
//      - `document.getElementsByTagName()`
//      - `document.querySelector()`
//      - `document.querySelectorAll()`
//    - **Element vs. Node Selection**
//      - Understanding the difference between selecting elements and nodes.

console.log(`003 The Query Selector`);

let para;
// let para = document.querySelector('.error').outerHTML;
// para = document.querySelectorAll('.error').innerHTML;
// para = document.querySelector('p').innerHTML;
// para = document.querySelector('.error-2').innerHTML;
// para = document.querySelector('div.error').innerHTML;
// para = document.querySelector('#test').innerHTML;
para = document.querySelectorAll('p');

// console.log(para[0].innerHTML);

para.forEach((par) => {
  console.log(par);
});

para = document.querySelectorAll('.error');

console.log(para);

para.forEach((par) => {
  console.log(par);
});

console.log(`004 Other Ways to Query the DOM`);

// Get an element by ID
const title = document.getElementById('title');
console.log(title.innerText);

let errors = document.getElementsByClassName('error');
console.log(errors[1]);

errors = document.querySelectorAll('.error');

errors.forEach((err) => {
  console.log(err);
});

let parag = document.getElementsByTagName(`p`);
console.log(parag);

parag.forEach((paras) => {
  console.log(paras);
});

console.log(`0070_Document_Element_Properties `);
