import Hello from './components/Hello'
import Countries from './components/Countries'
import './styles/main.css'

document.querySelector('#app').innerHTML = `
  ${Hello()}
  ${Countries()}
`
