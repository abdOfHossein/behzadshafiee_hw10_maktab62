const fs = require('fs');
const http = require('http');
const port = 5000;

http.createServer(function (req, res) {
    if (req.url === '/url' && req.method === 'GET') {
        res.end(`localhost:${port}${req.url}`)
    }
}).listen(port);

