import {
  getLargeWhiteCircleStore,
  setLargeWhiteCircleStore
} from '../prototypes/prototype_18/store'

function createLargeWhiteCircle() {
  const array = ['a', 'b', 'c']
  setLargeWhiteCircleStore(array)
  console.log('Test', getLargeWhiteCircleStore())
  array.push('z')
  setLargeWhiteCircleStore(array)
  console.log('Test2', getLargeWhiteCircleStore())
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_18')
  createLargeWhiteCircle()
})
