import p5 from 'p5'
import {
  getStoreShift,
  getStoreEnthropy,
  getStoreEffect,
  getStoreSave,
  getStoreName
} from './store'

import myFontUrl from '../../../assets/fonts/MM.ttf'

let myFont
function preload(p) {
  myFont = p.loadFont(myFontUrl)
}

let canvasContainerId1 = ''
let canvasContainerId2 = ''
let canvasContainerId3 = ''
var x, y, w, h
var totalShapeCount = 3

function getMyData() {
  let value = localStorage.getItem('bookName')
  return value
}
function getMyAuthor() {
  let value = localStorage.getItem('bookAuthor')
  return value
}
function getMyAbout() {
  let value = localStorage.getItem('bookAbout')
  return value
}

const left = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId1)
    let i = 0
    p.background(210)
    preload(p)
    p.frameRate(1)

    for (var x = 30; x < p.width; x += p.width / 7) {
      for (var y = 50; y < p.height; y += p.height / 7) {
        p.stroke(0)
        p.strokeWeight(1)
        p.line(x, 50, x, p.height - 36)
        p.line(30, y, p.width - 32, y)
      }
    }

    p.stroke(255, 50)
    for (i = 0; i < totalShapeCount; i++) {
      drawRandomShape(p, 'rectangle')
    }

    p.stroke(0, 50)
    for (i = 0; i < totalShapeCount; i++) {
      drawRandomShape(p, 'ellipse')
    }
  }

  p.draw = () => {
    let xVal = p.random(30, 300)
    let yVal = p.random(30, 400)

    p.textSize(18)
    p.textFont(myFont)
    p.text(getMyData(), 30, 34)
    p.fill(240)

    p.textSize(18)
    p.textFont(myFont)
    p.text(getMyAuthor(), xVal, yVal)
    p.fill(0, 102, 153, 51)

    p.draw = () => {
      if (getStoreName()) {
        p.background(210)

        let xVal = p.random(30, 300)
        let yVal = p.random(30, 400)
    
        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(0)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }
    
        p.stroke(255, 50)
        for (i = 0; i < totalShapeCount; i++) {
          drawRandomShape(p, 'rectangle')
        }
    
        p.stroke(0, 50)
        for (i = 0; i < totalShapeCount; i++) {
          drawRandomShape(p, 'ellipse')
        }

        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyData(), 30, 34)
        p.fill(240)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), xVal, yVal)
        p.fill(0, 102, 153, 51)

        for (var n = 0; n < 100; n++) {
          p.textSize(18)
          p.textFont(myFont)
          p.text(getMyAuthor(), xVal, yVal)
          p.fill(0, 102, 153, 51)
        }
      }
      if (getStoreEnthropy()) {
        p.background(210)
        p.frameRate(1)

        let xVal = p.random(30, 300)
        let yVal = p.random(30, 400)
    
        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(0)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }
    
        p.stroke(255, 50)
        for (i = 0; i < totalShapeCount * p.random(2, 5); i++) {
          drawRandomShape(p, 'rectangle')
        }
    
        p.stroke(0, 50)
        for (i = 0; i < totalShapeCount * p.random(2, 5); i++) {
          drawRandomShape(p, 'ellipse')
        }

        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyData(), 30, 34)
        p.fill(240)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), xVal, yVal)
        p.fill(0, 102, 153, 51)
      }

      if (getStoreShift()) {
        p.background(210)

        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(0)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }
    
        p.stroke(255, 50)
        for (i = 0; i < totalShapeCount; i++) {
          drawColoredRandomShape(p, 'rectangle')
        }
    
        p.stroke(0, 50)
        for (i = 0; i < totalShapeCount; i++) {
          drawColoredRandomShape(p, 'ellipse')
        }

        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyData(), 30, 34)
        p.fill(240)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), xVal, yVal)
        p.fill(0, 102, 153, 51)
      }

      if (getStoreEffect()) {
        p.background(30)
        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(210)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }

        p.stroke(255, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawInvertedRandomShape(p, 'rectangle')
        }

        p.stroke(0, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawInvertedRandomShape(p, 'ellipse')
        }

        let xVal = p.random(30, 300)
        let yVal = p.random(30, 400)

        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyData(), 30, 34)
        p.fill(30)

        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), xVal, yVal)
        p.fill(210)
      }

      if (getStoreSave()) {
        new Promise((resolve, reject) => {
          p.frameRate(0)
          resolve()
          console.log('resolved')
        })
        console.log('second')
        p.saveCanvas('left', 'jpg')
      }
    }
  }
}

function drawColoredRandomShape(p, choice) {
  x = p.random(p.width)
  y = p.random(p.height)
  w = p.random(200, 400)
  h = p.random(5, 100)
  let myColour = p.color(102, p.random(255), 209)

  if (choice == 'ellipse') {
    p.fill(myColour)
    p.noStroke()
    p.ellipse(x, y, w, w)
  } else {
    p.noStroke()
    p.fill(myColour)
    p.rect(x, y, w, h)
  }
}

