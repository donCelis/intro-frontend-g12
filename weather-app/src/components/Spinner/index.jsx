import iconLoading from '../../assets/loading.svg'

export const Spinner = () => {
  return (
    <figure style={{ position: 'relative', zIndex: '1000' }}>
      <img src={iconLoading} alt='Loading' />
    </figure>
  )
}
