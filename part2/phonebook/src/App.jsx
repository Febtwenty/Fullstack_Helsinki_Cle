import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const checkNames = persons.map(person => person.name)
    
    if (checkNames.includes(newName)) {
      alert(`${newName} was already added to phonebook.`)
    } else {
      setPersons(persons.concat({name: newName}))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Numbers numbers={persons} />

    </div>
  )
}

export default App