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
  if (blogs.length === 0) {
    return 0
  }
  
  let favorite = blogs[0]

  blogs.map(blog => {
    if (blog.likes >= favorite.likes) {
      favorite = blog
    }
  })

  return favorite
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }

  const authors = _.countBy(blogs, 'author')
  
  const mostActive = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)

  const returnAuthor = {author: mostActive, blogs: authors[mostActive]}
  return returnAuthor
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }

  const authorsGrouped = _.groupBy(blogs, 'author')
  const likesOfAuthors = _.map(authorsGrouped, (authorBlogs, author) => ({
    author: author, 
    likes: _.sumBy(authorBlogs, 'likes')
    })
  )
  
  const authorWithMostLikes = _.maxBy(likesOfAuthors,'likes')

  return authorWithMostLikes
}


module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }