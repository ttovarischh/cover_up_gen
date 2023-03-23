import React from 'react'
import ReactDOM from 'react-dom'
import Container from '../prototypes/prototype_6/Container'
import { initSketch } from '../prototypes/prototype_6/sketch'

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
  setStoreName
} from '../prototypes/prototype_6/store'

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
  const container = document.getElementById('prototype_6')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})
