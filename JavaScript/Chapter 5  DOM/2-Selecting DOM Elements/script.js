//! querySelectorAll
// const items = document.querySelectorAll(`li`);

// document.querySelectorAll('p');

// const listItem = document.querySelectorAll(`.item`);

// para = document.querySelectorAll('.error');

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