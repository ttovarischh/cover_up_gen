import React from 'react'
import Guide from '../components/Guide'
import * as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('rootContainer')
const root = ReactDOMClient.createRoot(container)

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Guide />)
})
