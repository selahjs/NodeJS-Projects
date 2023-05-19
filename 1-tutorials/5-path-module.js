const path = require('path')

//path separator
console.log(path.sep)


const pathName = path.join('node-project','app.js')

console.log(pathName)

const absolutePath = path.resolve(__dirname, pathName)

console.log(absolutePath)
console.log(path.basename(__dirname))

