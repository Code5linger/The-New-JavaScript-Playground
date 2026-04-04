const reverseString = require('./reverseString');

describe('reverseString', () => {
  it('Should be a function.', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('Should be a function.', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('Should return the reversed string.', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('bye')).toEqual('eyb');
    expect(reverseString('wow')).toEqual('wow');
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });
});
