import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Weather } from './components/Weather'
import './styles/index.css'

render(
  <StrictMode>
    <Weather />
  </StrictMode>,
  document.getElementById('root')
)
