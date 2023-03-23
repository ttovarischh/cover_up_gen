import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from '../components/MainPage'
import * as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('rootContainer')
const root = ReactDOMClient.createRoot(container)

document.addEventListener('DOMContentLoaded', () => {
  root.render(<MainPage />)
})
