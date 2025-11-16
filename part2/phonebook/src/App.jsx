import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    console.log(newName)
    setPersons(persons.concat({name: newName}))
    setNewName('')
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

        <div>debug: {newName}</div>

      </form>

      <h2>Numbers</h2>
      <Numbers numbers={persons} />

    </div>
  )
}

export default App