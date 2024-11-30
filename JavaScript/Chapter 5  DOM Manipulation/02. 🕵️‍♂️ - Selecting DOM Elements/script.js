
// DOM Node Types

// 12
// Insert Image

// DOM Element Relationships

const parent = document.querySelector(`.parent`)

parent.childNodes

console.log(parent)
console.log(parent.childNodes)

console.log(parent.childNodes[3])
console.log(parent.childNodes[3].textContent)
console.log(parent.childNodes[3].nodeName)
console.log(parent.childNodes[3].innerHTML)
console.log(parent.childNodes[3].outerHTML)

console.log(parent.childNodes[3].innerText)

parent.childNodes[3].innerText = `Child One 👶`
parent.childNodes[5].style.color = `red`

console.log(parent.firstChild)
console.log(parent.lastChild)

parent.firstChild.textContent = `I hit it First`
parent.lastChild.textContent = `Kanye West`

// Getting parent node from child node



console.log(document.querySelector(`.child`))
console.log(document.querySelector(`.child`).parentNode)
console.log(document.querySelector(`.child`).parentElement)
console.log(document.querySelector(`.child`).parentNode.style.backgroundColor = `gray`)
console.log(document.querySelector(`.child`).parentNode.style.padding = `1rem`)

// Siblings

console.log(document.querySelector(`.child:nth-child(2)`))
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling)
console.log(document.querySelector(`.child:nth-child(2)`).nextSibling.style.backgroundColor = `teal`)