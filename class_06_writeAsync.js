// Async writeFile() method in http server

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.writeFile('DemoFile.html','Welcome to writeFile() method in node js', function (error) {
            if (error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write("File write is failed");
                res.end();
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write("File write is successful");
                res.end();
            }
        });
    }
})

server.listen(2020, ()=>{
    console.log("File Run Successful");
})