const express = require('express')
const hbs = require('express-handlebars')
const fs = require('node:fs/promises')
const {
  readFile,
  writeFile,
  randomIntFromInterval,
} = require('./usefulFunctions')

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
    const listOfWords = await readFile('FourLettersNoMatchSticks.json')
    const wordNumber = randomIntFromInterval(
      0,
      Object.keys(listOfWords).length - 1
    )
    const currentWord = Object.keys(listOfWords)[wordNumber]
    const currentWordDef = Object.values(listOfWords)[wordNumber]

    console.log(currentWord, currentWordDef)
    const currentTopic = { word: currentWord, definition: currentWordDef }
    res.render('home', currentTopic)
  } catch (err) {
    console.log(err)
  }
})

module.exports = server
