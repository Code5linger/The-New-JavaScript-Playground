/*
🎴Using the Console 01. Syntax
*/

console.log('Hello');
console.log('1');
console.log('2');
console.log('3');

// alert('A');

1 + 1;

console.log(100);
console.log('Hello World!');
console.log(69, 'Sup!', true);

console.error('💥');
console.warn('⚠️');
console.assert(false, 'WTF?');

let foo = 69,
  bar = 420;

foo = [1, 2, 3, 4];
// bar = [9, 8, 7, 6];
console.table([foo, bar]);

// let input = prompt('Input something : ');
// console.log(input);

let text = 'A' + 'B' + 'C';
console.log(text);
text = text + 'D' + 'E' + 'F';
console.log(text);
text += 'G' + 'H' + 'I';
console.log(text);

console.log(text.length);

// let what_you_said = prompt('Say something');

// alert('Replay : ' + what_you_said.toUpperCase() + '😡');

// document.write('Test');

let display = (text) => {
  document.write(text);
};

let name_a = prompt('Add a PERSONS NAME');
let name_b = prompt('Add another PERSONS NAME');
let movie = prompt('Add Movie NAME');

display(
  'I went to the movies yesterday with ' +
    name_a +
    ' and ' +
    name_b +
    '. We saw ' +
    movie
);
