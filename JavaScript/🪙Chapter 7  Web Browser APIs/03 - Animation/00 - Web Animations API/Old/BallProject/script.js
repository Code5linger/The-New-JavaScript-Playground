const ball = document.getElementById('ball')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reverse = document.getElementById('reverse')
const speedUp = document.getElementById('speedUp')
const speedDown = document.getElementById('speedDown')

const rollAnimation = [{
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white'
    }, {
    color: 'blue',
    offset: 0.3
    }, {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white'
    }
]

const rollOptions = {
    duration: 3000,
    iterations: Infinity
}

const roll = ball.animate(rollAnimation, rollOptions)

pause.addEventListener('click', () => {roll.pause()})
play.addEventListener('click', () => {
    roll.playbackRate = 1;
    roll.play()
})
reverse.addEventListener('click', () => { roll.reverse()})
speedUp.addEventListener('click', () => roll.playbackRate = roll.playbackRate * 2)
speedDown.addEventListener('click', () => roll.playbackRate = roll.playbackRate * .5)