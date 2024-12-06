/**
 * !#### 1. Event Basics
   - What are Events
     - Introduction to events in JavaScript.
     - Different types of events (e.g., UI, keyboard, mouse, form events).
   - Event Lifecycle
     - How events are created, dispatched, and handled by the browser.
*/
// function onPress() {   //! Security Issue
//   console.log('🖱️👆 from JS')
// }
const consloeBTN = document.querySelector('#mouseClick')

function btnPress() {
  console.log('🖱️👆 from JS') 
}

function theCleaner() {
  consloeBTN.remove()
}

// consloeBTN.onclick = () => {   //! Old Way
//   console.log('🖱️👆 from JS')
// }
// * What happens if we put 2 onclik functions in same element using onclick
// consloeBTN.onclick = () => { alert('🖱️👆 from JS') }
// consloeBTN.onclick = () => { console.log('🖱️👆 from JS') }

// consloeBTN.addEventListener('click', () => { console.log('🖱️👆 from JS') }) //! New Way

// * What happens if we put 2 onclik functions in same element using addEventListener
// consloeBTN.addEventListener('click', () => { alert('🖱️👆 from JS') })
// consloeBTN.addEventListener('click', () => { console.log('🖱️👆 from JS') })

//* Chaged the inline code to external function
// consloeBTN.addEventListener('click', btnPress)

//* Remove the click event listener after 5 sec
// setTimeout(() => consloeBTN.removeEventListener('click', btnPress), 5000)

//* Autometically lunch the event
// setTimeout(() => consloeBTN.click(), 2000)

//* Remove the button from the page
// consloeBTN.addEventListener('click', theCleaner)


/**
 * !#### 2. Types of Events
   - Mouse Events
     - 
     `click`, 
     `dblclick`, 
     `mousedown`, 
     `mouseup`, 
     `mousemove`, 
     `mouseover`, 
     `mouseout`, 
     `contextmenu`
*/

const deleteBTN = document.querySelectorAll('.delete')
const listItem = document.querySelectorAll('li')
const clearAll = document.querySelector('.clearAll')

listItem.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('Item Clicked!')
    // console.log(`${e.target.textContent} Clicked!`)
    // console.log(e)
    // console.log(e.target)
    // console.log(item)
    // item.remove()
    e.target.style.background = 'crimson'
    e.target.style.textDecoration = 'line-through'
  })

})

// listItem.forEach(item => {
//   item.addEventListener('mouseover', e => {
//     e.target.setAttribute('class', 'warn') 
//   })
// })

// deleteBTN.forEach(item => {
//   item.addEventListener('click', e => {
//     e.target.parentElement.remove()
//   })
// })

// clearAll.addEventListener('click', e => {
//   listItem.forEach(item => {
// item.remove()
//   })
// })



/**
   - Form Events
   `input`,
   `change`,
   `submit`,  //* ✅
   `focus`,
   `blur`
*/
const form = document.querySelector('.signup-form')
const username = document.querySelector('#username')
const emoji = document.querySelector('#emoji')
const input = document.querySelector('input')
const usernamePattern = /^[a-zA-Z]{6,12}$/    //! Regex

form.addEventListener('submit', e => {
  // e.preventDefault()
  // console.log(username.value)           //! Ok  {With ID}
  // console.log(form.username.value)      //! Better  {With ID}
  console.log(form.user.value)          //! With name

  // console.log(emoji.value)              //! Ok  {With ID}
  // console.log(form.emoji.value)         //! Better  {With ID}
  console.log(form.emoji.value)            //! With name
})

// ! Regex

// if (usernamePattern.test(username)) {
//   console.log('Thats Valid')
// } else {
//   console.log('Invalid')
// }

/**
 * !- Keyboard Events
     `keydown`, 
     `keyup`,     //* ✅
     `keypress`
*/
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value) //! Same output
  // console.log(e.target.value)
  if (usernamePattern.test(e.target.value)) {
    console.log('✅')
    // input.classList.remove('error')    //! Old Ways 👴
    // input.classList.add('success')
    form.username.setAttribute('class', 'success')    //* Modern Way
  } else {
    console.log('❌')
    // input.classList.remove('success')      //! Old Ways 👴
    // input.classList.add('error')
    form.username.setAttribute('class', 'error')    //* Modern Way
  }
})

