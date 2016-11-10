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
    xhr.addEventListener('load', function(data) {
      var datalist = document.getElementById('results');
      datalist.innerHTML = buildOptionsList(data);
    });
    xhr.send();
  }

  function buildOptionsList(words) {
    var innerHTML = '';
    words.forEach(function(word) {
      innerHTML += '<option value="' + word +'">';
    });
    return innerHTML;
  }

  return {
    buildOptionsList : buildOptionsList
  }

})();
