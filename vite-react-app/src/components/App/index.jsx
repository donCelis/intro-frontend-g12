import './app.scss'

export const App = () => {
  const apiKey = import.meta.env.APP_SOME_KEY

  console.log(apiKey)
  return (
    <p className='text'>Componente funcional</p>
  )
}
