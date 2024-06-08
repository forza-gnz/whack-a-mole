const boxes = document.querySelectorAll('.box')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitbox
let currentTime = 60
let timerId = null

function randombox() {
  boxes.forEach(box => {
    box.classList.remove('mole')
  })

  let randombox = boxes[Math.floor(Math.random() * 9)]
  randombox.classList.add('mole')

  hitbox = randombox.id
}

boxes.forEach(box => {
  box.addEventListener('mousedown', () => {
    if (box.id == hitbox) {
      result++
      score.textContent = result
      hitbox = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randombox, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)