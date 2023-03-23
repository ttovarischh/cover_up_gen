import p5 from 'p5'
import { sample } from '../prototypes/utilities'

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(491, 680)
    canvas.parent('prototype_30')

    const types = ['none', 'left-to-right', 'right-to-left', 'cross']
    const type = sample(types)

    p.background(38)
    p.stroke(121, 255, 57)

    switch (type) {
      case 'left-to-right':
        p.line(0, 0, 600, 600)
        break
      case 'right-to-left':
        p.line(600, 0, 0, 600)
        break
      case 'cross':
        p.line(0, 0, 600, 600)
        p.line(600, 0, 0, 600)
        break
      default:
        break
    }
  }

  // p.draw = () => {}
}

function saveAsCanvas() {
  save('output_canvas.png')
}

function saveToFile(p) {
  // Save the current canvas to file as png
  p.saveCanvas('photo', 'png')
}

function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const shiftButton = document.createElement('div')
  shiftButton.classList.add('shiftButton')
  shiftButton.innerText = 'SAVE FILE'
  shiftButton.addEventListener('click', (p) => {
    p.saveCanvas('photo', 'png')
  })

  document.body.appendChild(wrapper)
  wrapper.appendChild(shiftButton)
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
  renderUI()
})
