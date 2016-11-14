var test = require('tape');
var handler = require('../handler').handler;
var fs = require('fs');

test('Inputting / returns the index.html', function(t) {
  var indexFile = fs.readFileSync(__dirname + '/../../public/index.html');
  handler({url: '/'}, {
    writeHead: function(status, obj) {
      t.equal(status, 200);
      t.deepEqual(obj, {'content-type': 'text/html'});
    },
    end: function(data) {
      t.deepEqual(data, indexFile);
    }
  });
  t.end();
});

test('Inputting /styles/style.css returns the style.css', function(t) {
  var cssFile = fs.readFileSync(__dirname + '/../../public/styles/style.css');
  handler({url: '/styles/style.css'}, {
    writeHead: function(status, obj) {
      t.equal(status, 200);
      t.deepEqual(obj, {'content-type': 'text/css'});
    },
    end: function(data) {
      t.deepEqual(data, cssFile);
    }
  });
  t.end();
});

test('Inputting /scripts/index.js returns the js file', function(t) {
  var jsFile = fs.readFileSync(__dirname + '/../../public/scripts/index.js');
  handler({url: '/scripts/index.js'}, {
    writeHead: function(status, obj) {
      t.equal(status, 200);
      t.deepEqual(obj, {'content-type': 'text/js'});
    },
    end: function(data) {
      t.deepEqual(data, jsFile);
    }
  });
  t.end();
});

test('Inputting nonsense should return a 404', function(t) {
  handler({url: '/kjghf/jhg'}, {
    writeHead: function(status, obj) {
      t.equal(status, 404);
      t.deepEqual(obj, {'content-type': 'text/html'});
    },
    end: function(data) {
      t.equal(data, '404 Not Found\n');
    }
  });
  t.end();
});

test('Inputting punctuation should return a 404', function(t) {
  handler({url: '/....'}, {
    writeHead: function(status, obj) {
      t.equal(status, 404);
      t.deepEqual(obj, {'content-type': 'text/html'});
    },
    end: function(data) {
      t.equal(data, '404 Not Found\n');
    }
  });
  t.end();
});
