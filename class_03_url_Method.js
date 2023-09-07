const http = require('http');
const URL = require('url');

const server = http.createServer(function (req, res) {
    let myUrl = ('https://ostad.app/dashboard/my-courses/6425bf5b105c7b8066e16154/videos?module=64b0f168b7776b1a74ee21d8');
    let urlDetails = URL.parse(myUrl, true);

    let hostName = urlDetails.host;
    let pathName = urlDetails.pathname;
    let search = urlDetails.search;

    res.write("Host Name : "+hostName+'\n');
    res.write("Path Name : "+pathName+'\n');
    res.write("Search : "+search);
    res.end();
});

server.listen(5050, ()=>{
    console.log("Server run successful")
});