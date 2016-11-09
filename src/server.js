var fs = require('fs');
var http = require('http');
var PORT = process.env.PORT || 4000;

var handler = function(request, response){
  var url = request.url;
  if (url==='/'){
    fs.readFile(__dirname + '../public/index.html', function(error, data){
      if (error){
        console.log("Error");
      }
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    })
  }
}

var server = http.createServer(handler);
server.listen(PORT);
console.log('Server is running on port: ', PORT);
