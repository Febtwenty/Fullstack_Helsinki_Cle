import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import phonebookServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    phonebookServices
      .getAll()
      .then(response => setPersons(response))
  }
  useEffect(hook, [])

  const addEntry = (e) => {
    e.preventDefault()
    const checkNames = persons.map(person => person.name)

    if (checkNames.includes(newName)) {
      if (confirm(`${newName} was already added to phonebook. Replace the old number with the new one?`)) {
        const personToChange = persons.find(p => p.name === newName)
        const changedPerson = {...personToChange, number: newNumber}
        phonebookServices
          .updateEntry(changedPerson.id, changedPerson)
          .then(response => {
            setPersons(persons.map(p => p.id === personToChange.id ? response : p))
          })
      }
    } else {
      phonebookServices
        .create({name: newName, number: newNumber})
        .then(r => {
          setPersons(persons.concat(r))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <AddNew addEntry={addEntry} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Numbers persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App