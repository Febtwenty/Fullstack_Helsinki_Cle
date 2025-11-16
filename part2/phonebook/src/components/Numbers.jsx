const Numbers = ({ persons, filter }) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <ul>
        {personsToShow.map(person => 
            <li key={person.name}>{person.name} {person.number}</li>
        )}
    </ul>
  )
}

export default Numbers