const terms = document.querySelector(`.terms-and-conditions`)
const watch = document.querySelector(`.watch`)
const button = document.querySelector(`.accept`)
    

const obCallback = (payload) => {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false
        console.log(`Button Activeted!`)
    } else {
        button.disabled = true
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1
})

ob.observe(terms.lastElementChild)

