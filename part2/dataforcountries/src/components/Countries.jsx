const Countries = ({ listOfCountryNames, newCountry, countryData, countryToShow, setCountryToShow }) => {

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