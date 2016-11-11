var mockPhrase = (function() {
  var input = document.getElementsByTagName('input')[0];
  var phrase = [];

  input.addEventListener('keydown', function(event) {
    if(event.key === 'Backspace') {
      phrase.pop();
    } else {
      phrase.push(event.key);
    }
    sendRequest(phrase.join(''));
  });

  function sendRequest(phrase) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search?q=' + phrase);
    xhr.addEventListener('load', function() {
      document.getElementById('results').innerHTML = buildOptionsList(JSON.parse(this.responseText));
    });
    xhr.send();
  }

  function buildOptionsList(words) {
    var innerHTML = '';
    words.forEach(function(word) {
      innerHTML += '<li>' + word +'</li>';
    });
    return innerHTML;
  }

  return {
    buildOptionsList : buildOptionsList
  };

})();
