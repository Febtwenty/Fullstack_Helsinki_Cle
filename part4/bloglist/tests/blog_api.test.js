const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
  {
    title: 'Felix is cool',
    author: 'Felix Dad',
    url: 'www.google.com',
    likes: 10000000000,
  },
  {
    title: 'Coding is cool',
    author: 'Aplha',
    url: 'www.google.com',
    likes: 10,
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')
  
  const contents = response.body.map(r => r.title)
  assert(contents.includes('Felix is cool'))
})

test('the unique identifyier is called "id"', async() => {
  const response = await api.get('/api/blogs')

  const blogs_keys = Object.keys(response.body[0])
  assert(blogs_keys.includes('id'))
  assert(!blogs_keys.includes('_id'))
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'New blogpost for testing',
    author: 'async',
    url: 'www.google.com',
    likes: 2,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await api.get('/api/blogs')
    assert.strictEqual(blogsAtEnd.body.length, initialBlogs.length + 1)

    const contents = blogsAtEnd.body.map(r => r.title)
    assert(contents.includes('New blogpost for testing'))
})

test('missing likes value defaults to "0"', async () => {
  const newBlog = {
    title: 'Another new blogpost for testing',
    author: 'likes dev',
    url: 'www.google.com',
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await api.get('/api/blogs')
    const likesOfLatest = blogsAtEnd.body[blogsAtEnd.body.length -1].likes
    assert.strictEqual(0, likesOfLatest)
})

test('missing title or url results in 400 bad request', async () => {
  const missingUrlBlog = {
    title: 'Missing url',
    author: 'likes dev',
  }

  await api
    .post('/api/blogs')
    .send(missingUrlBlog)
    .expect(400)
  
  const missingTitleBlog = {
    author: 'likes dev',
    url: 'www.google.com'
  }

  await api
    .post('/api/blogs')
    .send(missingTitleBlog)
    .expect(400)
})

test('a blogpost can be deleted', async () => {
  const response = await api.get('/api/blogs')
  const idFirstBlog = response.body[0].id

  await api
    .delete(`/api/blogs/${idFirstBlog}`)
    .expect(204)

  const blogsAfter = await api.get('/api/blogs')
  assert.strictEqual(blogsAfter.body.length, initialBlogs.length - 1)
})

after(async () => {
  await mongoose.connection.close()
})