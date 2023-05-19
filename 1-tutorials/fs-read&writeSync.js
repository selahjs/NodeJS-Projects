const { readFileSync, writeFileSync} = require('fs')

//must set the encoding to utf8
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//the writeFileSync will create a new file with the given name, if there is no such file
//however if there is it will overwrite the existing content inside the file
writeFileSync('./content/newTextFile.txt', `The result is: ${first}`)

// we can add an a flag to append to an existing file i.e. append to it.
writeFileSync('./content/newTextFile.txt', `The result is: ${second}`, {flag: 'a'})


// console.log(first)