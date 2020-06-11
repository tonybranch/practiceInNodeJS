// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Папка создана.')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
//   if(err) {
//     throw err
//   }

//   console.log('Файл создан.')

//   fs.appendFile(filePath, '\nPractice in JS!', (err) => {
//     if(err) {
//       throw err
//     }
  
//     console.log('Данные добавлены в файл.')
//   })
// })

// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     throw err
//   }
//   const data = Buffer.from(content)
//   console.log('Контент:', data.toString())
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  console.log('Контент:', content)
})