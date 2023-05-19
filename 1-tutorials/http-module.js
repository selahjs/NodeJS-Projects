const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hello from home page')
    }
    if(req.url==='/about'){
        res.end('hello from about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we can't seem to find what you're looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(4004)