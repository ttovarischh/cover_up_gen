import p5 from 'p5'
import { getRandomArbitrary } from '../prototypes/utilities'

let x = 0
let y = 0

let stopFR = false
let fr = 0

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(700, 410)
    canvas.parent('prototype_39')
    p.frameRate(2)
    p.background(0)
  }
  

  p.draw = () => {
    x = getRandomArbitrary(0, 650)
    y = getRandomArbitrary(0, 350)


    if (stopFR) {
      p.frameRate(0)
    } else {
      p.frameRate(2)
    }

    if (fr != 0) {
      p.frameRate(fr)
    }

    // p.background(0)
    p.fill(255)
    p.rect(x, y, 50, 50)
  }
}

function renderUI() {
  const resetButton = document.createElement('div')
  resetButton.classList.add('resetButton')
  resetButton.innerText = 'Stop/start'

  resetButton.addEventListener('click', () => {
    stopFR = !stopFR
    console.log(stopFR)
  })
  document.body.appendChild(resetButton)

  const sliderWrapper = document.createElement('div')
  sliderWrapper.classList.add('sliderWrapper')

  const slider = document.createElement('input')
  slider.classList.add('slider')
  slider.type = 'range'
  slider.step = 2
  slider.min = 2
  slider.max = 100
  slider.value = fr

  slider.addEventListener('input', (e) => {
    fr = e.target.value
    console.log(fr)
  })

  document.body.appendChild(sliderWrapper)
  sliderWrapper.appendChild(slider)
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
  renderUI()
})