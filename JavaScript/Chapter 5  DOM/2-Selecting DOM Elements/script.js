//! Element vs. Node Selection

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
