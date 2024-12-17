//! Removing Elements

//*

//* Under the Add Item button. Add a new button with a id `removeItemButton`. Declare a variable the selects it 
const removeItemButton = document.querySelector(`button.removeItemButton`)

console.log(removeItemButton)

//* Add an event listener to `removeItemButton` that whiled clicked remove the last `li` item using `removeChild`
removeItemButton.addEventListener('click', () => {
  const ul = document.getElementsByTagName(`ul`)[0]
  let li = document.querySelector(`li:last-child`)

  li.textContent = addItemInput.value
  ul.removeChild(li)
})

//* Add an event listener to `removeItemButton` that whiled clicked remove the 1st `li` item using `removeChild`
const removeItemButton1st = document.querySelector(`button.removeItemButton1st`)
removeItemButton1st.addEventListener('click', () => {
  const ul = document.getElementsByTagName(`ul`)[0]
  let li = document.querySelector(`li:first-child`)

  li.textContent = addItemInput.value
  ul.removeChild(li)
})

//TODO : Using `remove()` and `parentNode.removeChild()`

//* Declare a variable that selects the `p` tag with `myParagraph` id
let paragraph = document.querySelector(`#myParagraph`)

//* Declare a variable that selects parent node of `paragraph` element. Use the variable to remove the paragraph element
let parent = paragraph.parentNode
parent.removeChild(paragraph)

//* Create a feature that, while hovering over a list item. Turn the text uppercase.
// const listItem = document.querySelector(`ul`)

// listItem.addEventListener('mouseover', e => {
//   if (e.target.tagName == 'LI') {
//     e.target.textContent = e.target.textContent.toLocaleUpperCase()
//   }
// })
// listItem.addEventListener('mouseout', e => {
//   if (e.target.tagName == 'LI') {
//     e.target.textContent = e.target.textContent.toLocaleLowerCase()
//   }
// })

//* Now preserve the original case
// Save the original text in a data attribute before changing it
// const listItem = document.querySelector(`ul`)
// listItem.addEventListener('mouseover', e => {
//   if (e.target.tagName === 'LI') {
//     if (!e.target.dataset.originalText) {
//       e.target.dataset.originalText = e.target.textContent; // Store original text
//     }
//     e.target.textContent = e.target.textContent.toLocaleUpperCase();
//   }
// });

// listItem.addEventListener('mouseout', e => {
//   if (e.target.tagName === 'LI') {
//     if (e.target.dataset.originalText) {
//       e.target.textContent = e.target.dataset.originalText; // Restore original text
//     }
//   }
// });

//* Remove list item while clicked (Use parentNode)
// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'LI') {
//     let li = e.target
//     let ul = li.parentNode

//     ul.removeChild(li)
//   }
// });

//* Create a feature, Turn cursor into pointer white over list item
// listItem.addEventListener('mouseover', e => { 
//   let li = e.target
//   li.style.cursor = 'pointer'
// })

//* Create a button with id `removeAllItemButton` that removes all item 
// const resetButton = document.querySelector('.removeAllItemButton')

// resetButton.addEventListener('click', e => {
//     if (e.target.tagName === 'LI') {
//     let li = e.target
//     let ul = li.parentNode

//     ul.removeChild(li)
//   }
// })

//* Add a button on each `li` now rather than clickig on list item, click on the button to remove the `li`
// const listItem = document.querySelector(`ul`)
// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     let li = e.target.parentNode
//     let ul = li.parentNode

//     ul.removeChild(li)
//   }
// });

//* Add another butto to `li` with a class `up` Also add a class to `remove` button. Make sure only pressing `remove` button removes the li
// const listItem = document.querySelector(`ul`)
// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     if (e.target.className == 'remove') {
//       let li = e.target.parentNode
//       let ul = li.parentNode
      
//       ul.removeChild(li)
//     }
//   }
// });

//* Add functionality, while pressing `up` button it puts the li 1 li up
// const listItem = document.querySelector(`ul`)
// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     if (e.target.className == 'remove') {
//       let li = e.target.parentNode
//       let ul = li.parentNode
      
//       ul.removeChild(li)
//     }
//     if (e.target.className == 'up') {
//       let li = e.target.parentNode
//       let previousLi = li.previousElementSibling
//       let ul = li.parentNode

//       ul.insertBefore(li, previousLi)
//     }
//   }
// });

//* Add functionality, while pressing `down` button it puts the li 1 li down
// const listItem = document.querySelector(`ul`)
// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     if (e.target.className == 'remove') {
//       let li = e.target.parentNode
//       let ul = li.parentNode
      
