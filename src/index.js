import React from 'react'
import App from './App'
import './index.css'

import { createRoot } from 'react-dom/client'
const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App tab='home' />
  </React.StrictMode>
)
