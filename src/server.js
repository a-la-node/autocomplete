var http = require('http');
var runHandler = require('./handler');
var PORT = process.env.PORT || 4000;

var server = http.createServer(runHandler.handler);
server.listen(PORT);
console.log('Server is running on port: ', PORT);