//       ul.removeChild(li)
//     }
//     if (e.target.className == 'up') {
//       let li = e.target.parentNode
//       let previousLi = li.previousElementSibling
//       let ul = li.parentNode

//       ul.insertBefore(li, previousLi)
//     }
//     if (e.target.className == 'down') {
//       let li = e.target.parentNode
//       let nextLi = li.nextElementSibling
//       let ul = li.parentNode
      
//       ul.insertBefore(nextLi, li )
//     }
//   }
// });

//* While the `li` reaching the top or bottom it either it rotating from bottom or getting an error like `Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': parameter 1 is not of type 'Node'.` Fix it!
// const listItem = document.querySelector(`ul`)

// listItem.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     if (e.target.className == 'remove') {
//       let li = e.target.parentNode
//       let ul = li.parentNode
      
//       ul.removeChild(li)
//     }
//     if (e.target.className == 'up') {
//       let li = e.target.parentNode
//       let previousLi = li.previousElementSibling
//       let ul = li.parentNode

//       if (previousLi) {
//         ul.insertBefore(li, previousLi)
//       }
//     }
//     if (e.target.className == 'down') {
//       let li = e.target.parentNode
//       let nextLi = li.nextElementSibling
//       let ul = li.parentNode
      
//       if (nextLi) {
//         ul.insertBefore(nextLi, li); 
//       }
//     }
//   }
// });

//* Remove All the buttons from the `li`. Create a function that create those element and append them inside an `li`

function attachListItemButton(li) {
  let up = document.createElement(`button`)
  up.className = `up`
  up.textContent = `⬆️`
  li.appendChild(up)

  let down = document.createElement(`button`)
  down.className = `down`
  down.textContent = `⬇️`
  li.appendChild(down)

  let remove = document.createElement(`button`)
  remove.className = `remove`
  remove.textContent = `❌`
  li.appendChild(remove)
}


//* Now add the function to the Add Item Button
addItemButton.addEventListener('click', () => {
  const ul = document.getElementsByTagName(`ul`)[0]
  let li = document.createElement(`li`)

  li.textContent = addItemInput.value  
  attachListItemButton(li)
  ul.appendChild(li)

  addItemInput.value = ``
})

//* Make sure every `li` has all the buttons
const lis = document.querySelector('ul').children

for (let i = 0; i < lis.length; i++) {
  attachListItemButton(lis[i])
}

//* Declare 2 variables that Selects the 1st & last `li` using element child. Use them them to change background color  
const firstListItem = document.querySelector(`ul`).firstElementChild
const lastListItem = document.querySelector(`ul`).lastElementChild

console.log(firstListItem, lastListItem)

firstListItem.style.background = `red`
lastListItem.style.background = `yellow`

//* Now make Sure the `up` button is diabled on the top item & the `down`button is disabled on the bottom
const listItem = document.querySelector(`ul`);

// Function to update button states
function updateButtonStates() {
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach((li, index) => {
    const upButton = li.querySelector('.up');
    const downButton = li.querySelector('.down');

    // Enable or disable the up button
    if (upButton) {
      upButton.disabled = index === 0; // Disable if it's the first item
    }

    // Enable or disable the down button
    if (downButton) {
      downButton.disabled = index === listItems.length - 1; // Disable if it's the last item
    }
  });
}

listItem.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'remove') {
      let li = e.target.parentNode;
      let ul = li.parentNode;

      ul.removeChild(li);
      updateButtonStates(); // Update buttons after removal
    }

    if (e.target.className === 'up') {
      let li = e.target.parentNode;
      let previousLi = li.previousElementSibling;
      let ul = li.parentNode;

      if (previousLi) {
        ul.insertBefore(li, previousLi);
        updateButtonStates(); // Update buttons after moving up
      }
    }

    if (e.target.className === 'down') {
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;

      if (nextLi) {
        ul.insertBefore(nextLi, li); // Move li below nextLi
        updateButtonStates(); // Update buttons after moving down
      }
    }
  }
});

// Call updateButtonStates on page load to initialize button states
document.addEventListener('DOMContentLoaded', () => {
  updateButtonStates();
});


// output = parent.firstChild;
// output = parent.lastChild = `HeLlO`;
// child.parentNode.style.backgroundColor = `#ccc`;
// child.parentNode.style.padding = `1rem`;
// output = secondItem.nextSibling.style.color = 'red';


// const article = document.querySelector(`article`);

// console.log(article.children);

// console.log(Array.from(article.children));

// console.log(article.children);

// Array.from(article.children).forEach((item) => {
//   item.classList.add(`article-element`);
// });

// From the p tag's nodelist print the 2nd p tag's content  4️⃣
// console.log(all_P_Tags[1])