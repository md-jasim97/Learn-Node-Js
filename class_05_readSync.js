// Sync readFile() method in http server

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        const myData = fs.readFileSync('practice.html');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }
})

server.listen(2020, ()=>{
    console.log("Sync File Run Successful");
})