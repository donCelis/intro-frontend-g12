import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Paths } from './routes'
import './styles/index.css'

render(
  <StrictMode>
    <Paths />
  </StrictMode>,
  document.getElementById('root')
)
