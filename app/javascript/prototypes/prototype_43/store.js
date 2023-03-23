let shift = false
let enthropy = false
let effect = false
let save = false

function getStoreShift() {
  return shift
}

function setStoreShift(data) {
  shift = data
}

function getStoreEnthropy() {
  return enthropy
}

function setStoreEnthropy(data) {
  enthropy = data
}

function getStoreEffect() {
  return effect
}

function setStoreEffect(data) {
  effect = data
}

function getStoreSave() {
  return save
}

function setStoreSave(data) {
  save = data
}

export {
  getStoreShift,
  setStoreShift,
  getStoreEnthropy,
  setStoreEnthropy,
  getStoreEffect,
  setStoreEffect,
  getStoreSave,
  setStoreSave
}
