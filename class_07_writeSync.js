// Sync readFile() method in http server

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        const error = fs.writeFileSync('DemoSync.html', "Welcome to writeFileSync()");
        if (error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("File write is failed");
            res.end();
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("file write is successful");
            res.end();
        }

    }
})

server.listen(2020, ()=>{
    console.log("Sync File Run Successful");
})