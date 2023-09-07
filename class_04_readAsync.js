// Async readFile() method in http server

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.readFile('practice.html', function (error, data) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
})

server.listen(2020, ()=>{
    console.log("File Run Successful");
})