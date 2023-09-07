// file delete or unlink() method use

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.unlink('DemoSync.html', function (error) {
            if (error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Delete failed');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Delete Successful');
                res.end();
            }
        });
    }


});

server.listen(2020, ()=>{
    console.log('File Delete method called');
});