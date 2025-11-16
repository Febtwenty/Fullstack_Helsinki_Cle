const Numbers = ({ persons, filter }) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <div>
        <h2>Numbers</h2>
        <ul>
            {personsToShow.map(person => 
                <li key={person.name}>{person.name} {person.number}</li>
            )}
        </ul>
    </div>
  )
}

export default Numbers