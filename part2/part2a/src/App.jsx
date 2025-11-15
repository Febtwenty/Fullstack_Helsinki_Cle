import { useState } from 'react'
import Note from './components/Note'

function App({notes}) {
  
  const listItems = notes.map(note =>
    <li key={note.id}>
      {note.content}
    </li>
  )

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {listItems}
      </ul>

      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
