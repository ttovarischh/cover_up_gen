import p5 from 'p5'
import { getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 695

let shift = false
let enthropy = true
let effect = true
let fr = 0
let frameRate = false
let stroke = false
let filled = false

const shiftSize = {
  x: 0,
  y: 0
}

let shiftSeed = 5
let cells = 30
let cellSize = calcCellSize()

let xCenter, yCenter

function calcCellSize() {
  return canvasSize / cells
}

function drawTile(p, row, column) {
  if (effect) {
    const weight = getRandomArbitrary(0, 4)
    p.strokeWeight(weight)
  }

  if (enthropy) {
    shiftSeed = (row + column) / 8
  }

  if (shift) {
    const s = getRandomArbitrary(-shiftSeed, shiftSeed)
    shiftSize.x = s
    shiftSize.y = s
  } else {
    shiftSize.y = getRandomArbitrary(-shiftSeed, shiftSeed)
  }

  xCenter = (column + 1) * cellSize - cellSize / 2 + shiftSize.x
  yCenter = (row + 1) * cellSize - cellSize / 2 + shiftSize.y

  if (column === 0) {
    p.beginShape()
    p.vertex(xCenter, yCenter)
  } else {
    p.bezierVertex(xCenter, yCenter, xCenter, yCenter, xCenter, yCenter)
  }

  if (column === cells - 1) {
    p.endShape()
  }
}

function drawTiles(p) {
  p.background(0)

  if (effect) {
    cells = Math.floor(getRandomArbitrary(30, 120))
    cellSize = calcCellSize()
  }

  for (let row = 0; row < cells; row++) {
    for (let column = 0; column < cells; column++) {
      drawTile(p, row, column)
    }
  }
}

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_41')
    p.frameRate(6)
    p.stroke(121, getRandomArbitrary(10, 300), 57)
    p.noFill()
    // p.fill(141)
  }

  p.draw = () => {
    drawTiles(p)

    if (frameRate) {
      p.frameRate(fr)
    }

    if (stroke) {
      p.stroke(255, getRandomArbitrary(10, 300), 0)
    }

    if (filled) {
      p.fill(255, 204, 0)
    }
  }
}

function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const wrapper2 = document.createElement('div')
  wrapper2.classList.add('wrapper2')

  const shiftButton = document.createElement('div')
  shiftButton.classList.add('shiftButton')
  shiftButton.innerText = 'Toggle SHIFT'
  shiftButton.addEventListener('click', () => {
    shift = !shift
  })

  const enthropyButton = document.createElement('div')
  enthropyButton.classList.add('enthropyButton')
  enthropyButton.innerText = 'Toggle ENTHROPY'
  enthropyButton.addEventListener('click', () => {
    enthropy = !enthropy
  })

  const effectButton = document.createElement('div')
  effectButton.classList.add('effectButton')
  effectButton.innerText = 'Toggle EFFECT'
  effectButton.addEventListener('click', () => {
    effect = !effect
  })

  const frButton = document.createElement('div')
  frButton.classList.add('frButton')
  frButton.innerText = 'Random FRAMERATE'
  frButton.addEventListener('click', () => {
    frameRate = true
    fr = Math.round(getRandomArbitrary(0, 60))
    console.log(fr)
  })

  const strokeButton = document.createElement('div')
  strokeButton.classList.add('strokeButton')
  strokeButton.innerText = 'Animate STROKE COLOR'
  strokeButton.addEventListener('click', () => {
    stroke = !stroke
  })

  const fillButton = document.createElement('div')
  fillButton.classList.add('fillButton')
  fillButton.innerText = 'Toggle FILL'
  fillButton.addEventListener('click', () => {
    filled = !filled
  })


  document.body.appendChild(wrapper)
  document.body.appendChild(wrapper2)
  wrapper.appendChild(shiftButton)
  wrapper.appendChild(enthropyButton)
  wrapper.appendChild(effectButton)
  wrapper2.appendChild(frButton)
  wrapper2.appendChild(strokeButton)
  wrapper2.appendChild(fillButton)
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
  renderUI()
})
