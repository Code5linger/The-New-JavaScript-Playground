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

// console.log(document.getElementById('demo'));
// console.log(document.getElementById('main'));
// const main = document.getElementById('main');
// main.innerHTML = `<h1>Main say Hello</h1>`;

// const title = document.getElementById('title');
// console.log(title.innerText);

// let errors = document.getElementsByClassName('error');
// console.log(errors[1]);

// let parag = document.getElementsByTagName(`p`);
// console.log(parag);
// parag.forEach((paras) => {
//   console.log(paras);
// });

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

console.log(document.getElementById(`app-id`));
// console.log(document.getElementById(`app-id`).id);
// console.log(document.getElementById(`app-id`).className);
// console.log(document.getElementById(`app-id`).getAttribute(`id`));

// Put all the p tags with same attribute inside a variable as HTMLCollection using getElementsByClassName    5️⃣
const errorClass = document.getElementsByClassName(`error`)
console.log(errorClass)

// document.querySelector(`#main p`).innerHTML = `Sup!`;
// const child = document.querySelector('#child');

// const parent = document.querySelector('.parent');

// const ul = document.querySelector(`ul`);

// // console.log(ul);
// // ul.remove();

// const items = document.querySelectorAll(`li`);

// items.forEach((item) => {
//   item.addEventListener(`click`, (event) => {
//     // event.target.style.textDecoration = `line-through`;
//     event.target.remove();
//   });
// });

// const button = document.querySelector(`button`);

// button.addEventListener(`click`, () => {
//   // ul.innerHTML += `<li>New Item</li>`;
//   const li = document.createElement(`li`);
//   li.textContent = `new**`;
//   // ul.append(li);
//   ul.prepend(li);
// });

// const listItem = document.querySelectorAll(`.item`);

// console.log(listItem);

// listItem.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.style.background = `crimson`;
//   }

//   if (index === 0) {
//     // item.innerText += ` teal`;
//     // item.innerHTML
//   }
// });


// outpu = parent.childNodes;
// outpu = parent.childNodes[1].textContent;
// outpu = parent.childNodes[1].nodeName;
// outpu = parent.childNodes[3].textContent;
// outpu = parent.childNodes[3].innerHTML;
// outpu = parent.childNodes[3].outerHTML;
// outpu = parent.childNodes[3].innerText = 'OnE';
// outpu = parent.childNodes[5].style.color = 'red';

// output = child.parentNode;
// output = child.parentElement;

// const titleX9 = document.querySelector(`h2`);

// console.log(titleX9.parentElement);
// console.log(titleX9.parentElement.parentElement);
// console.log(titleX9.nextElementSibling);
// console.log(titleX9.previousElementSibling);

// console.log(titleX9.nextElementSibling.parentElement.children);

// const secondItem = document.querySelector('#child:nth-child(2)');
// let para;
// let para = document.querySelector('.error').outerHTML;
// para = document.querySelectorAll('.error').innerHTML;
// para = document.querySelector('p').innerHTML;
// para = document.querySelector('.error-2').innerHTML;
// para = document.querySelector('div.error').innerHTML;
// para = document.querySelector('#test').innerHTML;
// para = document.querySelectorAll('p');

// querySelector
// console.log(document.querySelector(`h1`));
// console.log(document.querySelector(`#new-id`));
// console.log(document.querySelector(`.container`));
// console.log(document.querySelector(`input[type='text']`));
// console.log(document.querySelector(`li:nth-child(2)`));

// console.log(para[0].innerHTML);

// para.forEach((par) => {
//   console.log(par);
// });

// para = document.querySelectorAll('.error');

// console.log(para);

// para.forEach((par) => {
//   console.log(par);
// });

// errors = document.querySelectorAll('.error');

// errors.forEach((err) => {
//   console.log(err);
// });



// const forms = Array.from(document.forms);

// // console.log(typeof output);
// // HTML Collection
// // console.log(forms);

// forms.forEach((form) => {
//   console.log(form);
// });

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

