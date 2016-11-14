var wordFinder = (function() {
  'use strict';
  var input = document.getElementsByTagName('input')[0];
  input.addEventListener('input', function(event) {
    sendRequest(event.target.value);
  });

  function sendRequest(phrase) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search?q=' + phrase);
    xhr.addEventListener('load', function() {
      document.getElementById('results').innerHTML = buildOptionsList(JSON.parse(this.responseText), phrase);
      displayOptionsList();
    });
    xhr.send();
  }

  function buildOptionsList(words, phrase) {
    var options = '';
    words.forEach(function(word) {
      var result = '';
      result += '<span>'+ phrase + '</span>';
      var ending = word.toLowerCase().split(phrase.toLowerCase())[1];
      if(ending && ending.length) {
        result += '<span class="bold-letter">'+ ending +'</span>';
      }
      options += '<li class="item">' + result +'</li>';
    });
    return options;
  }

  function displayOptionsList(){
    var optionsDisplay = document.getElementById('results');
    if (input.value === ''){
      optionsDisplay.style.display = 'none';
    } else {
      optionsDisplay.style.display = 'block';
    }
  }

  return {
    buildOptionsList : buildOptionsList,
    displayOptionsList : displayOptionsList
  };

})();
