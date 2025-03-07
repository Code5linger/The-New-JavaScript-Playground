// gsap.to(".fred", { scale: 3, duration: 2, onComplete: finish, onCompleteParams:["Tween Parameter!", 69] })

// function finish(parameter, number) {
//     console.log(parameter, number);
// }

// Callback Scope
// gsap.to(".fred", { scale: 3, onComplete: onCompleteFunction })

// function onCompleteFunction() {
//     console.log(this.duration());
// }

// Arrow function callbacks
// gsap.to(".fred", { scale: 3, onComplete: () => demo })

// function onCompleteFunction() {
//     console.log(this.targets()[0]);
// }

// const demo = () => console.log(this.duration())

// demo()

// Changing Callback Scope
// class Fred{
//     constructor() {
//         this.animation = gsap.to(".fred", {
//             scale: 4,
//             onComplete: onCompleteFunction,
//             callbackScope: this
//         })
//         this.message = "I am Fred!"

//         function onCompleteFunction() {
//             console.log(this.animation.duration());
//         }
//     }
// }

// let demo = new Fred()

// Callbacks

// Pass parameters into a callback
// function onCompleteFunction(parameterText, parameterNumber) {
//     console.log(parameterText, parameterNumber);
// }

// gsap.to('.fred', {
//     delay: 1,
//     duration: 2,
//     x: 250,
//     y: 250,
//     scale: 3,
//     onComplete: onCompleteFunction,
//     onCompleteParams: ["Passed from GSAP!", 69],
// })


// Explain callback scope
// function onCompleteFunction() {
//     console.log(this.targets()[0]);
// }

// gsap.to(".fred", {
//     delay: 1,
//     duration: 2,
//     x: 250,
//     y: 250,
//     scale: 3,
//     onComplete: onCompleteFunction,
// });

// A friendly warning about using arrow functions

// Reference an animation from a callback
// gsap.to(".fred", {
//     delay: 1,
//     duration: 2,
//     x: 250,
//     y: 250,
//     scale: 3,
//     onComplete: () => console.log(this.duration()),
// });

// Change callback scope
class Fred{
    constructor() {
        this.animation = gsap.fromTo(".fred", {}, {
            delay: 1,
            duration: 2,
            x: 250,
            y: 250,
            scale: 3,
            yoyo: true,
            repeat: 2,
            onComplete: onCompleteFunction,
            onRepeat: onRepeatFunction,
            onReverseComplete: onReverseCompleteFunction,
            onStart: onStartFunction,
            callbackScope: this
        });
        this.message = 'I am Fred!'
        

        function onCompleteFunction() {
            console.log(this.animation.duration());
        }
        function onRepeatFunction() {
            console.log('Animation Repeated!');
        }

        function  onReverseCompleteFunction() {
        console.log("Reverse animation completed!");
        }

        function onStartFunction() {
            console.log('Animation Started!');
        }

    }
}

let demo = new Fred()
