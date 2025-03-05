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
class Fred{
    constructor() {
        this.animation = gsap.to(".fred", {
            scale: 4,
            onComplete: onCompleteFunction,
            callbackScope: this
        })
        this.message = "I am Fred!"

        function onCompleteFunction() {
            console.log(this.animation.duration());
        }
    }
}

let demo = new Fred()