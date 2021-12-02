const fs = require('fs');
const http = require('http');
const port = 5500;

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Hello World');
    }
    else if (req.url === '/person' && req.method === 'GET') {
        fs.readFile('./file.json', function (err, data) {
            if (err) {
                console.log(`err=>${err}`);
            }
            else {
                res.end(data);
            }
        })
    }

}).listen(port);

