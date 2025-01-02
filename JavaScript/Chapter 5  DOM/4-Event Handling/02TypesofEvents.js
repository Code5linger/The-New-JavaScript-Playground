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
document.addEventListener(`wheel`, e => console.log(`X = ${e.pageX}, Y = ${e.pageY}`))

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