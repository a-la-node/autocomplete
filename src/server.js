var fs = require('fs');
var http = require('http');
var PORT = process.env.PORT || 4000;

var handler = function(request, response){
  var url = request.url;
  var fileType = url.split('.')[1];

  if (url === '/'){
    fs.readFile(__dirname + '/../public/index.html', function(error, data){
      if (error){
        console.log(error);
      }
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    });
  } else {
      fs.readFile(__dirname + '/../public' + url, function(error, data){
        if (error){
          console.log(error);
        }
        response.writeHead(200, {'content-type': 'text/'+ fileType});
        response.end(data);
      });
  }
}

var server = http.createServer(handler);
server.listen(PORT);
console.log('Server is running on port: ', PORT);
