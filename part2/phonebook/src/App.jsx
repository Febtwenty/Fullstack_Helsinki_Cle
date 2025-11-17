import { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddNew from './components/AddNew'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const addEntry = (e) => {
    e.preventDefault()
    const checkNames = persons.map(person => person.name)
    
    if (checkNames.includes(newName)) {
      alert(`${newName} was already added to phonebook.`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <AddNew addEntry={addEntry} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App