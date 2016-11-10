var test = require('tape');
var testFuncs = require('../word-list.js');
var smartMatch = require('../word-list.js').smartMatch;
var match = require('../word-list.js').match;

test('Matching function: ', function(t) {
  t.deepEqual(testFuncs.match('Zyzzogeton'), ['Zyzzogeton'], 'finds one testFuncs.match for Zyzzogeton');

  t.equal(testFuncs.match('abba').length, 10, 'finds ten testFuncs.matches for abba');

  var expected = ['lionheart', 'lionhearted', 'lionheartedness'];
  t.deepEqual(testFuncs.match('lionheart'), expected, 'finds three testFuncs.matches for lionheartedness');

  t.deepEqual(testFuncs.match('dfkghdfgkjhdfghkjgadfjkh'), [], 'returns an empty array for nonsense input');
  
  t.end();
});

smartMatch('fi')

test('Validate function: ', function(t) {
  t.equal(testFuncs.validateInput('i£$%$^&*[c hk1345'), 'ichk', 'returns input with only letters');
  t.equal(testFuncs.validateInput('FVNT435£%! '), 'FVNT', 'correctly validates when given capitals');
  t.end();
});