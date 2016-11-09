var test = require('tape');
var match = require('../word-list.js').match;

test('Matching function: ', function(t) {
  t.deepEqual(match('Zyzzogeton'), ['Zyzzogeton'], 'successfully finds one match for Zyzzogeton');

  t.equal(match('abba').length, 10, 'successfully finds ten matches for abba');

  var expected = ['lionheart', 'lionhearted', 'lionheartedness'];
  t.deepEqual(match('lionheart'), expected, 'successfully finds three matches for lionheartedness');

  t.end();
});
