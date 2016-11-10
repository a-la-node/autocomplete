var test = require('tape');
var handler = require('../handler').handler;

var mockResponse = {
  writeHead : function(){},
  end : function(){}
};

test('Test if inputting http://localhost:4000/ calls handlerForLandingPage function', function(t){
  t.equal(handler({url:'/'}, mockResponse), 'handlerForLandingPage has been called');
  t.end();
});
