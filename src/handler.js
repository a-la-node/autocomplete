var fs = require('fs');
var runSmartMatch = require('./word-list');

var handler = function(request, response){
  var url = request.url;
  if (url === '/'){
    handlerForLandingPage(request, response);
  } else if(/search/.test(url)) {
    handlerForSearch(request, response);
  } else if(/test/.test(url)) {
    handleTest(request, response);
  } else {
    handlerForAllPages(request, response);
  }
};

function handlerForLandingPage (request, response) {
  fs.readFile(__dirname + '/../public/index.html', function(error, data){
    if (error){
      response.writeHead(404, {'content-type': 'text/html'});
      response.end('404 Not Found\n');
      return;
    }
    response.writeHead(200, {'content-type': 'text/html'});
    response.end(data);
  });
}

function handleTest (request, response) {
  var path = request.url.split('?')[0];
  if(path === '/test') { path += '/test.html'; }
  fs.readFile(__dirname + '/../public' + path, function(error, data) {
    if(error) { throw new Error(error); }
    response.writeHead(200, {'content-type': 'text/html' });
    response.end(data);
  });
}

function handlerForSearch (request, response) {
  var searchTerm = request.url.split('?q=')[1];
  response.writeHead(200, {'content-type': 'text/plain'});
  response.end(JSON.stringify(runSmartMatch.smartMatch(searchTerm).slice(0, 10)));
}

function handlerForAllPages(request, response) {
  var url = request.url;
  var fileType = url.split('.')[1];
  fs.readFile(__dirname + '/../public' + url, function(error, data){
    if (error){
      response.writeHead(404, {'content-type': 'text/html'});
      response.end('404 Not Found\n');
      return;
    }
    response.writeHead(200, {'content-type': 'text/'+ fileType});
    response.end(data);
  });
}

module.exports = {
  handler: handler
};
