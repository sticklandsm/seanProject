const fs = require('node:fs/promises')

// badLetters = ['d', 'k', 'm', 'n', 'q', 'r', 't', 'v', 'w', 'x']

// makeItSo()

async function readFile(file) {
  const words = JSON.parse(await fs.readFile(file, 'utf-8'))
  return words
}

// async function writeFile(newObj) {
//   console.log(Object.keys(newObj).length)
//   fs.writeFile(
//     'public/data/FourLettersNoMatchSticks.json',
//     JSON.stringify(newObj),
//     (err) => {
//       if (err) {
//         throw err
//       }
//     }
//   )
//   console.log('words saved', ' data is saved.')
// }

// async function makeItSo() {
//   try {
//     // let allWords = await readFile('public/data/fourLetterWords.json')
//     let simpleWords = await readFile('public/data/SimpleFourDef.json')

//     const keys = Object.keys(simpleWords)
//     // const values = Object.values(simpleWords)
//     let goodWords = {}
//     let i = 0
//     // console.log(keys[1000], values[1000], 'simple Words')

//     // const hasTheLetters = (word, letters) => {
//     //   return letters.some((letter) => word.includes(letter))
//     // }

//     let newArr = keys.filter((key) => {
//       return !badLetters.some((badLetter) => key.includes(badLetter))
//     })
//     newArr.forEach((item) => {
//       goodWords[item] = simpleWords[item]
//     })
//     console.log(Object.keys(goodWords).length)
//     writeFile(goodWords)
//     console.log('words saved', ' data is saved. in theory')
//   } catch (err) {
//     console.log(err)
//   }
// }

module.exports = { readFile, writeFile }
