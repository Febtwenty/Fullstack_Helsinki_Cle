const Countries = ({ listOfCountryNames, newCountry, countryData }) => {

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
        const languagesCountry = []
        for (const [key, value] of Object.entries(dataOfSingleCountry[0].languages)) {
            console.log(`${key}: ${value}`)
            languagesCountry = languagesCountry.concat(value)
        }
        console.log(dataOfSingleCountry[0].languages)
        console.log(languagesCountry)

        return (
            <div>
                <h1>{countriesToShow}</h1>
                <p>Capital: {dataOfSingleCountry[0].capital}</p>
                <p>Area: {dataOfSingleCountry[0].area}</p>
            </div>
        )
    }

    return (
        <>
            <ul>
                {countriesToShow.map(country =>
                    <li key={country}>{country}</li>
                )
                }
            </ul>
        </>
    )
}

export default Countries