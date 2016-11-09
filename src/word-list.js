var fs = require('fs');

var wordlist = fs.readFileSync(__dirname + '/dictionary.txt', 'utf8').split('\n');

function match(input) {
  var regex = new RegExp('^' + input, 'i');
  return wordlist.filter(function(word) { return regex.test(word); });
}

module.exports = {
  match: match
};
