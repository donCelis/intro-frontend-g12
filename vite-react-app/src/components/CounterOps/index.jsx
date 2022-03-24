import { useContador } from '../../hooks/useContador'
import './counter.scss'

export const CounterOps = ({ initialValue = 0 }) => {
  const { contador, sumar, restar } = useContador(initialValue)
  return (
    <section>
      <p>Número</p>
      <p>{contador}</p>
      <button onClick={() => sumar()}>+</button>
      <button onClick={() => restar()}>-</button>
    </section>
  )
}
