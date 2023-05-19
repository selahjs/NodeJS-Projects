const fs = require('fs')

//the readFile code has callBack, there fore it will be excuted after immidiate codes get excuted
//i.e. last
console.log('stareted reading first file')
fs.readFile('./content/first.txt', 'utf8', (err, res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(res);
    console.log('completed reading file');
})
console.log('started reading second file');

// result
    // stareted reading first file
    // started reading second file
    // Hello from first text
    // completed reading file