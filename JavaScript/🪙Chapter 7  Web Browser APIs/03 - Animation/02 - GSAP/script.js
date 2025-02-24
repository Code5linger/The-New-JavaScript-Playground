const progress = document.querySelector(".progress")

gsap.to(progress, {
    width: "100%",
    duration: 2,
    ease: 'power2.inOut'
})

gsap.from('h1', {
    y: -200,
    duration: 2,
    ease: "elastic.out(1, 0.3)"
})

gsap.to(progress, {
    height: '100%',
    top: 0,
    delay: 2,
    background: 'white'
})