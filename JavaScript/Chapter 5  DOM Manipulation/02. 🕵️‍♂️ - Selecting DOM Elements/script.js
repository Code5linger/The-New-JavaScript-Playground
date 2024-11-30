
// DOM Node Types

// 12
// Insert Image

// DOM Element Relationships

// Declare a variable that represents the parent node
const parent = document.querySelector(`.parent`)

// Print all the child node of the parent node 
parent.childNodes

// Print the 1st child of the parent node 
console.log(parent.childNodes[3])

// Print the text content of the 1st child 
console.log(parent.childNodes[3].textContent)

// Print the node name of the 1st child 
console.log(parent.childNodes[3].nodeName)


// Print the text content of the 1st child 
console.log(parent.childNodes[3].innerHTML)

// Print the outer HTML of the 1st child 
console.log(parent.childNodes[3].outerHTML)

// Print the inner Text of the 1st child 
console.log(parent.childNodes[3].innerText)

// Change the text content of the 1st child 
parent.childNodes[3].innerText = `Child One 👶`

// Change the text color of the 1st child 
parent.childNodes[5].style.color = `red`

// Print the 1st child of the parent node using firstChild
console.log(parent.firstChild)
// Print the last child of the parent node using lastChild
console.log(parent.lastChild)

// Insert text content before 1st child
parent.firstChild.textContent = `I hit it First`
// Insert text content after last child
parent.lastChild.textContent = `Kanye West`

// Getting parent node from child node

// Select the child node
console.log(document.querySelector(`.child`))
// Select the parent node using the child node
console.log(document.querySelector(`.child`).parentNode)
// Select the parent element using the child node
console.log(document.querySelector(`.child`).parentElement)
// Change the background color of the parent element using the child node
console.log(document.querySelector(`.child`).parentNode.style.backgroundColor = `gray`)
// Change the padding of the parent element using the child node
console.log(document.querySelector(`.child`).parentNode.style.padding = `1rem`)

// Siblings

// Selcet the 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`))
// Selcet the next sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling)
// Change the background color of the sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling.style.backgroundColor = `teal`)
// Selcet the prevous sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).previousSibling)
// Change the background color of the previous sibling of 2nd chid using the child element
console.log(document.querySelector(`.child:nth-child(2)`).previousSibling.style.backgroundColor = `red`)



const secondChild = document.querySelector(`.child:nth-child(2)`)

secondChild.addEventListener('click', () => {
    secondChild.style.backgroundColor = `yellow`
})