function drawInvertedRandomShape(p, choice) {
  x = p.random(p.width)
  y = p.random(p.height)
  w = p.random(200, 400)
  h = p.random(5, 100)

  if (choice == 'ellipse') {
    p.fill(210)
    p.noStroke()
    p.ellipse(x, y, w, w)
  } else {
    p.noStroke()
    p.fill(210)
    p.rect(x, y, w, h)
  }
}

function drawRandomShape(p, choice) {
  x = p.random(p.width)
  y = p.random(p.height)
  w = p.random(200, 400)
  h = p.random(5, 100)

  if (choice == 'ellipse') {
    p.noStroke()
    p.fill(30)
    p.ellipse(x, y, w, w)
  } else {
    p.noStroke()
    p.fill(30)
    p.rect(x, y, w, h)
  }
}

const right = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId3)
    let i = 0
    p.background(210)
    p.frameRate(1)

    for (var x = 30; x < p.width; x += p.width / 7) {
      for (var y = 50; y < p.height; y += p.height / 7) {
        p.stroke(0)
        p.strokeWeight(1)
        p.line(x, 50, x, p.height - 36)
        p.line(30, y, p.width - 32, y)
      }
    }

    p.stroke(255, 50)
    for (i = 0; i < totalShapeCount; i++) {
      drawRandomShape(p, 'rectangle')
    }

    p.stroke(0, 50)
    for (i = 0; i < totalShapeCount; i++) {
      drawRandomShape(p, 'ellipse')
    }

    p.fill(210)
    p.rect(92, 136, 242, 336)
  }

  p.draw = () => {
    p.textSize(12)
    p.textFont(myFont)
    p.fill(0)
    p.text(getMyAbout(), 104, 160, 240)

    p.draw = () => {
      if (getStoreShift()) {
        p.background(210)

        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(0)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }

        p.fill(210)
        p.rect(92, 136, 242, 336)

        p.textSize(12)
        p.textFont(myFont)
        p.fill(0)
        p.text(getMyAbout(), 104, 160, 240)

        p.stroke(255, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawColoredRandomShape(p, 'rectangle')
        }

        p.stroke(0, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawColoredRandomShape(p, 'ellipse')
        }
      }

      if (getStoreEffect()) {
        p.background(30)
        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(210)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }

        p.stroke(255, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawInvertedRandomShape(p, 'rectangle')
        }

        p.stroke(0, 50)
        for (var i = 0; i < totalShapeCount; i++) {
          drawInvertedRandomShape(p, 'ellipse')
        }

        p.fill(30)
        p.rect(92, 136, 242, 336)

        p.textSize(12)
        p.textFont(myFont)
        p.fill(210)
        p.text(getMyAbout(), 104, 160, 240)
      }

      if (getStoreEnthropy()) {
        p.background(210)
        p.frameRate(1)
    
        for (var x = 30; x < p.width; x += p.width / 7) {
          for (var y = 50; y < p.height; y += p.height / 7) {
            p.stroke(0)
            p.strokeWeight(1)
            p.line(x, 50, x, p.height - 36)
            p.line(30, y, p.width - 32, y)
          }
        }
    
        p.stroke(255, 50)
        for (i = 0; i < totalShapeCount * p.random(2, 5); i++) {
          drawRandomShape(p, 'rectangle')
        }
    
        p.stroke(0, 50)
        for (i = 0; i < totalShapeCount * p.random(2, 5); i++) {
          drawRandomShape(p, 'ellipse')
        }
    
        p.fill(210)
        p.rect(92, 136, 242, 336)

        p.textSize(12)
        p.textFont(myFont)
        p.fill(210)
        p.text(getMyAbout(), 104, 160, 240)
      }

      if (getStoreSave()) {
        new Promise((resolve, reject) => {
          p.frameRate(0)
          resolve()
          console.log('resolved')
        })
        console.log('second')
        p.saveCanvas('right', 'jpg')
      }
    }
  }
}

const center = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(38.04, 593)
    canvas.parent(canvasContainerId2)
    let i = 0
    p.background(210)
    p.frameRate(1)
  }

  p.draw = () => {
    if (getStoreShift()) {
      let myColour = p.color(102, p.random(255), 209)
      p.background(myColour)
    }
    if (getStoreEffect()) {
      p.background(30)
    }
    if (getStoreSave()) {
      new Promise((resolve, reject) => {
        p.frameRate(0)
        resolve()
        console.log('resolved')
      })
      console.log('second')
      p.saveCanvas('center', 'jpg')
    }
  }
}

function initSketch(id1, id2, id3) {
  canvasContainerId1 = id1
  canvasContainerId2 = id2
  canvasContainerId3 = id3
  new p5(left)
  new p5(center)
  new p5(right)
}

export { initSketch }
