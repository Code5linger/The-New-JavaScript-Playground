/*
#### 2. Types of Events

   - Keyboard Events
     - `keydown`, `keyup`, `keypress`
   - Form Events
     - `input`, `change`, `submit`, `focus`, `blur`
   - Window Events
     - `load`, `unload`, `scroll`, `resize`, `error`
   - Touch Events
     - `touchstart`, `touchmove`, `touchend`, and `touchcancel` (for mobile devices)
*/

//! Mouse Events
- `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `contextmenu`
 
//* Create 10 p tags, 1st one with class copyMe 2nd one with box.

//* Trigger an alert if someone is trying to copy the 1st p
const copy = document.querySelector(`.copyMe`)

copy.addEventListener(`copy`, () => alert(`Copying not allowed!`))

//* Replace the p with box class with mouse pointer x & y offset 
const box = document.querySelector(`.box`)

box.addEventListener(`mousemove`, e => box.textContent = `X = ${e.offsetX}, Y = ${e.offsetY}`)

//* Log the mouse wheel scroll x & y
// document.addEventListener(`wheel`, e => console.log(`X = ${e.pageX}, Y = ${e.pageY}`))

//*  Create a button, on click that open a popup & a close button that close it 
const button = document.querySelector('#popup')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

close.addEventListener('click', () => {
  popup.style.display = 'none'
})

//* [Add functionality] Clicking anywhere outside of popup closes it
popup.addEventListener('click', () => {
  popup.style.display = 'none'
})

//* Add an image to the html

//* Declare a variable that selects the image, create a function that log `Clickd`. While clicked on image it should call the function 
const img = document.querySelector('#reddit-image')
const clicked = () => console.log(`Clicked`)

// img.addEventListener(`click`, clicked)

//* Declare a variable that selects the image, create a function that log `Double Clickd`. While clicked on image it should call the function 
// const doubleClicked = () => console.log(`Double Clicked`)

// img.addEventListener('dblclick', doubleClicked)

//* Rather than logging a text, change the background to yellow when double clicked than turn it back when double clicked again
const doubleClicked = () => {
  if (document.body.style.backgroundColor !== 'yellow') {
    document.body.style.backgroundColor = 'yellow'
  } else {
    document.body.style.backgroundColor = 'black'
  }
}

// img.addEventListener('dblclick', doubleClicked)

//* Log `Right Clicked` while right clicking over the img 
const onRightClick = () => console.log('Right Click')

// img.addEventListener('contextmenu', onRightClick)

//* Now prevent the right click 
const rightClickDisabled = () => {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('Right-click is disabled on this page.');
  });
}

// img.addEventListener('contextmenu', rightClickDisabled)

//* Log a mouse down event 
const mouseDown = () => console.log(`Mouse Down`)

// img.addEventListener('mousedown', mouseDown)

//* Log a mouse up event 
const mouseUp = () => console.log(`Mouse Up`)

// img.addEventListener('mouseup', mouseUp)

//* Log a mouse wheel event 
const mouseWheel = () => console.log(`Mouse Wheel`)

// img.addEventListener('wheel', mouseWheel)

//* Log a mouse over event 
const mouseOver = () => console.log(`Mouse Over`)

// img.addEventListener('mouseover', mouseOver)

//* Log a mouse out event 
const mouseOut = () => console.log(`Mouse Out`)

// img.addEventListener('mouseout', mouseOut)

//* Log a drag event 
const drag = () => console.log(`draged`)

// img.addEventListener('drag', drag)

//* Log when drag start 
const dragstart = () => console.log(`drag start`)

// img.addEventListener('dragstart', dragstart)

//* Log when drag end
const dragend = () => console.log(`drag end`)

// img.addEventListener('dragend', dragend)

//* Log the pointer Event
// img.addEventListener('click', (e) => {
//   console.log(e)
// })

//* Log the clicked element
// function onClick(e) {
//   console.log(e.target)
// }

// img.addEventListener('click', onClick)

//* Log the element that the event listener is attached to
// function onClick(e) {
//   console.log(e.currentTarget)
// }

// img.addEventListener('click', onClick)

//* Change the bg color of the clicked item 
function onClick(e) {
  e.target.style.backgroundColor = `crimson`
}

img.addEventListener('click', onClick)

//* Add EventListener to the body. Log the clicked element & the element that the event listener is attached to
// document.body.addEventListener('click', (e) => {
//   console.log(e.target)
//   console.log(e.currentTarget)
// })

//* Log the type of event that was triggered
// function onClick(e) {
//   console.log(e.type)
// }

// img.addEventListener('click', onClick)
//* Log when the type of event that was triggered
// function onClick(e) {
//   console.log(e.timeStamp)
// }

// img.addEventListener('click', onClick)


//* Log the X & Y position of the mouse click relative to the window
// function onClick(e) {
//   console.log(e.clientX, e.clientY)
// }

// img.addEventListener('click', onClick)

//* Log the X & Y position of the mouse click relative to the element
function onClick(e) {
  console.log(e.offsetX, e.offsetY)
}

// img.addEventListener('click', onClick)

//* Log the X & Y position of the mouse click relative to the page
function onClick(e) {
  console.log(e.pageX, e.pageY)
}

// img.addEventListener('click', onClick)

//* Log the X & Y position of the mouse click relative to the screen
function onClick(e) {
  console.log(e.screenX, e.screenY)
}

// img.addEventListener('click', onClick)

//* Add a link in html. Prevent it's default behavious & log `Link was clicked!`
document.querySelector('#link').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(`Link was clicked!`)
})

//* Print drag x & y tracking position to the page 
const ondrag = (e) => {
  document.querySelector(`#link`).textContent = `X ${e.clientX} Y ${e.clientY}`
}
img.addEventListener('drag', ondrag)

//* Create 10 buttons in HTML. Clicking each buttons log `👆`. 
const buyButtons = document.querySelectorAll('.buttons .buyButton')
console.log(buyButtons)

buyButtons.forEach(item => {
  item.addEventListener('click', () => console.log( `${item.textContent } 👆`))
})
