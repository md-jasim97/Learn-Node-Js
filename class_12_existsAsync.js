// file Exists() method use

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.exists('practice.html', function (result) {
            if (result){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File exists Successful');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File exists failed');
                res.end();
            }
        });
    }


});

server.listen(2020, ()=>{
    console.log('File exists method called');
});