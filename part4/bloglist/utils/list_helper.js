const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  let favorite = blogs[0]

  blogs.map(blog => {
    if (blog.likes >= favorite.likes) {
      favorite = blog
    }
  })

  return favorite
}

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, 'author')
  
  const mostActive = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)

  const returnAuthor = {author: mostActive, blogs: authors[mostActive]}
  return returnAuthor
}


module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }