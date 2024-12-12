'use strict'

console.log('1-Understanding the DOM')

/**
 *!1.**Understanding the DOM**
   - **What is the DOM?**   //TODO: Done
     - Definition and structure of the Document Object Model.   //*✅
     - How the browser interprets HTML and creates a DOM tree.  //*✅
   - **DOM vs. HTML**       //TODO: Done
     - Differences between the DOM and the HTML structure.      //*✅
   - **Browser DevTools**
     - Using DevTools to inspect the DOM and view changes in real-time.             //TODO: 💫
 */

// **What is the DOM?**
// DOM is created by the browser when an HTML document loads inside it.
// The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows developers to manipulate elements, attributes, and styles dynamically using JavaScript.


// **How developers manipulate a HTML document inside a browser
//  When a HTML document is loaded inside a browser, the browser creates an object which modes the loaded HTML document. The object is called document object. The document object is the root of the DOM hierarchy. It provides methods and properties to access and manipulate its elements, structure, and content.

// **Differences between the DOM and the HTML structure.
//  1. Definition
/*  HTML Structure: The written code (markup) that defines the static content and layout of a webpage. It's a textual format that browsers interpret to render the initial webpage.
DOM: The in-memory representation of the HTML document, created by the browser. It is an object-based, hierarchical tree that allows for dynamic interactions with the page.
*/
// 2. Format
/*  HTML Structure: Text-based and static.
    DOM Representation: Tree-like structure in memory. 
*/

//  3. Nature
/*  HTML Structure: Static and unchangeable without editing the source file manually.
DOM: Dynamic and mutable; JavaScript can manipulate the DOM in real-time. */

// 4. Role
/* HTML Structure: Acts as the blueprint for the webpage. It describes elements, their hierarchy, and basic attributes.
DOM: Acts as the live, working model of the webpage in the browser. It reflects the current state of the page, including any updates made by scripts or user interactions.*/

// 5. Accessibility
/*  HTML Structure: Exists as a file (e.g., .html), usually accessible via a code editor or browser view-source feature.
DOM: Exists in the browser's memory and can be accessed or modified using tools like the browser's Developer Tools or JavaScript APIs.  */

// 6. Modifiability
/*  HTML Structure: Cannot be modified directly via JavaScript.
DOM: Can be accessed and modified programmatically using JavaScript, enabling real-time changes to the content, style, or structure of the webpage. */

// 7. Real-Time Updates
/*  HTML Structure: Does not change after the page is loaded unless the source file is edited.
DOM: Updates dynamically based on JavaScript execution, user interactions, or asynchronous data (like API responses). */

