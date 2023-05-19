// const express = require('express')() ... since we get a function, we can invoke it imidiately
const express = require('express')
const path = require('path')
// const html = require('./index.html')
const app = express()

// console.log(html)
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('<h2>404 Resource not found</h2>')
})

app.listen(5000, ()=> console.log('listning...'))

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen