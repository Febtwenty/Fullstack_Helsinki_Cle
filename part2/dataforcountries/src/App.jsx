import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [newCountry, setNewCountry] = useState('')
  const [listOfCountryNames, setListOfCountryNames] = useState([])

  useEffect(() => {
    console.log('fetching countries list...')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const dataOfCountries = response.data
        console.log(dataOfCountries)
        setListOfCountryNames(listOfCountryNames.concat(dataOfCountries.map(country => country.name.common)))
      })
  }, [])
  console.log(listOfCountryNames)

  const countriesToShow = listOfCountryNames.filter(country => 
    country.toLowerCase().includes(newCountry.toLowerCase())
  )

  return (
    <>
      <div>Find country: <input value={newCountry} onChange={e => setNewCountry(e.target.value)}/></div>
      <ul>
        {countriesToShow.map(country =>
          <li key={country}>{country}</li>
        )}
      </ul>
    </>
  )
}

export default App
