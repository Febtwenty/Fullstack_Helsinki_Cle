import { useState, useEffect } from 'react'
import axios from "axios"
import Countries from './components/Countries'

function App() {
  const [newCountry, setNewCountry] = useState('')
  const [countryData, setCountryData] = useState([])
  const [listOfCountryNames, setListOfCountryNames] = useState([])
  const [countryToShow, setCountryToShow] = useState('')

  useEffect(() => {
    console.log('fetching countries list...')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const dataOfCountries = response.data
        setListOfCountryNames(listOfCountryNames.concat(dataOfCountries.map(country => country.name.common)))
        setCountryData(dataOfCountries)
      })
  }, [])
  // console.log(countryData)

  return (
    <>
      <div>Find country: <input value={newCountry} onChange={e => setNewCountry(e.target.value)}/></div>
      <Countries listOfCountryNames={listOfCountryNames} newCountry={newCountry} countryData={countryData} countryToShow={countryToShow} setCountryToShow={setCountryToShow} />
    </>
  )
}

export default App
