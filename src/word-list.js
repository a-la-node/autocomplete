var fs = require('fs');

var wordlist = fs.readFileSync(__dirname + '/dictionary.txt', 'utf8').split('\n');

function validateInput(query) {
  return query.replace(/[^a-z]/gi, '');
}

function match(input) {
  var validatedInput = validateInput(input);
  var regex = new RegExp('^' + validatedInput, 'i');
  return wordlist.filter(function(word) { return regex.test(word); });
}

module.exports = {
  match: match,
  validateInput: validateInput
};
