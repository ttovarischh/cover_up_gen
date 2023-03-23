import { getRandomArbitrary, sample } from '../prototypes/utilities'

const colors = ['#5cf0ee', '#9eb0dc', '#9c73c0', '#94c4a6', '#436770']
const angles = [40, 10, 30]

function createCircle(frame) {
  const circleElement = document.createElement('div')
  circleElement.classList.add('circle')

  const top = getRandomArbitrary(-100, 1720)
  const left = getRandomArbitrary(-100, 980)
  const size = getRandomArbitrary(10, 400)
  const width = getRandomArbitrary(2, 10)

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = [size, 'px'].join('')
  circleElement.style.height = [size, 'px'].join('')
  circleElement.style.borderColor = sample(colors)
  circleElement.style.borderWidth = [width, 'px'].join('')
  circleElement.style.transform = 'rotate(' + sample(angles) + 'deg)'

  frame.appendChild(circleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_35')

  for (var i = 0; i < 50; i++) {
    createCircle(container)
  }
})
