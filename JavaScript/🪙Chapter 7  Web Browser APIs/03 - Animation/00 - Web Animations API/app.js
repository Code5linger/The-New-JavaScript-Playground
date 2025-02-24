const button = document.querySelector('button')
const nav = document.querySelector('nav')
const p = document.querySelector('p')

button.addEventListener('click', () => {
    nav.classList.toggle('navSlide')
    p.classList.toggle('fade')
})