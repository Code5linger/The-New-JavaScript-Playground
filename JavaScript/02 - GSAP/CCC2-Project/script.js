gsap.registerPlugin(MotionPathPlugin);

// let select = e => document.querySelector(e);
// let selectAll = e => document.querySelectorAll(e);

// let progressSlider = select("#progressSlider");
// let time = select("#time");
// let pause = select("#pause");

// let animation = gsap.to("#herman", {
//   duration: 6,
//   ease: "none",
//   motionPath: {
//     path: "#motionpath",
//     align: "#motionpath"
//   },
//   onComplete: () => pause.innerHTML = "play"
// });

// pause.addEventListener("click", ()=> {
//   animation.paused(!animation.paused());
//   if (animation.progress() === 1) {
//     animation.restart();
//   }
//   pause.innerHTML = animation.paused() ? "play" : "pause";
// });

let select = e => document.querySelector(e)
let selectAll = e => document.querySelectorAll(e)

let pause = select('#pause')

let animation = gsap.to('#herman', {
    duration: 6,
    ease: "none",
    motionPath: {
        path: "#motionpath",
        align: "#herman"
    }
})

// animation.pause()
// console.log(animation.paused());

animation.progress(.69).pause()
// console.log(animation.progress());

// console.log(animation.time(3));
// console.log(animation.duration(3));
// console.log(animation.timeScale(3));
console.log(animation.reversed(true));