//! getElementById
// console.log(document.getElementById('demo'));

// console.log(document.getElementById('main'));

// const main = document.getElementById('main');

// main.innerHTML = `<h1>Main say Hello</h1>`;

// const title = document.getElementById('title');

// console.log(title.innerText);

// Print a HTML element node's text inside console using getElementById method     1️⃣3️⃣5️⃣8️⃣
// console.log(document.getElementById('intro-text'))

// Print a HTML text node's text inside console using getElementById method     1️⃣3️⃣5️⃣8️⃣
// console.log(document.getElementById('intro-text').innerText)

// console.log(document.getElementById('intro-text').id)

// document.getElementById('intro-text').id = `New ID`
// console.log()

// document.getElementById('intro-text').title = `Shopping🛒`
// console.log()

// document.getElementById('intro-text').setAttribute(`class`, `title`)
// console.log()

// console.log(document.getElementById('intro-text').className)

// console.log(document.getElementById('intro-text').getAttribute(`id`))

// Put a HTML text node element inside a variable. Using the variable change the HTML using innerHTML     1️⃣3️⃣5️⃣8️⃣
const introText = document.getElementById(`intro-text`)
introText.innerHTML = `<h1>XD</h1>`

console.log(document.getElementById(`app-id`));
// console.log(document.getElementById(`app-id`).id);
// console.log(document.getElementById(`app-id`).className);
// console.log(document.getElementById(`app-id`).getAttribute(`id`));


//! getElementsByClassName
// let errors = document.getElementsByClassName('error');
// console.log(errors[1]);

// Put all the p tags with same attribute inside a variable as HTMLCollection using getElementsByClassName    5️⃣
const errorClass = document.getElementsByClassName(`error`)
console.log(errorClass)

// what is the difference between getElementById and getElementsByClassName 5️⃣
// - **`getElementById`**: Selects a single element with a specific ID. Returns the element or `null` if not found.
// - **`getElementsByClassName`**: Selects all elements with a specific class. Returns a live HTMLCollection (can contain multiple elements).

// why getElementById returns a single element but getElementsByClassName multiple element    5️⃣
// - **`ID`**: Must be unique per HTML spec, so `getElementById` always returns one element.
// - **Class**: Can be shared by multiple elements, so `getElementsByClassName` returns all matching elements.

//! getElementsByTagName
// let parag = document.getElementsByTagName(`p`);

// console.log(parag);
// parag.forEach((paras) => {
//   console.log(paras);
// });




//! querySelector & querySelectorAll

// document.querySelector(`#main p`).innerHTML = `Sup!`;
// const child = document.querySelector('#child');

// const parent = document.querySelector('.parent');

// const ul = document.querySelector(`ul`);

// console.log(ul);
// ul.remove();

// const items = document.querySelectorAll(`li`);

// items.forEach((item) => {
//   item.addEventListener(`click`, (event) => {
    // event.target.style.textDecoration = `line-through`;
//     event.target.remove();
//   });
// });

// const button = document.querySelector(`button`);

// button.addEventListener(`click`, () => {
  // ul.innerHTML += `<li>New Item</li>`;
//   const li = document.createElement(`li`);
//   li.textContent = `new**`;
  // ul.append(li);
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

//! Element vs. Node Selection

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


//TODO: 💫
// const forms = Array.from(document.forms);

// console.log(typeof output);
// HTML Collection
// console.log(forms);

// forms.forEach((form) => {
//   console.log(form);
// });






