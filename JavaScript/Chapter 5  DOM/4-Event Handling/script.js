'use script'

console.log(`4-Event Handling`)

/**
 * !4. **Event Handling**
   - **Understanding Events**
     - What are events? Bubbling vs. capturing.
   - **Adding Event Listeners**
     - Using `addEventListener()` and `removeEventListener()`
     - Event delegation: how to manage events on dynamically added elements.
   - **Common Events**
     - Click, change, input, focus, blur, and more.

 */

//! 4 Event Handling
 
/**
 * TODO Common Events
 * * click
 * * dblclick
 * * resize
 * * keydown, keypress, keyup
 * * mouseover
 * * mousedown
 * * mouseup
 * * mouseover
 * * mouseout
 * * load
 */

//! Inline Event Listener 🤮

//* Create a HTML inline onClick event

//* There is only so much code can be written in inline. Replace the code with a function call
function clicker() {
  console.log('You clicked button 2')
}

//! JavaScript Event Listener 👍
//TODO onClick

//* Using onClick 🤮, While clicking button two, log `You clicked button 2`
// document.getElementById(`two`).onclick = clicker

//* Using addEventListener 👍, While clicking button two, log `You clicked button 2`
// document.getElementById(`two`).addEventListener('click', clicker)

//* Why we should use addEventListener, insted of onClick

//* Add 2 event listenrs (log & alert) to button 2 using onClick
// function clicker2() {
//   alert('You clicked button 2 again')
// }

// document.getElementById(`two`).onclick = clicker
// document.getElementById(`two`).onclick = clicker2

//* Add 2 event listenrs (log & alert) to 2 using addEventlistener
document.getElementById(`two`).addEventListener('click', clicker)
// document.getElementById(`two`).addEventListener('click', clicker2)

//* Create 2 button with id `one` & `two`

//* While pressing button one, log `You clicked button 1`
document.getElementById(`one`).addEventListener(`click`, () => console.log(`You clicked button 1`))

//* While hoveing button two, log `You hoverd button 2`
document.getElementById(`two`).addEventListener(`mouseover`, () => console.log(`You hoverd button 2`))

//TODO Info - Alert is a blocking operation.

//! Challenge - Light & Dark Theme 
document.getElementById(`Theme`).addEventListener('click', () => {
  document.body.classList.toggle(`lightTheme`)
})

//! Custom Event

//* Create a custom event. That shows the current time
document.body.addEventListener(`timeEvent`, stateTime)

function stateTime(e) {
  console.log('Event time is ' + e.detail)
}

let myEvent = new CustomEvent(`timeEvent`, {
  'detail': new Date()
})

document.body.dispatchEvent(myEvent)

//! Remove event listener 

//* Remove an eventListener from from the button 2 after 5 sec
setTimeout(() => document.getElementById(`two`).removeEventListener('click', clicker), 5000);


//! Autometic event trigger

//* Trigger an event autometically after 5 sec 
setTimeout(() => document.getElementById(`one`).click(), 5000)

//! Challenge - Todo list

//* Create a list item.

//* Remove all item using innerHTML
const list = document.querySelector('ul')
const listItem = document.querySelectorAll('li')

// list.innerHTML = ``

//* Remove all item using forEach
// listItem.forEach(item => {
//   console.log(item.textContent)
//   item.remove()
// })

//* Remove all item using while loop & firstchild
while (list.firstChild) {
  list.removeChild(list.firstChild)
}

