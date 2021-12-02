const fs = require('fs');
const http = require('http');
const port = 1000;

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Hello World');
    }
    else if (req.url === '/page' && req.method === 'GET') {
        fs.readFile('./public/page.html', function (err, page) {
            if (err) {
                console.log(`err=>${err}`);
            }
            else {
                res.end(page);
            }
        })
    }
    else if (req.url === '/page1' && req.method === 'GET') {
        fs.readFile('./public/index.html', function (err, page) {
            if (err) {
                console.log(`err=>${err}`);
            }
            else {
                res.end(page);
            }
        })
    }

}).listen(port);



