const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end('welcome to Home Page');
    } else if(req.url === '/aboutus'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h3> welcome to About Page </h3>`)
    } else if(req.url === '/contactus'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<a href="https://www.masaischool.com">contact us at www.masaischool.com</a>`);
    } else if(req.url === '/index'){
        fs.readFile('index.js','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server Error')
            } else {
                res.writeHead(200, {'Content-Type':'text/javascript'});
                res.end(data)
            }
        });
    } else {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('404 Not Found!')
    }
});

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
    
})