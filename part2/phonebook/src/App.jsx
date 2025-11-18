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
      alert(`${newName} was already added to phonebook.`)
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