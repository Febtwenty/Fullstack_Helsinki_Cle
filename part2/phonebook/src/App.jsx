import { useState } from 'react'
import Numbers from './components/Numbers'

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
      
      <form>
        <div>Filter shown with<input value={filter} onChange={e => setFilter(e.target.value)} /></div>
      </form>

      <h2>add a new</h2>
      <form onSubmit={addEntry}>
        <div>Name: <input value={newName} onChange={e => setNewName(e.target.value)}/></div>
        <div>Number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App