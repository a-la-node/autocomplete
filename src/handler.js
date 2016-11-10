var fs = require('fs');

var handler = function(request, response){
  var url = request.url;
  if (url === '/'){
    handlerForLandingPage(request, response);
    return 'handlerForLandingPage has been called';
  } else if ( (/search?=/).test(url) ) {
    handlerForSearch(request, response);
  } else {
    handlerForAllPages(request, response);
  }
};

function handlerForLandingPage (request, response) {
  fs.readFile(__dirname + '/../public/index.html', function(error, data){
    if (error){
      throw error;
    }
    response.writeHead(200, {'content-type': 'text/html'});
    response.end(data);
  });
}

function handlerForSearch (request, response) {
  var url = request.url;
  var searchTerm = url.split('?=')[1];
  console.log(searchTerm);

}

function handlerForAllPages(request, response) {
  var url = request.url;
  var fileType = url.split('.')[1];
  fs.readFile(__dirname + '/../public' + url, function(error, data){
    if (error){
      throw error;
    }
    response.writeHead(200, {'content-type': 'text/'+ fileType});
    response.end(data);
  });
}

module.exports = {
  handler: handler
};
