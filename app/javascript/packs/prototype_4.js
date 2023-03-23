import React from 'react'
import ReactDOM from 'react-dom'
import Container from '../prototypes/prototype_4/Container'
import { initSketch } from '../prototypes/prototype_4/sketch'

import {
  getStoreShift,
  setStoreShift,
  getStoreEnthropy,
  setStoreEnthropy,
  getStoreEffect,
  setStoreEffect,
  getStoreSave,
  setStoreSave,
  getStoreName,
  setStoreName,
} from '../prototypes/prototype_4/store'

const props = {
  shift: getStoreShift(),
  enthropy: getStoreEnthropy(),
  effect: getStoreEffect(),
  save: getStoreSave(),
  name: getStoreName()
}

const actions = {
  setStoreShift,
  setStoreEnthropy,
  setStoreEffect,
  setStoreSave,
  setStoreName
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_4')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})