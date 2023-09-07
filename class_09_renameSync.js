const fs = require('fs');
const http = require('http');
const server = http.createServer(function (req, res) {

    if (req.url=='/'){
        let error = fs.renameSync('myPractice.txt', 'practice.html');
        if (error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File rename Sync method failed');
            res.end();
        }

        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File rename Sync method Successful');
            res.end();
        }
    }
});

server.listen(2020, ()=>{
    console.log('File rename sync method is called');
})