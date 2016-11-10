var fs = require('fs');

var wordlist = fs.readFileSync(__dirname + '/dictionary.txt', 'utf8').split('\n');
var mostCommonWordlist = fs.readFileSync(__dirname + '/1000_most_common_words.txt', 'utf8').split('\n');

function validateInput(query) {
  return query.replace(/[^a-z]/gi, '');
}

function match(input) {
  var validatedInput = validateInput(input);
  var regex = new RegExp('^' + validatedInput, 'i');
  return wordlist.filter(function(word) { return regex.test(word); });
}

function smartMatch(input){
	var regex = new RegExp('^' + input, 'i');
	var normalList = wordlist.filter(function(word) { return regex.test(word); });
	var commonList = mostCommonWordlist.filter(function(word) { return regex.test(word); })
	var result = commonList;
	normalList.forEach(function(a){result.push(a)})
	console.log(result)
};

module.exports = {
  match: match,
  validateInput: validateInput,
  smartMatch: smartMatch
};
