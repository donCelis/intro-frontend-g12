import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { fetchCity } from '../../utils/fetchCity'

export const Weather = () => {
  const [city, setCity] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = async () => {
      const res = await fetchCity('medellin')
      setCity(res)
      setLoading(false)
    }
    Object.keys(city).length === 0 && data()
  }, [])

  return loading
    ? (<p>...Loading</p>)
    : (
      <div className='container'>
        <div className='weather-side'>
          <div className='weather-gradient' />
          <div className='date-container'>
            <h2 className='date-dayname'>Tuesday</h2>
            <span className='date-day'>15 Jan 2019</span>
            <FeatherIcon className='location-icon' icon='map-pin' />
            <span className='location'>{city.city.name}, FR</span>
          </div>
          <div className='weather-container'>
            <FeatherIcon className='weather-icon' icon='sun' />
            <h1 className='weather-temp'>29°C</h1>
            <h3 className='weather-desc'>Sunny</h3>
          </div>
        </div>
        <div className='info-side'>
          <div className='today-info-container'>
            <div className='today-info'>
              <div className='precipitation'>
                <span className='title'>PRECIPITATION</span>
                <span className='value'>0 %</span>
              </div>
              <div className='humidity'>
                <span className='title'>HUMIDITY</span>
                <span className='value'>34 %</span>
              </div>
              <div className='wind'>
                <span className='title'>WIND</span>
                <span className='value'>0 km/h</span>
              </div>
            </div>
          </div>
          <div className='week-container'>
            <ul className='week-list'>
              <li className='active'>
                <FeatherIcon className='day-icon' icon='sun' />
                <span className='day-name'>Tue</span>
                <span className='day-temp'>29°C</span>
              </li>
              <li>
                <FeatherIcon className='day-icon' icon='cloud' />
                <span className='day-name'>Wed</span>
                <span className='day-temp'>21°C</span>
              </li>
              <li>
                <FeatherIcon className='day-icon' icon='cloud-snow' />
                <span className='day-name'>Thu</span>
                <span className='day-temp'>08°C</span>
              </li>
              <li>
                <FeatherIcon className='day-icon' icon='cloud-rain' />
                <span className='day-name'>Fry</span>
                <span className='day-temp'>19°C</span>
              </li>
            </ul>
          </div>
          <div className='location-container'>
            <button className='location-button'>
              <FeatherIcon icon='map-pin' />
              <span>Change location</span>
            </button>
          </div>
        </div>
      </div>
      )
}
