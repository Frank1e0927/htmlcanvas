let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')
const FONT_HEIGHT = 15
const MARGIN = 35
const HAND_TRUNCATION = canvas.width / 25
const HOUR_HAND_TRUNCATION = canvas.width / 10
const NUMERAL_SPACING = 20
const RADIUS = canvas.width/2 - MARGIN
const HAND_RADIUS = RADIUS + NUMERAL_SPACING

function drawCircle() {
  context.beginPath()
  context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0 , Math.PI*2, true)

  context.stroke()
}

function draweNumbers() {
  let numerals = [1,2,3,4,5,6,7,8,9,10,11,12]
  let angle = 0
  let numeralWidth = 0

  numerals.forEach((numeral) => {
    angle = Math.PI / 6 * (numeral - 3)
    numeralWidth = context.measureText(numeral).width
    const numeralsX = canvas.width / 2 + Math.cos(angle)*(HAND_RADIUS) - numeralWidth /2;
    const numeralsY = canvas.height/ 2 + Math.sin(angle)*(HAND_RADIUS) + FONT_HEIGHT /3 
    context.fillText(numeral, numeralsX, numeralsY)
  })
}

drawCircle()
draweNumbers()

