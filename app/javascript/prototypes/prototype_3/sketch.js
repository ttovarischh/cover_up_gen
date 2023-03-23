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

// function setup() {
//   createCanvas(windowWidth, windowHeight - 4)
//   rectMode(CENTER)
//   edge = 50
//   padding = 20
//   bigSegment = 200 - padding

//   drawStuff()
// }

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

    p.fill(black)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)
  }

  p.draw = () => {
    p.fill(white)

    p.textSize(14)
    p.textFont(myFont)
    p.text(getMyAbout(), 40, 460, 350)

    p.draw = () => {
      if (getStoreEffect()) {
        p.background(black)

        edge = 50
        padding = 20
        bigSegment = 200

        drawInvertedStuff(p)

        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        p.fill(black)

        p.textSize(14)
        p.textFont(myFont)
        p.text(getMyAbout(), 40, 460, 350)
      }
      // if (getStoreEffect()) {
      //   p.background(30)
      //   for (var x = 30; x < p.width; x += p.width / 7) {
      //     for (var y = 50; y < p.height; y += p.height / 7) {
      //       p.stroke(210)
      //       p.strokeWeight(1)
      //       p.line(x, 50, x, p.height - 36)
      //       p.line(30, y, p.width - 32, y)
      //     }
      //   }
      //   p.stroke(255, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawInvertedRandomShape(p, 'rectangle')
      //   }
      //   p.stroke(0, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawInvertedRandomShape(p, 'ellipse')
      //   }
      //   let xVal = p.random(30, 300)
      //   let yVal = p.random(30, 400)
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyData(), 30, 34)
      //   p.fill(30)
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyAuthor(), xVal, yVal)
      //   p.fill(210)
      // }
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

    p.fill(black)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)
  }

  p.draw = () => {
    p.fill(white)

    p.textSize(24)
    p.textFont(myFont)
    p.text(getMyData(), 45, 518)

    p.textSize(18)
    p.textFont(myFont)
    p.text(getMyAuthor(), 45, 492)

    p.draw = () => {
      // if (getStoreShift()) {
      //   p.background(210)
      //   for (var x = 30; x < p.width; x += p.width / 7) {
      //     for (var y = 50; y < p.height; y += p.height / 7) {
      //       p.stroke(0)
      //       p.strokeWeight(1)
      //       p.line(x, 50, x, p.height - 36)
      //       p.line(30, y, p.width - 32, y)
      //     }
      //   }
      //   let xVal = p.random(30, 300)
      //   let yVal = p.random(30, 400)
      //   p.stroke(255, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawColoredRandomShape(p, 'rectangle')
      //   }
      //   p.stroke(0, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawColoredRandomShape(p, 'ellipse')
      //   }
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyData(), 30, 34)
      //   p.fill(240)
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyAuthor(), xVal, yVal)
      //   p.fill(0, 102, 153, 51)
      // }
      if (getStoreEffect()) {
        p.background(black)

        edge = 50
        padding = 20
        bigSegment = 200

        drawInvertedStuff(p)

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
  p.background(white)
  for (var x = 20; x < width - edge; x += bigSegment) {
    for (var y = 20; y < 250; y += bigSegment) {
      drawSquare(p, x, y)
    }
  }
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

function drawInvertedSquare(p, x, y) {
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

function drawBottomSquare(p, x, y) {
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

function drawSquare(p, x, y) {
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

// const left = function sketch(p) {
//   p.setup = () => {
//     const canvas = p.createCanvas(427.64, 593)
//     canvas.parent(canvasContainerId3)
//     let i = 0
//     p.background(210)
//     p.frameRate(1)

//     for (var x = 30; x < p.width; x += p.width / 7) {
//       for (var y = 50; y < p.height; y += p.height / 7) {
//         p.stroke(0)
//         p.strokeWeight(1)
//         p.line(x, 50, x, p.height - 36)
//         p.line(30, y, p.width - 32, y)
//       }
//     }

//     p.stroke(255, 50)
//     for (i = 0; i < totalShapeCount; i++) {
//       drawRandomShape(p, 'rectangle')
//     }

//     p.stroke(0, 50)
//     for (i = 0; i < totalShapeCount; i++) {
//       drawRandomShape(p, 'ellipse')
//     }

//     p.fill(210)
//     p.rect(92, 136, 242, 336)
//   }

//   p.draw = () => {
//     p.textSize(12)
//     p.textFont(myFont)
//     p.fill(0)
//     p.text(getMyAbout(), 104, 160, 240)

//     p.draw = () => {
//       if (getStoreShift()) {
//         p.background(210)

//         for (var x = 30; x < p.width; x += p.width / 7) {
//           for (var y = 50; y < p.height; y += p.height / 7) {
//             p.stroke(0)
//             p.strokeWeight(1)
//             p.line(x, 50, x, p.height - 36)
//             p.line(30, y, p.width - 32, y)
//           }
//         }

//         p.stroke(255, 50)
//         for (var i = 0; i < totalShapeCount; i++) {
//           drawColoredRandomShape(p, 'rectangle')
//         }

//         p.stroke(0, 50)
//         for (var i = 0; i < totalShapeCount; i++) {
//           drawColoredRandomShape(p, 'ellipse')
//         }

//         p.fill(210)
//         p.stroke(0)
//         p.strokeWeight(1)
//         p.rect(91, 135, 244, 338)

//         p.textSize(12)
//         p.textFont(myFont)
//         p.fill(0)
//         p.text(getMyAbout(), 104, 160, 240)
//       }

//       if (getStoreEffect()) {
//         p.background(30)
//         for (var x = 30; x < p.width; x += p.width / 7) {
//           for (var y = 50; y < p.height; y += p.height / 7) {
//             p.stroke(210)
//             p.strokeWeight(1)
//             p.line(x, 50, x, p.height - 36)
//             p.line(30, y, p.width - 32, y)
//           }
//         }

//         p.stroke(255, 50)
//         for (var i = 0; i < totalShapeCount; i++) {
//           drawInvertedRandomShape(p, 'rectangle')
//         }

//         p.stroke(0, 50)
//         for (var i = 0; i < totalShapeCount; i++) {
//           drawInvertedRandomShape(p, 'ellipse')
//         }

//         p.fill(30)
//         p.rect(92, 136, 242, 336)

//         p.textSize(12)
//         p.textFont(myFont)
//         p.fill(210)
//         p.text(getMyAbout(), 104, 160, 240)
//       }

//       if (getStoreSave()) {
//         new Promise((resolve, reject) => {
//           p.frameRate(0)
//           resolve()
//           console.log('resolved')
//         })
//         console.log('second')
//         p.saveCanvas('right', 'jpg')
//       }
//     }
//   }
// }

const center = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(38.04, 593)
    canvas.parent(canvasContainerId2)
    let i = 0
    p.background(white)
    p.frameRate(1)

    p.fill(black)
    p.noStroke()
    p.rect(0, 422, 427.64, 171)

    drawBottomStuff(p)
  }

  p.draw = () => {
    p.fill(black)

    p.textSize(24)
    p.textFont(myFont)
    p.rotate(1.57)
    p.text(getMyData(), 20, -15)

    // p.textSize(18)
    // p.textFont(myFont)
    // p.rotate(1.52)
    // p.text(getMyAuthor(),20, 10)

    p.draw = () => {
      // if (getStoreShift()) {
      //   p.background(210)
      //   for (var x = 30; x < p.width; x += p.width / 7) {
      //     for (var y = 50; y < p.height; y += p.height / 7) {
      //       p.stroke(0)
      //       p.strokeWeight(1)
      //       p.line(x, 50, x, p.height - 36)
      //       p.line(30, y, p.width - 32, y)
      //     }
      //   }
      //   let xVal = p.random(30, 300)
      //   let yVal = p.random(30, 400)
      //   p.stroke(255, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawColoredRandomShape(p, 'rectangle')
      //   }
      //   p.stroke(0, 50)
      //   for (var i = 0; i < totalShapeCount; i++) {
      //     drawColoredRandomShape(p, 'ellipse')
      //   }
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyData(), 30, 34)
      //   p.fill(240)
      //   p.textSize(18)
      //   p.textFont(myFont)
      //   p.text(getMyAuthor(), xVal, yVal)
      //   p.fill(0, 102, 153, 51)
      // }
      if (getStoreEffect()) {
        p.background(black)
        p.fill(white)
        p.noStroke()
        p.rect(0, 422, 427.64, 171)

        drawInvertedBottomStuff(p)

        p.fill(white)

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
