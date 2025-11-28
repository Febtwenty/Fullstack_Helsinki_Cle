import phonebookServices from '../services/phonebook'
const Numbers = ({ persons, filter, setPersons }) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    const deleteContactOf = (id, name) => {
        if (confirm(`Are you shure that you want to delete ${name} from the adress book?`)) {
            phonebookServices
            .deleteEntry(id)
            .then(r => {
                console.log('User deleted successfully:', r)
                phonebookServices
                      .getAll()
                      .then(response => setPersons(response))
            })
        }
    }

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person => 
                    <li key={person.name}>
                        {person.name} {person.phonenumber}
                        <button onClick={() => deleteContactOf(person.id, person.name)}>Delete Contact</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Numbers