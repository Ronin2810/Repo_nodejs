const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url=='/'){
        res.statusCode=200;
        const data = fs.readFileSync('./website.html')
        res.end(data.toString())
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        const data = fs.readFileSync('./website-about.html')
        res.end(data.toString())
    }
    else{
        res.statusCode=404
        res.end("<h1>The page you requested was not found</h1>")
    }

})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})