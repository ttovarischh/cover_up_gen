import p5 from 'p5'
import {
  getStoreShift,
  getStoreEnthropy,
  getStoreEffect,
  getStoreSave,
  getStoreName
} from './store'
import { getRandomArbitrary } from '../utilities'

import myFontUrl from '../../../assets/fonts/Cor.ttf'

let myFont
function preload(p) {
  myFont = p.loadFont(myFontUrl)
}

let myR = getRandomArbitrary(0, 255)
let myG = getRandomArbitrary(0, 255)
let myB = getRandomArbitrary(0, 255)



let canvasContainerId1 = ''
let canvasContainerId2 = ''
let canvasContainerId3 = ''
var x, y, w, h
var totalShapeCount = 3
var black = 30
var white = 210

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

let circles = 1500
let goldenRatio = (Math.sqrt(5) + 1) / 2 + 3
let goldenAngle = goldenRatio * (33 + Math.PI)

const left = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId1)
    let myColour = p.color(black)
    p.background(myColour)
    preload(p)
    p.frameRate(1)

    let pos = p.createVector(214, 360)
    let circle_rad = 300
    let spiral = p.createVector(
      p.map(p.mouseX, 0, p.width, 0.003, 0.005),
      p.map(p.mouseY, 0, p.height, 0.003, 0.005)
    )
    p.fill(myR, myG, myB)
    for (let i = 0; i <= circles; ++i) {
      let r = spiral.x * i
      let ratio = i / circles
      let angle = i * goldenAngle
      let spiral_rad = ratio * circle_rad
      let x = pos.x + p.cos(angle) * spiral_rad
      let y = pos.y + p.sin(angle) * spiral_rad
      p.noStroke()
      p.ellipse(x, y, r)
    }

    p.fill(white)
    p.noStroke()
    p.rect(0, 0, 427.64, 155)
  }

  p.draw = () => {
    p.fill(black)
    p.textSize(22)
    p.textFont(myFont)
    let nameWidth = p.textWidth(getMyData())
    let authorWidth = p.textWidth(getMyAuthor())
    // prettier-ignore
    p.text(getMyData(),(427 / 2) - (nameWidth / 2), 96)

    p.textFont(myFont)
    p.text(getMyAuthor(), (427 / 2) - (authorWidth / 2), 70)
    p.fill(0, 102, 153, 51)

    p.draw = () => {
      if (getStoreShift()) {
        p.background(black)
    
        let pos = p.createVector(214, 360)
        let circle_rad = 300
        let spiral = p.createVector(
          p.map(p.mouseX, 0, p.width, 0.003, 0.005),
          p.map(p.mouseY, 0, p.height, 0.003, 0.005)
        )
        p.fill(255)
        for (let i = 0; i <= circles; ++i) {
          let r = spiral.x * i
          let ratio = i / circles
          let angle = i * goldenAngle
          let spiral_rad = ratio * circle_rad
          let x = pos.x + p.cos(angle) * spiral_rad
          let y = pos.y + p.sin(angle) * spiral_rad
          p.noStroke()
          p.ellipse(x, y, r)
        }
    
        p.fill(white)
        p.noStroke()
        p.rect(0, 0, 427.64, 155)

        p.fill(black)
        p.textSize(22)
        p.textFont(myFont)
        let nameWidth = p.textWidth(getMyData())
        let authorWidth = p.textWidth(getMyAuthor())
        // prettier-ignore
        p.text(getMyData(),(427 / 2) - (nameWidth / 2), 96)
    
        p.textFont(myFont)
        p.text(getMyAuthor(), (427 / 2) - (authorWidth / 2), 70)
        p.fill(0, 102, 153, 51)
      }

      if (getStoreEffect()) {
        p.fill(255)
        for (let i = 0; i <= circles; ++i) {
          let r = spiral.x * i
          let ratio = i / circles
          let angle = i * goldenAngle
          let spiral_rad = ratio * circle_rad
          let x = pos.x + p.cos(angle) * spiral_rad
          let y = pos.y + p.sin(angle) * spiral_rad
          p.noStroke()
          p.ellipse(x, y, r)
        }

        p.fill(white)
        p.noStroke()
        p.rect(0, 0, 427.64, 155)

        p.fill(black)
        p.textSize(22)
        p.textFont(myFont)
        let nameWidth = p.textWidth(getMyData())
        let authorWidth = p.textWidth(getMyAuthor())
        // prettier-ignore
        p.text(getMyData(),(427 / 2) - (nameWidth / 2), 96)
    
        p.textFont(myFont)
        p.text(getMyAuthor(), (427 / 2) - (authorWidth / 2), 70)
        p.fill(0, 102, 153, 51)
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

const right = function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(427.64, 593)
    canvas.parent(canvasContainerId3)
    let i = 0
    p.background(black)
    p.frameRate(1)

    let pos = p.createVector(214, 360)
    let circle_rad = 300
    let spiral = p.createVector(
      p.map(p.mouseX, 0, p.width, 0.003, 0.005),
      p.map(p.mouseY, 0, p.height, 0.003, 0.005)
    )
    p.fill(myR, myG, myB)
    for (let i = 0; i <= circles; ++i) {
      let r = spiral.x * i
      let ratio = i / circles
      let angle = i * goldenAngle
      let spiral_rad = ratio * circle_rad
      let x = pos.x + p.cos(angle) * spiral_rad
      let y = pos.y + p.sin(angle) * spiral_rad
      p.noStroke()
      p.ellipse(x, y, r)
    }

    p.fill(white)
    p.noStroke()
    p.rect(0, 0, 427.64, 155)
  }

  p.draw = () => {
    p.textSize(12)
    p.textFont(myFont)
    p.fill(0)
    p.text(getMyAbout(), 30, 30, 360)

    p.draw = () => {
      if (getStoreShift()) {
        p.background(black)
    
        let pos = p.createVector(214, 360)
        let circle_rad = 300
        let spiral = p.createVector(
          p.map(p.mouseX, 0, p.width, 0.003, 0.005),
          p.map(p.mouseY, 0, p.height, 0.003, 0.005)
        )
        p.fill(255)
        for (let i = 0; i <= circles; ++i) {
          let r = spiral.x * i
          let ratio = i / circles
          let angle = i * goldenAngle
          let spiral_rad = ratio * circle_rad
          let x = pos.x + p.cos(angle) * spiral_rad
          let y = pos.y + p.sin(angle) * spiral_rad
          p.noStroke()
          p.ellipse(x, y, r)
        }
    
        p.fill(white)
        p.noStroke()
        p.rect(0, 0, 427.64, 155)

        p.textSize(12)
        p.textFont(myFont)
        p.fill(0)
        p.text(getMyAbout(), 30, 30, 360)
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
    p.background(black)
    p.frameRate(1)

    let pos = p.createVector(214, 360)
    let circle_rad = 300
    let spiral = p.createVector(
      p.map(p.mouseX, 0, p.width, 0.003, 0.005),
      p.map(p.mouseY, 0, p.height, 0.003, 0.005)
    )
    p.fill(myR, myG, myB)
    for (let i = 0; i <= circles; ++i) {
      let r = spiral.x * i
      let ratio = i / circles
      let angle = i * goldenAngle
      let spiral_rad = ratio * circle_rad
      let x = pos.x + p.cos(angle) * spiral_rad
      let y = pos.y + p.sin(angle) * spiral_rad
      p.noStroke()
      p.ellipse(x, y, r)
    }

    p.fill(white)
    p.noStroke()
    p.rect(0, 0, 427.64, 155)
  }

  p.draw = () => {
    if (getStoreShift()) {
      p.background(black)
  
      let pos = p.createVector(214, 360)
      let circle_rad = 300
      let spiral = p.createVector(
        p.map(p.mouseX, 0, p.width, 0.003, 0.005),
        p.map(p.mouseY, 0, p.height, 0.003, 0.005)
      )
      p.fill(255)
      for (let i = 0; i <= circles; ++i) {
        let r = spiral.x * i
        let ratio = i / circles
        let angle = i * goldenAngle
        let spiral_rad = ratio * circle_rad
        let x = pos.x + p.cos(angle) * spiral_rad
        let y = pos.y + p.sin(angle) * spiral_rad
        p.noStroke()
        p.ellipse(x, y, r)
      }
  
      p.fill()
      p.noStroke()
      p.rect(0, 0, 427.64, 155)
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
