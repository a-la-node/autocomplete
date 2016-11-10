var fs = require('fs');

var wordlist = fs.readFileSync(__dirname + '/dictionary.txt', 'utf8').split('\n');
var mostCommonWordlist = fs.readFileSync(__dirname + '/1000_sorted.txt', 'utf8').split('\n');

function validateInput(query) {
  return query.replace(/[^a-z]/gi, '');
}

function makeRegExp(input) {
  return new RegExp('^' + input, 'i');
}

function match(list, regex) {
  return list.filter(function(word) { return regex.test(word); });
}

function smartMatch(input){
  var regex = makeRegExp(validateInput(input));
  var normalList = match(wordlist, regex);
  var commonList = match(mostCommonWordlist, regex);
  return commonList.concat(normalList);
};

module.exports = {
  match: match,
  validateInput: validateInput,
  smartMatch: smartMatch
};
