const palindrome = require('./palindrome');

describe('Palindrome', () => {
  // ! Type Test
  it('Should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });

  it('Should be a boolean', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });

  // ! Truthy Input Test
  it('Should return true if it is a palindrome.', () => {
    expect(palindrome('wow')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
  });

  // ! Falsy Input Test
  it('Should return false if it is not a palindrome.', () => {
    expect(palindrome('sup')).toBeFalsy();
    expect(palindrome('hello')).toBeFalsy();
    expect(palindrome('world')).toBeFalsy();
  });
});
