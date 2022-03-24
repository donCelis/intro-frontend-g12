import { useEffect, useState } from 'react'
import { useContador } from '../../hooks/useContador'

export const LifeCicle = () => {
  const [example, setExample] = useState('...loading')

  const { contador, sumar } = useContador(0)

  /* useEffect(()=>{}) -> ejecuta el efecto cada que cambia el estado de mi app */
  /* useEffect(() => {
    console.log('Se cargó el componente')
    // timing
    setTimeout(() => {
      console.log('Se actualizó el componente')
      setExample('Cambio de estado')
    }, 2000)
  }) */

  /* useEffect(() => {}, []) -> ejecuta el efecto solo la primera vez que se  monta el componente */
  /* useEffect(() => {
    console.log('se cargó el componete')
    setTimeout(() => {
      console.log('Se actualizó el componente')
      setExample('Cambio de estado')
    }, 2000)
  }, []) */

  /* useEffect(()=>{}, [dependendicas]) -> ejecuta cada que cambie una de sus dependecias */
  /* useEffect(() => {
    console.log('se cargó el componete')
    setTimeout(() => {
      if (example === '...loading') {
        console.log('Se actualizó el componente')
        setExample('Cambio de estado')
      }
    }, 2000)
  }, [example]) */

  useEffect(() => {
    contador === 10 && console.log('cambio')
  }, [contador])

  return (
    <>
      <p>Ciclo de vida de un componente</p>
      <p>{example}</p>
      <p>{contador}</p>
      <button onClick={() => sumar()}>+</button>
    </>
  )
}
