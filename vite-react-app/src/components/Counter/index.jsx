import { useState } from 'react'
import './counter.scss'

export const Counter = ({ initialValue = 0 }) => {
  /* Lógica -> comportamiento del componente */
  /*
    Reglas de los hooks
    1. Todo hooks se ejecuta dentro de un componente
    2. La mayoria de hooks inician con el prefijo use
    3. No se puede ejecutar dentro ciclos ni condicionales
    4. Generalmente los hooks son funciones, por ende reciben props
  */

  const [contador, modContador] = useState(initialValue)

  const sumar = () => modContador(contador + 1)

  /* JSX -> como se ve mi componente */
  return (
    <section>
      <p>Número</p>
      <p>{contador}</p>
      <button onClick={() => sumar(contador + 1)}>+</button>
    </section>
  )
}
