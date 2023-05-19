const { readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, res)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = res
    writeFile('./content/newTextFileAsync.txt', `creating file using asnyc write file: ${first}`,
    (err, res)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(res)
    })
})