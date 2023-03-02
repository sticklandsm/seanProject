const fs = require('node:fs/promises')

makeItSo()

async function readFile(file) {
  const words = JSON.parse(await fs.readFile(file, 'utf-8'))
  return words
}

async function writeFile(newObj) {
  console.log(Object.keys(newObj).length)
  fs.writeFile(
    'public/data/SimpleFourDef.json',
    JSON.stringify(newObj),
    (err) => {
      if (err) {
        throw err
      }
    }
  )
  console.log('words saved', ' data is saved.')
}

async function makeItSo() {
  try {
    let allWords = await readFile('public/data/fourLetterWords.json')
    let simpleWords = await readFile('public/data/SimpleFourDef.json')

    const keys = Object.keys(simpleWords)
    const values = Object.values(simpleWords)
    let fourLetterWords = {}
    let i = 0
    console.log(keys[1000], values[1000], 'simple Words')

    // keys.forEach((key) => {
    //   if (simpleWords.includes(key.toUpperCase())) {
    //     fourLetterWords[key] = values[i]
    //   }
    //   i++
    // })
    // writeFile(await fourLetterWords)
    console.log('words saved', ' data is saved. in theory')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { readFile, writeFile }
