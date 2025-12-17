const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://cleopold_db_user:${password}@cluster0.tzcg2ss.mongodb.net/testBlogList?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({

    title: 'Felix is cool',
    author: 'Felix Dad',
    url: 'www.google.com',
    likes: 10000000000,
})

blog.save().then(result => {
    console.log('Blog saved!')
    mongoose.connection.close()
})