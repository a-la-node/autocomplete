# autocomplete

You can see it live [here!](http://autocorrecter.herokuapp.com/)

## What?
Create an autocomplete search bar

## Why?
To practice node and writing back-end things.

## How?
### Front-end
- Create webpage with input field to submit
- XHR on keypress
- Update <div> with retrieved search suggestions

### Back-end
- Import word list as variable (API? txt file?) (pair A)
- Create end point for requests (a server)      (pair B)
- Send response of search suggestions back to front-end

### Testing
- Unit testing as we go

### Stretch Goals
- Modularise files
- Set up Continuous integration with Travis, and code coverage using Codecov and istanbul.
- Look at categorising words ie. trousers in Menswear

### Folder Structure
public {<br>
  index.html<br>
  style.css<br>
  index.js<br>
  test {<br>
    test.html<br>
    spec.js<br>
  }<br>
}<br>
src{<br>
  server.js<br>
  dictionary.txt<br>
  wordlist.js<br>
  handler.js<br>
  test{<br>
    test.js<br>
  }<br>
}<br>
