import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from '../components/Menu'
import { Weather } from '../components/Weather'

const Home = () => <p>Home</p>

const NotFound = () => <p>Page not found</p>

export const Paths = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='weather' element={<Weather />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
