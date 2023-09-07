// file rename() method use

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.rename('practice.html', 'myPractice.txt', function (error) {
            if (error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File rename failed');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File rename Successful');
                res.end();
            }
        });
    }


});

server.listen(2020, ()=>{
    console.log('File rename method call Successful');
});