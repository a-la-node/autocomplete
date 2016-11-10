//Checking that the files and links are set up correctly to test:
QUnit.test( "Initial test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "test buildOptionsList function with a one word argument", function( assert ) {
  var actual = mockPhrase.buildOptionsList(['hello']);
  assert.equal(actual, '<option value="hello">', "buildOptionsList is returning an option tag with 1 word" );
});

QUnit.test( "test buildOptionsList function with two arguments", function( assert ) {
  var actual = mockPhrase.buildOptionsList(['hel', 'lo']);
  assert.equal(actual, '<option value="hel"><option value="lo">', "buildOptionsList is returning 2 option tags with 2 word" );
});

QUnit.test( "test buildOptionsList function with empty array", function( assert ) {
  var actual = mockPhrase.buildOptionsList([]);
  assert.equal(actual, '', "buildOptionsList returns an empty string when the input is an empty array" );
});
