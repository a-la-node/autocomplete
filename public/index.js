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
      document.getElementById('results').innerHTML = buildOptionsList(JSON.parse(this.responseText));
    });
    xhr.send();
  }

  function buildOptionsList(words) {
    var options = '';
    words.forEach(function(word) {
      var result = '';
      result += '<span>'+ input.value + '</span>';
      if (word.split(input.value)[1] !== undefined ) {
        result += '<span class="bold-letter">'+ word.split(input.value)[1]+'</span>';
      }
      options += '<li class="item">' + result +'</li>';
    });
    displayOptionsList();
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
