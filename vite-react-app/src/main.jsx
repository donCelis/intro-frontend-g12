/* dependencias */
import { StrictMode } from 'react'
import { render } from 'react-dom'

/* styles */
import './styles/index.css'

/* components */
import { LifeCicle } from './components/lifeCicle'

render(
  <StrictMode>
    <>
      <LifeCicle />
    </>
  </StrictMode>,
  document.getElementById('root')
)
