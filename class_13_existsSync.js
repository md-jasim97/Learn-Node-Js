const fs = require('fs');
const http = require('http');
const server = http.createServer(function (req, res) {

    if (req.url=='/'){
        let result = fs.existsSync('DemoFile.html');
        if (result){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Here... Find it');
            res.end();
        }

        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File not Here... does not Find it');
            res.end();
        }
    }
});

server.listen(2020, ()=>{
    console.log('File exists sync method is called');
})