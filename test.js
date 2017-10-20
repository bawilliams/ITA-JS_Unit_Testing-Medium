/* Medium: Create the tests below for a function that will take in a single object parameter with two properties, a string and a single character. 
• Write a test that will verify that the function returns the first indice where that character is found in the string.
• Write a test that will verify that the function returns false if the character is not found in the string.
• Write a test that will verify that the function returns false if the parameter passed into the function is invalid.
• Write a function that will make these tests succeed. */

var expect = require('chai').expect;

function characterFinder({prop1: stringP, prop2: characterP}) {
  // Ensure that both properties are strings and that the character exists in the string
  if (typeof stringP === 'string' && typeof characterP === 'string' && stringP.indexOf(characterP) > -1) {
    return stringP.indexOf(characterP);
  } else {
    return false;
  }
};

describe('String Properties Work', function() {

  it('should only take in strings', function() {
    
    expect(characterFinder({prop1: 0, prop2: 1})).to.be.false;
    expect(characterFinder({prop1: null, prop2: undefined})).to.be.false;
    expect(characterFinder({prop1: true, prop2: false})).to.be.false;
  });

  it('should return the first indice of that character in the string', function() {
    
    expect(characterFinder({prop1: 'Apple', prop2: 'p'})).to.be.equal(1);
    expect(characterFinder({prop1: 'Apple', prop2: 'A'})).to.be.equal(0);
  });
  
  it('should return false if character is not found', function() {
    
    expect(characterFinder({prop1: 'Apple', prop2: 'q'})).to.be.false;
  });

});