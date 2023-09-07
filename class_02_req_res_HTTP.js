// server request & response module use
// home page/ about page/ contact page/ service page response

const http = require('http');
const server = http.createServer(function (req, res) {
    if (req.url=='/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is a Home Page');
        res.end();
    }
    else if (req.url=='/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is a About Page');
        res.end();
    }else if (req.url=='/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is a Contact Page');
        res.end();
    } else if (req.url=='/service'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is a Service Page');
        res.end();
    }


});

server.listen(5050, ()=>{
    console.log('Server run Successful');
});