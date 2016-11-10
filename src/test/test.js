var test = require('tape');
var testFuncs = require('../word-list.js');

test('Matching function: ', function(t) {
  t.deepEqual(testFuncs.smartMatch('Zyzzogeton'), ['Zyzzogeton'], 'finds one testFuncs.smartMatch for Zyzzogeton');

  t.equal(testFuncs.smartMatch('abba').length, 10, 'finds ten testFuncs.smartMatches for abba');

  var expected = ['lionheart', 'lionhearted', 'lionheartedness'];
  t.deepEqual(testFuncs.smartMatch('lionheart'), expected, 'finds three testFuncs.smartMatches for lionheartedness');

  t.deepEqual(testFuncs.smartMatch('dfkghdfgkjhdfghkjgadfjkh'), [], 'returns an empty array for nonsense input');
  
  t.end();
});

test('Matching function: ', function(t) {
  t.deepEqual(testFuncs.smartMatch('fi')[0], 'first', 'returns "first" rather than "fi"');
  t.end()
});

test('Validate function: ', function(t) {
  t.equal(testFuncs.validateInput('i£$%$^&*[c hk1345'), 'ichk', 'returns input with only letters');
  t.equal(testFuncs.validateInput('FVNT435£%! '), 'FVNT', 'correctly validates when given capitals');
  t.end();
});