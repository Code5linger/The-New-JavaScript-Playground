// Solution 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// module.exports = reverseString;

// Solution 2
// function reverseString(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// module.exports = reverseString;

// Solution 3
function reverseString(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverseString;
