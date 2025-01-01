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

//* 
