const _ = require('lodash')

const Blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Ada Lala",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Ada Lala",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Ada Lala",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  }
]

// lodash countBy: Count instances of objects with a value of a certain key
// Returns an object of type { author: number of instances }
const authors = _.countBy(Blogs, 'author')
console.log(authors)

// reduce: Iterate through an array, here the keys of "authors"
const mostActive = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)
console.log(mostActive)

// lodash groupBy: returns an object with keys of "author" and arrays as its values, holding objects of that author
// {author1: [{blog1, blog2, ..., blogn of that author}], author2: [{blog1, blog2, ..., blogn of that author}], ...}
const authorsGrouped = _.groupBy(Blogs, 'author')
console.log(authorsGrouped)

// map: Creates an array of values by running each element in a collection thru the iteratee. 
// The function has 3 parameters, value, key and the collection. Here key is the authors name, value is the array of blog objects.
// sumBy makes the sum and also accepts an itaratee which is invoked for each element of an array. The `_.property` iteratee shorthand is used for likes
const likesOfAuthors = _.map(authorsGrouped, (value, key) => ({
    author: key, 
    likes: _.sumBy(value, 'likes')
    }
    )
  )
console.log(likesOfAuthors)