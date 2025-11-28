const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Give the password as an argument.')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://cleopold_db_user:${password}@cluster0.tzcg2ss.mongodb.net/phonebook?appName=Cluster0`

const Name_input = process.argv[3]
const Number_input = process.argv[4]

mongoose.set('strictQuery', false)

if (Name_input && Number_input) {
    mongoose.connect(url, { family: 4 })

    const contactSchema = new mongoose.Schema({
        name: String,
        phonenumber: String,
    })

    const Contact = mongoose.model('Contact', contactSchema)

    const contact = new Contact({
        name: Name_input,
        phonenumber: Number_input,
    })

    contact.save().then(result => {
        console.log(`Added ${Name_input} number ${Number_input} to phonebook.`)
        mongoose.connection.close()
    })
}


if (process.argv.length === 3) {
    mongoose.connect(url, { family: 4 })

    const contactSchema = new mongoose.Schema({
        name: String,
        phonenumber: String,
    })

    const Contact = mongoose.model('Contact', contactSchema)

    console.log('phonebook:')

    Contact.find({}).then(result => {
      result.forEach(contact => {
        console.log(`${contact.name} ${contact.phonenumber}`)
      })
      mongoose.connection.close()
    })
}

