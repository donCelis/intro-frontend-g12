/* dependencias */
import { StrictMode } from 'react'
import { render } from 'react-dom'

/* styles */
import './styles/index.css'

/* components */
import { App } from './components/App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
