function createServer(){

    const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res){

    // Home page code start here
    if (req.url=='/'){
        res.writeHead(200, {'Content-Type':'text/http'});
        res.write('This is Home Page');
        res.end();
    }
    // Home page code end here




    // Contact page code start here
    else if (req.url=='/contact'){
        res.writeHead(200, {'Content-Type':'text/http'});
        res.write('This is Contact Page');
        res.end();
    }
    // Contact page code end here


    // WriteFile() method (Create demo.txt file) code start here
    else if(req.url=='/file-write'){
        fs.writeFile('demo.txt','Hello World', function (error) {
            if (error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Write Failed');
                res.end();
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Write Successful');
                res.end();
            }
        });
    }
    // WriteFile() method (Create demo.txt file) code end here

    //

});

server.listen(3000, ()=>{
    console.log('3000 port Server run Successful');
});


}

createServer()