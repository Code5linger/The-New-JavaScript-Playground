let campleCase = '🐫';

let PascalCase = '💧';

let under_score = '🕳️';

console.log(campleCase, '\n', PascalCase, '\n', under_score, '\n');

let temp = 60;
console.log(temp);
temp = 420;
console.log(temp);

let name = 'Sakib';

console.log(name);

console.log('Hi! ' + name);

console.log('Hello ' + name);

// console.log(fName);
// console.log(greetings);
// console.log(emoji);

var fName = 'Sakib';
let greetings = 'Hi ';
const emoji = '👋';

console.log(greetings, fName, emoji);

// rules of naming a variables
// Can contain numbers, letters & symbols
// Cannot start with numbers
//  JS Is case sensetive
// Camel Case is preferable

// Best way to declare a variable
// CamelCase

let init = 1;
console.log(init);
if (true) {
  init = 69;
}
console.log(init);

const arr = [1, 2, 3];

console.log(arr);

arr.push(4);
console.log(arr);

const person = {
  name: 'Sakib',
  age: 29,
  email: 'sakib@gmail.com',
};

console.log(person);
person.name = 'Ahmed';
person.age = 69;
person.email = 'ahmed@gmail.com';
console.log(person);

let a = 'A',
  b = 'B',
  c = 'C';

console.log(a, b, c);

let age = 8;

console.log('You are only ' + age + ', too young for Facebook');

let swarma = 150,
  swarmaTax = (150 / 100) * 8.5;

let swarmaX5 = (swarma + swarmaTax) * 5;

console.log(swarmaX5);

let wagePerHour = 8,
  hourWorked = 12,
  totalWage = wagePerHour * hourWorked;

console.log(totalWage);

let para = '<p> tag to the front, and a closing </p>';

document.querySelector('body').innerHTML = para;

// Count = 10
// Tweet = hello world!10

// Count = 100
// Tweet = 100hello world!10

// Count = 10000
// Tweet = 100hello world!10. this is

let birthday = new Date('August 26, 1994');
console.log(birthday);
