const fs = require('node:fs/promises')

async function readFile(file) {
  const words = JSON.parse(
    await fs.readFile(
      'server/public/data/FourLettersNoMatchSticks.json',
      'utf-8'
    )
  )
  return words
}

async function writeFile(newObj, fileToWriteTo) {
  console.log(Object.keys(newObj).length)
  fs.writeFile(
    'public/data/' + fileToWriteTo,
    JSON.stringify(newObj),
    (err) => {
      if (err) {
        throw err
      }
    }
  )
  console.log('words saved to', fileToWriteTo, ' data is saved.')
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = { readFile, writeFile, randomIntFromInterval }
