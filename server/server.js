const express = require('express')
const hbs = require('express-handlebars')
const fs = require('node:fs/promises')
const { readFile, writeFile } = require('./makeSmall.js')

const server = express()

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
console.log('dirname sean ', __dirname)
server.set('views', __dirname + '/views')

// Your routes/router(s) should go here

server.get('/', async (req, res) => {
  try {
    let words = await readFile()

    const keys = Object.keys(words)
    const values = Object.values(words)
    let fourLetterWords = {}
    let i = 0
    keys.filter((key) => {
      if (key.length === 4) {
        fourLetterWords[key] = values[i]
      }
      i++
    })
    writeFile(await fourLetterWords)
    console.log(fourLetterWords)
    res.render('home', words)
  } catch (err) {
    console.log(err)
  }
})

module.exports = server
