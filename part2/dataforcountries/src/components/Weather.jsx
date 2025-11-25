import { useState, useEffect } from 'react'
import axios from "axios"

const Weather = ({ country, lat, lng, weather, setWeather }) => {
    const apiKey = import.meta.env.VITE_API_WEATHER_KEY
    const exclude = 'minutely,hourly,daily,alerts'
    const units = 'metric'
    

    useEffect(() => {
    console.log('fetching weather data...')
    axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${apiKey}&units=${units}`)
      .then(response => {
        setWeather(response.data)
      })
    }, [])

    console.log(weather)
    console.log(Object.keys(weather).length > 0)

    if (!weather) {
      return null
    }

    if (Object.keys(weather).length > 0) {
      return (
        <>
            <h1>Weather in {country}</h1>
            <div>
                Temperature: {weather.current.temp} Celsius<br/>
                <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} /><br/>
                Wind {weather.current.wind_speed} m/s<br/>
            </div>
        </>
    )
    }
    
}

export default Weather