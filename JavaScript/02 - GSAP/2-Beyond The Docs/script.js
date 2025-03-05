gsap.to('.fred', { x:300, y:300, scale: 3, duration:2, onComplete: onComplete, onCompleteParams: ['Test', 69]})

function onComplete(msg, num) {
    console.log(msg, num);
}