const fizzBuzz = require('./fizzBuzz');

describe('fizBuzz', () => {
  it('Should be a function.', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('Should return a number if not divided by 3 or 5.', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(17)).toEqual(17);
    expect(fizzBuzz(23)).toEqual(23);
  });

  it('Should return Fizz if divided by 3.', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(33)).toEqual('Fizz');
    expect(fizzBuzz(99)).toEqual('Fizz');
  });

  it('Should return Buzz if divided by 5.', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(50)).toEqual('Buzz');
    expect(fizzBuzz(100)).toEqual('Buzz');
  });

  it('Should return FizzBuzz if divided by 5.', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(90)).toEqual('FizzBuzz');
  });
});
