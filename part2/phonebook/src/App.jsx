import { useState } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import AddNew from './components/AddNew'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Felix Frise', number: '040-3453463' },
    { name: 'Aldo Palermo', number: '040-867543' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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