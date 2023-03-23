import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

let cells = 100
const canvasSize = 695
let cellSize = canvasSize / cells
const types = ['none', 'left-to-right', 'right-to-left', 'cross']
// const types = ['left-to-right', 'right-to-left', 'cross']

let color = false
let frameRate = false
let fr = 0
let bg = false
let stop = false


let r = 0
let g = 0
let b = 0

function drawTile(p, xMin, xMax, yMin, yMax) {
  const type = sample(types)

  if (color) {
    r = getRandomArbitrary(0, 255)
    g = getRandomArbitrary(0, 255)
    b = getRandomArbitrary(0, 255)

    p.stroke(r, g, b)
  }

  switch (type) {
    case 'left-to-right':
      p.line(xMin, yMin, xMax, yMax)
      break
    case 'right-to-left':
      p.line(xMax, yMin, xMin, yMax)
      break
    case 'cross':
      p.line(xMin, yMin, xMax, yMax)
      p.line(xMax, yMin, xMin, yMax)
      break
    default:
      break
  }
}

function drawTiles(p) {
  p.background(38)

  if (bg) {
    p.background(getRandomArbitrary(0,100))
  }

  for (let row = 0; row < cells; row++) {
    for (let column = 0; column < cells; column++) {
      drawTile(
        p,
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_32')
    p.frameRate(6)
    p.stroke(121, 255, 57)
  }

  p.draw = () => {
    drawTiles(p)
    if (fr) {
      p.frameRate(fr)
    }
    if (stop) {
      p.frameRate(fr)
    }
  }
}

function renderUI() {
  const wrapper3 = document.createElement('div')
  wrapper3.classList.add('wrapper3')

  const wrapper4 = document.createElement('div')
  wrapper4.classList.add('wrapper4')

  const shiftButton = document.createElement('div')
  shiftButton.classList.add('shiftButton')
  shiftButton.innerText = 'Toggle COLOR'
  shiftButton.addEventListener('click', () => {
    color = !color
  })

  const enthropyButton = document.createElement('div')
  enthropyButton.classList.add('enthropyButton')
  enthropyButton.innerText = 'Change CELLS COUNT'
  enthropyButton.addEventListener('click', () => {
    cells = Math.round(getRandomArbitrary(10,50))
    cellSize = canvasSize / cells
  })

  const effectButton = document.createElement('div')
  effectButton.classList.add('effectButton')
  effectButton.innerText = 'Reset CELLS COUNT'
  effectButton.addEventListener('click', () => {
    cells = 100
    cellSize = canvasSize / cells
  })

  const frButton = document.createElement('div')
  frButton.classList.add('frButton')
  frButton.innerText = 'Random FRAMERATE'
  frButton.addEventListener('click', () => {
    frameRate = true
    stop = false
    fr = Math.round(getRandomArbitrary(10, 60))
    console.log(fr)
  })

  const strokeButton = document.createElement('div')
  strokeButton.classList.add('strokeButton')
  strokeButton.innerText = 'Change BG COLOR'
  strokeButton.addEventListener('click', () => {
    bg = true
  })

  const fillButton = document.createElement('div')
  fillButton.classList.add('fillButton')
  fillButton.innerText = 'Stop ANIMATION'
  fillButton.addEventListener('click', () => {
    stop = true
    frameRate = false
    fr = 0
  })


  document.body.appendChild(wrapper3)
  document.body.appendChild(wrapper4)
  wrapper3.appendChild(shiftButton)
  wrapper3.appendChild(enthropyButton)
  wrapper3.appendChild(effectButton)
  wrapper4.appendChild(frButton)
  wrapper4.appendChild(strokeButton)
  wrapper4.appendChild(fillButton)
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('HELLO')
  new p5(sketch)
  renderUI()
})