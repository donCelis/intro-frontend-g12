/* dependencias */
import { StrictMode } from 'react'
import { render } from 'react-dom'

/* styles */
import './styles/index.css'

/* components */
import { App } from './components/App'
import { Counter } from './components/Counter'

render(
  <StrictMode>
    <>
      <App />
      <Counter initialValue={10} />
      <Counter initialValue={20} />
    </>
  </StrictMode>,
  document.getElementById('root')
)
