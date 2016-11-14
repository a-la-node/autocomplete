//Checking that the files and links are set up correctly to test:
QUnit.test( "Initial test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "test buildOptionsList function with a one word argument", function( assert ) {
  var actual = wordFinder.buildOptionsList(["hello"], "hello");
  assert.equal(actual, '<li class="item"><span>hello</span></li>', "buildOptionsList is returning an option tag with 1 word" );
});

QUnit.test( "test buildOptionsList function with two arguments", function( assert ) {
  var actual = wordFinder.buildOptionsList(["hello", "hell"], "hel");
  var expected = '<li class="item"><span>hel</span><span class="bold-letter">lo</span></li>' +
                 '<li class="item"><span>hel</span><span class="bold-letter">l</span></li>';
  assert.equal(actual, expected, "buildOptionsList is returning 2 option tags with 2 word" );
});

QUnit.test( "test buildOptionsList function with empty array", function( assert ) {
  var actual = wordFinder.buildOptionsList([]);
  assert.equal(actual, "", "buildOptionsList returns an empty string when the input is an empty array" );
});

QUnit.test( "test displayOptionsList", function( assert ) {
  document.getElementsByTagName("input")[0].value = "hello";
  wordFinder.displayOptionsList();
  assert.equal(document.getElementById("results").style.display, "block", "sets display to block" );
});

QUnit.test( "test displayOptionsList", function( assert ) {
  document.getElementsByTagName("input")[0].value = "";
  wordFinder.displayOptionsList();
  assert.equal(document.getElementById("results").style.display, "none", "sets display to none" );
});
