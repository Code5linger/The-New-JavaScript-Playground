'use strict';

const score = 0;
console.log(score);

let message = 'T_T';
// alert(message);
message = 'XD';
// alert(message);

console.log('Sup!');

const suit = '🤵';
console.log(suit);

const myName = `Sakib`;
console.log(myName);

const birthDate = new Date('August 26, 1994');
console.log(birthDate);

// x = 69;

if (5 == '5') {
  console.log('?');
} else {
  console.log('??');
}

function fun() {
  return 69;
}

console.log(fun());

let a = 123;
console.log(a);

while (a > 200) {
  a = 456;
  foo(a / 2);
}

console.log(a);

if (true) {
  a = 69;
  //   bar(a / 2);
}
console.log(a);

function one() {}
const four = function () {
  return 40;
};
const six = function three() {
  return 63;
};

console.log(six());
console.log(four());
// console.log(three());

const greetings = `Hello!`;
console.log(greetings);
greetings.toUpperCase(); // Method
console.log(greetings.toLowerCase());
console.log(greetings.toUpperCase());

const tweet = `Hay Elon, lol cringe!`;
console.log(tweet);
console.log(tweet.indexOf(`Elon`));
console.log(tweet.indexOf(`Hay`));
console.log(tweet.indexOf('Test'));
console.log(tweet.slice(14, 17));
console.log(tweet.length);

console.log(`Hello World!`.length);
console.log(`Hello World!`.charAt(11));
console.log(`Hello World!`.charAt(`Hello World!`.length - 1));
console.log(tweet.slice(14).toUpperCase().slice(5).toLowerCase());

const mail = `codeslinger@gmail.com`;

const result = mail.lastIndexOf('.');
console.log(result);

console.log(mail.slice(0, 11));

console.log(mail.replace('@', '#'));

const dev = `developer`;
console.log(dev.slice(0, 1).toUpperCase() + dev.slice(1, 20));
console.log(dev.charAt(0).toUpperCase() + dev.substring(1));
console.log(dev[0].toUpperCase() + dev.substring(1));

let x;

const name = `Sakib`,
  age = `30`;

x = 'Hello!';

console.log(`${x}, My name is ${name}. I am ${age} `);

console.log(x.length);

x = typeof name;
console.log(x);

console.log(x.__proto__);

const title = `Lord of the Rings`,
  published = new Date(`1954-07-29`);

const summary = `${title} is a book published in ${published.getFullYear()}`;

console.log(summary);

// console.log(published.__proto__);

const _myName = `Sakib`,
  email = `sakib@mail.com`,
  myTitle = `Programmer`;

const intro = `Hi! I am ${_myName}. My mail is ${email}. I am a ${myTitle}`;
console.log(intro);

function formatCurrency(strings, ...values) {
  let str = ``;
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == `number`) {
        // str += `$${values[i - 1].toFixed(4)}`;
        console.log((str += `%`));
      } else {
        // str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

// function formatCurrency() {}

const ammount = 69.42;

const msg = formatCurrency`Total ${ammount}`;

console.log(msg);

function emphasize(strings, ...values) {
  let result = ``;

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += `<strong>${values[i]}</strong>`;
    }
  }

  return result;
}

// Using the tagged template literal
const testName = 'Alice';
const action = 'coding';

const sentence = emphasize`Hello, ${testName}! I see you're busy with ${action}.`;
console.log(sentence);

function display(str) {
  document.querySelector('p').innerHTML = str;
}

display(sentence);

// const v = 42,
//   o = { a: 1, b: [2, 3, 4] };

// logger`Test ${v} and ${o}`;

// try {
//   nothing();
// } catch (err) {
//   logger`Caught: ${err}`;
// }

// Define the logger function as a tagged template literal
function logger(strings, ...values) {
  let result = ``;

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      const value = values[i];
      // Format objects as JSON, otherwise keep the value as-is
      result += typeof value === 'object' ? JSON.stringify(value) : value;
    }
  }

  console.log(result);
}

// Test data
const v = 42;
const o = { a: 1, b: [2, 3, 4] };

// Use the logger tagged template
logger`Test ${v} and ${o}`;

try {
  nothing(); // This function is undefined and will throw an error
} catch (err) {
  logger`Caught: ${err}`;
}

function upper(strings, ...values) {
  let ret = ``;
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      ret += String(values[i - 1]).toUpperCase();
    }
    ret += strings[i];
  }
  return ret;
}

const name2 = `Sakib`,
  x2 = `codeslinger`,
  topic = `JavaScript`;

console.log(
  upper`Hello ${name2} (@${x2}), Wellcome to ${topic}!` ===
    'Hello SAKIB (@CODESLINGER), Wellcome to JAVASCRIPT!'
);

const str = `Hello World`;

console.log(str.match(/(l.)/g));
console.log(str.match(/(l.)$/g));
console.log(str.match(/(l.)(?=o)/g));
console.log(str.match(/(l.)(?!o)/g));

const notNum = NaN;

console.log(notNum);
console.log(notNum === notNum);
console.log(NaN === NaN);
console.log(Number('0o46'));

console.log(Number.isNaN(notNum));

const negZero = -0;
console.log(negZero == -0);
console.log(negZero === -0);

negZero.toString();
console.log(negZero.toString());
console.log(negZero === 0);

console.log(Object.is(negZero, -0));
console.log(Object.is(negZero, 0));
