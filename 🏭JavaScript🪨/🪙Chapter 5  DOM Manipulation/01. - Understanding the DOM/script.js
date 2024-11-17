//  JavaScript DOM Manipulation Roadmap

console.log('#1 - Understanding the DOM');

// # 1. **Understanding the DOM**

//    - **What is the DOM?**
//      - Definition and structure of the Document Object Model.
//      - How the browser interprets HTML and creates a DOM tree.

//    - **DOM vs. HTML**
//      - Differences between the DOM and the HTML structure.

//    - **Browser DevTools**
//      - Using DevTools to inspect the DOM and view changes in real-time.

// # 2. **Selecting DOM Elements**
//    - **Methods of Selection**
//      - `document.getElementById()`
//      - `document.getElementsByClassName()`
//      - `document.getElementsByTagName()`
//      - `document.querySelector()`
//      - `document.querySelectorAll()`
//    - **Element vs. Node Selection**
//      - Understanding the difference between selecting elements and nodes.

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

console.log('20 - The DOM - Introduction to the document');

console.log(window);
console.log(window.location); // +
console.log(location);
console.log(innerHeight);
console.log(innerWidth);
console.log(document);
console.log(navigator);

console.log('002 The DOM Explained');

console.log(document.URL);
console.log(document.getElementById('demo'));
console.log('DOM Tree Map, Root Node & Text Node');
