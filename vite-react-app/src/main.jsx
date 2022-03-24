/* dependencias */
import { StrictMode } from 'react'
import { render } from 'react-dom'

/* styles */
import './styles/index.css'

/* components */
import { CounterOps } from './components/CounterOps'

render(
  <StrictMode>
    <>
      <CounterOps />
    </>
  </StrictMode>,
  document.getElementById('root')
)
