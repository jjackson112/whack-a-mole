const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    // Rounding it down to numbers less than nine
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // console.log(Math.floor(Math.random() * 9));

    // whenever you get a random number, the mole is added
    randomSquare.classList.add('mole')

    // get id of random square to get the hit position, set up so the score is recorded
    hitPosition = randomSquare.id
}

squares.forEach(square=> {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

// put randomSquare() in function form so that you can add an event listener like so below
function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

// set up the score
function countdown() {
    currentTime--

    // show the countdown
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

// stop timer
let countdownTimerId = setInterval(countdown, 1000)