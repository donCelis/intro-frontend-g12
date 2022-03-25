import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { fetchCity } from '../../utils/fetchCity'

export const Weather = () => {
  const [city, setCity] = useState({})
  const [loading, setLoading] = useState(true)

  const optionsDay = {
    weekday: 'long'
  }

  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const convertDay = (date, options) => new Date(date).toLocaleDateString('es', options)

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
            <h2 className='date-dayname'>{convertDay(city.list[0].dt_txt, optionsDay)}</h2>
            <span className='date-day'>{convertDay(city.list[0].dt_txt, optionsDate)}</span>
            <FeatherIcon className='location-icon' icon='map-pin' />
            <span className='location'>{city.city.name}, {city.city.country}</span>
          </div>
          <div className='weather-container'>
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`}
              alt=''
            />
            <h1 className='weather-temp'>{city.list[0].main.temp.toFixed(0)}°C</h1>
            <h3 className='weather-desc'>{city.list[0].weather[0].description}</h3>
          </div>
        </div>
        <div className='info-side'>
          <div className='today-info-container'>
            <div className='today-info'>
              <div className='precipitation'>
                <span className='title'>PRECIPITATION</span>
                <span className='value'>{city.list[0].pop * 100} %</span>
              </div>
              <div className='humidity'>
                <span className='title'>HUMIDITY</span>
                <span className='value'>{city.list[0].main.humidity} %</span>
              </div>
              <div className='wind'>
                <span className='title'>WIND</span>
                <span className='value'>{city.list[0].wind.speed} mt/s</span>
              </div>
            </div>
          </div>
          <div className='week-container'>
            <ul className='week-list'>
              {city.list.map((day, index) =>
                <li key={index} className='active'>
                  <FeatherIcon className='day-icon' icon='sun' />
                  <span className='day-name'>Tue</span>
                  <span className='day-temp'>{day.main.temp.toFixed(0)}°C</span>
                </li>
              )}
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
