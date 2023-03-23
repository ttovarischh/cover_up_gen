import p5 from 'p5'
import {
  getStoreShift,
  getStoreEnthropy,
  getStoreEffect,
  getStoreSave,
  getStoreName
} from './store'

import myFontUrl from '../../../assets/fonts/EBGRegular.ttf'
let myFont
function preload(p) {
  myFont = p.loadFont(myFontUrl)
}

var edge, padding, bigSegment
var black = 210
var white = 30
var x, y, w, h
var width = 427
var height = 593
var totalShapeCount = 3
let canvasContainerId1 = ''
let canvasContainerId2 = ''
let canvasContainerId3 = ''

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

const right = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId1)
    let i = 0
    p.background(white)
    preload(p)
    p.frameRate(1)
    edge = 50
    padding = 20
    bigSegment = 200

    drawStuff(p)

    p.fill(white)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)
  }

  p.draw = () => {
    p.fill(black)

    p.textSize(14)
    p.textFont(myFont)
    p.text(getMyAbout(), 40, 460, 350)

    p.draw = () => {
      if (getStoreEffect()) {
        p.background(white)

        edge = 50
        padding = 20
        bigSegment = 200

        drawInvertedStuff(p)

        p.fill(black)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(white)

        p.textSize(14)
        p.textFont(myFont)
        p.text(getMyAbout(), 40, 460, 350)
      }

      if (getStoreShift()) {
        p.background(black)

        edge = 50
        padding = 20
        bigSegment = 200

        drawColoredStuff(p)

        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(black)

        p.textSize(14)
        p.textFont(myFont)
        p.text(getMyAbout(), 40, 460, 350)
      }
      if (getStoreEnthropy()) {
        p.background(black)

        edge = 50
        padding = 20
        bigSegment = 200

        drawMoreStuff(p)

        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(black)

        p.textSize(14)
        p.textFont(myFont)
        p.text(getMyAbout(), 40, 460, 350)
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

const left = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId3)
    let i = 0
    p.background(white)
    preload(p)
    p.frameRate(1)
    edge = 50
    padding = 20
    bigSegment = 200

    drawStuff(p)

    p.fill(white)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)
  }

  p.draw = () => {
    p.fill(black)

    p.textSize(24)
    p.textFont(myFont)
    p.text(getMyData(), 45, 518)

    p.textSize(18)
    p.textFont(myFont)
    p.text(getMyAuthor(), 45, 492)

    p.draw = () => {
      if (getStoreShift()) {
        p.background(white)
        edge = 50
        padding = 20
        bigSegment = 200
    
        drawColoredStuff(p)
    
        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(black)

        p.textSize(24)
        p.textFont(myFont)
        p.text(getMyData(), 45, 518)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), 45, 492)    
      }
      if (getStoreEffect()) {
        p.background(white)

        edge = 50
        padding = 20
        bigSegment = 200

        drawInvertedStuff(p)

        p.fill(black)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(white)

        p.textSize(24)
        p.textFont(myFont)
        p.text(getMyData(), 45, 518)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), 45, 492)
      }
      if (getStoreEnthropy()) {
        p.background(black)

        edge = 50
        padding = 20
        bigSegment = 200

        drawMoreStuff(p)

        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(black)

        p.textSize(24)
        p.textFont(myFont)
        p.text(getMyData(), 45, 518)
    
        p.textSize(18)
        p.textFont(myFont)
        p.text(getMyAuthor(), 45, 492)
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

function drawStuff(p) {
  p.background(black)
  for (var x = 20; x < width - edge; x += bigSegment) {
    for (var y = 20; y < 250; y += bigSegment) {
      drawSquare(p, x, y)
    }
  }
}

function drawMoreStuff(p) {
  p.background(black)
  for (var x = 20; x < width - edge; x += bigSegment) {
    for (var y = 20; y < 250; y += bigSegment) {
      drawMoreSquare(p, x, y)
    }
  }
}

function drawMoreSquare(p, x, y) {
  var cols = 14,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(white)
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(black)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  p.pop()
}

function drawColoredStuff(p) {
  p.background(black)
  for (var x = 20; x < width - edge; x += bigSegment) {
    for (var y = 20; y < 250; y += bigSegment) {
      drawColoredSquare(p, x, y)
    }
  }
}

function drawColoredSquare(p, x, y) {
  var cols = 5,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(p.random(255), p.random(255), p.random(240))
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(black)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

function drawBottomStuff(p) {
  for (var x = 11; x < width - edge; x += bigSegment) {
    for (var y = 425; y < height; y += bigSegment) {
      drawBottomSquare(p, x, y)
    }
  }
}

function drawInvertedStuff(p) {
  for (var x = 20; x < width - edge; x += bigSegment) {
    for (var y = 20; y < 250; y += bigSegment) {
      drawInvertedSquare(p, x, y)
    }
  }
}

function drawInvertedBottomStuff(p) {
  for (var x = 11; x < width - edge; x += bigSegment) {
    for (var y = 425; y < height; y += bigSegment) {
      drawInvertedBottomSquare(p, x, y)
    }
  }
}

function drawInvertedBottomSquare(p, x, y) {
  var cols = 7,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(white)
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(black)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

function drawInvertedSquare(p, x, y) {
  var cols = 5,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(black)
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(white)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

function drawBottomSquare(p, x, y) {
  var cols = 7,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(black)
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(white)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

function drawColoredBottomStuff(p) {
  for (var x = 11; x < width - edge; x += bigSegment) {
    for (var y = 425; y < height; y += bigSegment) {
      drawColoredBottomSquare(p, x, y)
    }
  }
}

function drawColoredBottomSquare(p, x, y) {
  var cols = 7,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(p.random(255), p.random(255), p.random(240))
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(white)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

function drawSquare(p, x, y) {
  var cols = 5,
    segment = bigSegment / cols
  p.push()
  p.translate(x + padding / 2, y + padding / 2)
  for (var x = 0 / 2; x < bigSegment; x += segment) {
    for (var y = 0 / 2; y < bigSegment; y += segment) {
      p.noStroke()
      p.fill(white)
      var scal = p.random(0.4, 0.9)
      p.ellipse(x, y, segment * scal, segment * scal)
      p.fill(black)
      scal = p.random(0.2, 0.7)
      var r = 5
      var xx = p.random(-r, r)
      var yy = p.random(-r, r)
      p.ellipse(x + xx, y + yy, segment * scal, segment * scal)
    }
  }
  // p.colorMode(rgb)
  p.pop()
}

const center = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(38.04, 593)
    canvas.parent(canvasContainerId2)
    let i = 0
    p.background(black)
    p.frameRate(1)

    p.fill(white)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)

    drawBottomStuff(p)
  }

  p.draw = () => {
    p.fill(white)

    p.textSize(24)
    p.textFont(myFont)
    p.rotate(1.57)
    p.text(getMyData(), 20, -15)

    p.draw = () => {
      if (getStoreShift()) {
        p.background(black)
        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)
    
        drawColoredBottomStuff(p)

        p.fill(white)

        p.textSize(24)
        p.textFont(myFont)
        p.rotate(1.57)
        p.text(getMyData(), 20, -15)
      }
      if (getStoreEffect()) {
        p.background(white)
        p.fill(black)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        drawInvertedBottomStuff(p)

        p.fill(black)

        p.textSize(24)
        p.textFont(myFont)
        p.rotate(1.57)
        p.text(getMyData(), 20, -15)
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

function initSketch(id1, id2, id3) {
  canvasContainerId1 = id1
  canvasContainerId2 = id2
  canvasContainerId3 = id3
  new p5(left)
  new p5(center)
  new p5(right)
}

export { initSketch }
