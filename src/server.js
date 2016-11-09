var http = require('http');
var PORT = process.env.PORT || 4000;

var handler = function(request, response){
  var endpoint = request.url;

}

var server = http.createServer(handler);
server.listen(port);
console.log("Server is running on port: ", port);
