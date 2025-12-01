require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Contact = require('./models/contact')

const app = express()

app.use(express.static('dist'))
app.use(express.json())

// Morgan logger
morgan.token('body', req => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// Get all notes, root
app.get('/', (req, res) => {
    res.send(
        '<h1>Hello Visitor!</h1>'
    )
})

// Display all notes of the DB
app.get('/api/persons', (req, res) => {
  Contact.find({}).then(contacts => {
  res.json(contacts)
  })
})

// DEPRECATED, Info about phonebook
app.get('/info', (req, res) => {
    const lengthPhonebook = persons.length
    console.log(lengthPhonebook)
    res.send(`
        <div>
            Phonebook has info for ${lengthPhonebook} people. <br/>
            ${new Date()}
        </div>`
    )
})

// DEPRECATED, Display one particular phonebook entry of the DB
app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

// Delete one particular phonebook entry of the DB
app.delete('/api/persons/:id', (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
})

// Add a new phonebook entry to the DB
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.phonenumber) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  const contact = new Contact({
    name: body.name,
    phonenumber: body.phonenumber,
  })
  
  contact.save().then(savedContact => {
    res.json(savedContact)
  })
})

// Start
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
