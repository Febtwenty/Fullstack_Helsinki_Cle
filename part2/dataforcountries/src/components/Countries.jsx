import Weather from "./Weather"

const Countries = ({ listOfCountryNames, newCountry, countryData, countryToShow, setCountryToShow, weather, setWeather }) => {

    const countriesToShow = listOfCountryNames.filter(country => 
    country.toLowerCase().includes(newCountry.toLowerCase())
    )

    if (countriesToShow.length > 10) {
        return (
            <>Too many matches, specify another.</>
        )
    }

    if (countriesToShow.length === 1) {
        const dataOfSingleCountry = countryData.filter(country => 
            country.name.common.toLowerCase().includes(newCountry.toLowerCase())
        )
        console.log(dataOfSingleCountry)

        var languagesCountry = []
        for (const [key, value] of Object.entries(dataOfSingleCountry[0].languages)) {
            languagesCountry = languagesCountry.concat(value)
        }

        const lat = dataOfSingleCountry[0].latlng[0]
        const lng = dataOfSingleCountry[0].latlng[1]

        return (
            <div>
                <h1>{countriesToShow}</h1>
                <p>
                    Capital: {dataOfSingleCountry[0].capital} <br/>
                    Area: {dataOfSingleCountry[0].area}
                </p>
                <h1>Languages</h1>
                <ul>
                    {languagesCountry.map(language =>
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img src={dataOfSingleCountry[0].flags.png} alt={dataOfSingleCountry[0].flags.alt} />

                <Weather country={countryToShow} lat={lat} lng={lng} weather={weather} setWeather={setWeather} />
            </div>
        )
    }

    if (countryToShow) {
        const dataOfSingleCountry = countryData.filter(country => 
            country.name.common.toLowerCase().includes(countryToShow.toLowerCase())
        )
        console.log(dataOfSingleCountry)

        var languagesCountry = []
        for (const [key, value] of Object.entries(dataOfSingleCountry[0].languages)) {
            languagesCountry = languagesCountry.concat(value)
        }

        const lat = dataOfSingleCountry[0].latlng[0]
        const lng = dataOfSingleCountry[0].latlng[1]

        return (
            <div>
                <h1>{countryToShow}</h1>
                <p>
                    Capital: {dataOfSingleCountry[0].capital} <br/>
                    Area: {dataOfSingleCountry[0].area}
                </p>
                <h1>Languages</h1>
                <ul>
                    {languagesCountry.map(language =>
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img src={dataOfSingleCountry[0].flags.png} alt={dataOfSingleCountry[0].flags.alt} /> <br />
                <button onClick={() => setCountryToShow('')}>Exit</button>

                <Weather country={countryToShow} lat={lat} lng={lng} weather={weather} setWeather={setWeather} />
            </div>
        )
    }

    return (
        <>
            <ul>
                {countriesToShow.map(country =>
                    <li key={country}>
                        {country}
                        <button onClick={() => setCountryToShow(country)}>Show Country</button>
                    </li>
                )
                }
            </ul>
        </>
    )
}

export default Countries