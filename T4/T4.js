const fs = require('fs');
const http = require('http');
const port = 3000;

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.end(`Hello Web Application`);
    }
    else if (req.url === '/aboutMe' && req.method === 'GET') {
        res.end(`about me`);
    }
    else if (req.url === '/home' && req.method === 'GET') {
        res.end(`Home`);
    }
    else if (req.url === '/communicateUs' && req.method === 'GET') {
        res.end('091111111111');
    }
    else if (req.url === '/more' && req.method === 'GET') {
        res.end(`main Web===>www.howAreYou.com`);
    }
    else {
        res.end('Not Found')
    }
}).listen(port);