/**
     
   - Window Events
     - `load`, `unload`, `scroll`, `resize`, `error`
   - Touch Events
     - 
     `touchstart`, 
     `touchmove`, 
     `touchend`, and 
     `touchcancel` (for mobile devices)
*/
/**
 * !#### 3. Event Handling
   - Event Listeners
     - Adding event listeners `addEventListener()` vs. inline event handling.
     - Removing event listeners `removeEventListener()`.
     - Using options like `{ once true }` to make event listeners fire only once.
   - Event Properties
     - `event.target`, `event.currentTarget`, `event.type`
     - Mouse coordinates (`event.clientX`, `event.clientY`), key values (`event.key`, `event.code`), etc.
   - Event Object
     - Understanding and using the `Event` object properties and methods (e.g., `preventDefault()`, `stopPropagation()`).
*/
/**
 * !#### 4. Event Propagation
   - Event Bubbling and Capturing
     - Understanding the phases of event propagation (capture, target, bubble).
   - Stopping Propagation
     - Using `event.stopPropagation()` and `event.stopImmediatePropagation()`.
   - Event Delegation
     - What is event delegation, and when to use it.
     - Implementing event delegation for performance optimization in dynamic UIs.
/**
 * !#### 5. Advanced Event Types
   - Custom Events
     - Creating custom events with `CustomEvent()`.
     - Dispatching custom events with `dispatchEvent()`.
   - Debouncing and Throttling
     - Understanding and implementing debouncing and throttling for events (like scroll, resize) to improve performance.
   - Intersection Observer API
     - Detecting when elements enter or leave the viewport.
   - Mutation Observer API
     - Observing changes to the DOM, such as addedremoved elements or attribute changes.
*/
/**
 * !#### 6. Handling Asynchronous Events
   - Event Loop and Microtasks
     - Understanding the event loop, call stack, and handling asynchronous operations with events.
   - Promises and AsyncAwait with Events
     - Using asyncawait and Promises to manage asynchronous operations triggered by events.
   - JavaScript Timers
     - Working with `setTimeout` and `setInterval` for event-based timing.
*/
/**
 * !#### 7. Working with Event Listeners in Real-World Scenarios
   - Preventing Default Actions
     - Using `event.preventDefault()` to block default browser behaviors.
   - Keyboard Accessibility
     - Handling keyboard events to ensure accessibility.
   - Responsive Event Handling
     - Adapting event handling strategies for touch and mobile screens.
*/
/**
 * !#### 8. Event Performance Optimization
   - Efficient Event Binding
     - Avoiding excessive event listeners, using event delegation.
   - Optimizing Heavy Event Handlers
     - Using requestAnimationFrame for smooth animations.
     - Minimizing DOM access within event handlers.
   - Memory Management
     - Removing event listeners to avoid memory leaks in long-running applications.
*/
/**
 * !#### 9. Testing and Debugging Events
   - Debugging Events in DevTools
     - Using DevTools to inspect and debug event listeners.
   - Testing Event Handlers
     - Unit testing events with testing libraries like Jest or Mocha.
     - Simulating events in testing environments (e.g., `simulate` in React Testing Library).
*/
/**
 * !#### 10. Best Practices and Patterns
   - Modularizing Event Handlers
     - Organizing event handler code for better maintainability.
   - Minimizing Global Event Listeners
     - Avoiding event listeners on global objects like `window` unless necessary.
   - Accessibility
     - Implementing accessible events for improved user experience (e.g., keyboard navigation).
   - Event-Driven Architecture (EDA)
     - Leveraging EDA patterns for large-scale applications, using pubsub or event emitters.
*/
/**
 * !#### 11. Practice Projects
   - Drag and Drop
     - Building a drag-and-drop interface with mousetouch events.
   - Form Validation
     - Real-time form validation with custom events and async handling.
   - Infinite Scroll
     - Using Intersection Observer to implement infinite scroll.
   - Keyboard Shortcut App
     - Creating an app that responds to custom keyboard shortcuts.
 */

/**
 * * Source 1️⃣
 * * Source 2️⃣
 * * Source 3️⃣
 * * Source 4️⃣
 * * Source 5️⃣
 */


