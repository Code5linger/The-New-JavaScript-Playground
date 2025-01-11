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

buyButtons.forEach(item => {
  item.addEventListener('click', () => console.log( `${item.textContent } 👆`))
})

//* Create 10 cards. Ech card with h2 a button & an Image. where the image is coming from an api

//* Create a popup with a Image & its description. The Image should come from an API. The dscription is from the parent card. Clicking the Button of any card will open a popup.

const cardButtons = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')

const handleCardButtonClick = (e) => {
  const button = e.currentTarget
  const card = button.closest('.card')

  const imgSrc = card.querySelector('img').src 
  const desc = card.dataset.description

  const name = card.querySelector('h2').textContent

  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt=${name}/>
    <p>${desc}</p>
     
  `;
  modalOuter.classList.add('open')
}

cardButtons.forEach(item => item.addEventListener('click', handleCardButtonClick))

//* Clicking anywhere outside the popup will close the popup

const closeModal = () => {
  modalOuter.classList.remove('open')
}

modalOuter.addEventListener('click', (e) => {
  const isOutsite = e.target.closest('.modal-inner')

  if (!isOutsite) {
    closeModal()
  }
})

//* Pressing the `Escape` key will close the popup

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal()
  }
})

//* In HTML add a div with large text content that could represnt `terms-and-conditions`. Add a disabled button in the end

//* Enable the button when the end of the text is reached

//* Now disable the button if the user scroll up

//* Keeping the button stats change take up resources. Make it permanetly enable when the end of the text is reached at the best way possible

//* Create a ul with 4 li. Add a h1 at top & a button at bottom. On click, clicked item would get a strikethrough. 

const buttonTodo = document.querySelector(`.btn-todo`)
const items = document.querySelectorAll(`li`)
const item = document.querySelector(`li`)

items.forEach(item => {
  item.addEventListener(`click`, (e) => {

    // console.log(e.target)
    // e.target.style.textDecoration = `line-through`
    e.target.remove()
  })
})


//* Create a tab

//! Form Events

//* Create a form input box with a button that submits it

//* When we submit a form it refreshes the page. Prevent it 
const form = document.querySelector('.signup-form')

// form.addEventListener('submit', e => {
//   e.preventDefault()
// })

//* Log the inputs || Get the inputs by creating an input variable 
const username = document.querySelector('#username')

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   console.log(username.value)
// })

//* Log the inputs || Get the inputs without creating an input variable
// form.addEventListener('submit', e => {
//   console.log(form.username.value)
// })

//* Change the id (id="username") attribute to name (name="username"). Get the inputs without creating an input variable
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   console.log(form.username.value)
// })

//* In browser, preserve log

//* Let's say you have not changed the default behaviour of the browser. Show a prompt that confirems weather the page should be changed
// form.addEventListener('submit', e => {
//   preventDefault()
//   const isPageChanged = confirm('Change pages already?')

//* If pressed yes, it will take you to the link
// if (isPageChanged) {
//   window.location = e.currentTarget.href
//   }
// })

//* Create control flow where it only change the page when you confirm yes. if not the page stays the same
// form.addEventListener('submit', e => {
//   const shouldChangePage = confirm('Change Page?')
//   if (!shouldChangePage) {
//     e.preventDefault()
//   }
// })
 
//* Add a checkbox to page. If the box is clicked log `on`
// const checkbox = document.querySelector('#checkbox')

// form.addEventListener('submit', e => {
//   e.preventDefault()

//   console.log(e.currentTarget.checkbox.value)
// })

//* I 'Sakib' was typed it would say `Boss??` else it would log inserted value & checkbox
form.addEventListener('submit', e => {
  const name = e.currentTarget.username.value

  if (name.includes('Sakib')) {
    console.log('Boss?')
    if (e.currentTarget.checkbox.checked) {
      console.log(e.currentTarget.checkbox.value)
    }
    e.preventDefault()
  } else {
    console.log(e.currentTarget.username.value)
    if (e.currentTarget.checkbox.checked) {
      console.log(e.currentTarget.checkbox.value)
      e.preventDefault()
    } else {
      console.log(e.currentTarget.checkbox.value)
      e.preventDefault()
    }
  }
})

//* Lets createa `keyup` event. When the key is up. log how many time the key was pressed
const logEvent = (e) => console.log(e.type)

// form.username.addEventListener('keyup', logEvent)

//* Now log what button was pressed 
const keyLog = e => console.log(e.currentTarget.value)

form.username.addEventListener('keyup', logEvent)

//* Log when the key was down
form.username.addEventListener('keydown', keyLog)

//* Log when the focus event was triggered 
form.username.addEventListener('focus', () => console.log('Focus'))

//* Log when the blur event was triggered 
form.username.addEventListener('blur', () => console.log('Blur'))
