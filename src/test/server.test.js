var test = require('tape');
var handler = require('../handler').handler;

var mockResponse = {
  writeHead : function(){},
  end : function(){}
};

test('Test if inputting / calls handlerForLandingPage function', function(t) {
  t.equal(handler({url:'/'}, mockResponse), 'handlerForLandingPage has been called');
  t.end();
});

test('Test that inputting /style.css calls handlerForAllPages function', function(t) {
  t.equal(handler({url:'/style.css'}, mockResponse), 'handlerForAllPages has been called');
  t.end();
});
