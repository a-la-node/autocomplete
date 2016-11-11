var wordFinder = (function() {
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
    displayOptionsList();
    return words.map(function(word) { return '<li class="item">' + word +'</li>';} ).join('');
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
