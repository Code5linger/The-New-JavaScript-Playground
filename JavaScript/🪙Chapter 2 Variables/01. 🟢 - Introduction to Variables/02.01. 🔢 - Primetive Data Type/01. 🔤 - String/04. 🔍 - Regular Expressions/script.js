'use strict';

const string = `Hello World`;

console.log(string.match(/(l)/g)); // 'H' // l == All 'l'
console.log(string.match(/(l.)/g)); // 'll', 'ld' // l. == l + Next Word
console.log(string.match(/(.l)/g)); // 'el', 'rl' // .l == l + Previous Word
console.log(string.match(/(l..)/g)); // 'llo', 'ld!' // l.. == l + Next 2 Word

console.log(string.match(/(l.)$/g));
console.log(string.match(/(l.)$/g));

console.log(string.match(/(l.)(?=o)/g));
console.log(string.match(/(W)(?=o)/g));
console.log(string.match(/(W)(?!o)/g));

console.log(string.match(/(?<=e)(l.)/g));
console.log(string.match(/(?<!e)(l.)/g));

console.log(`Test ${string}`);

const checkout = 69.42;

// function addSign() {
//   return `$ `;
// }

let total = addSign`Total ${checkout}/-`;

console.log(total);

function addSign(strings, ...values) {
  let str = ``;
  console.log(strings, str);
  for (let i = 0; i < strings.length; i++) {
    console.log(strings, str);
    if (i > 0) {
      if (typeof values[i - 1] == 'number') {
        str += `৳${values[i - 1].toFixed(3)}`;
        console.log(strings, str);
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

const publicationDate = '2001-12-19';
console.log(`${publicationDate.split('-')[0]}`);

// const HTMLBadges = prompt();
// const CSSBadges = prompt();
// const totalBages = parseInt(HTMLBadges) + parseInt(CSSBadges);

// alert(`Total badges: ${totalBages}`);

console.log(typeof '42');
console.log(typeof 42);

let a = 69;
a = a / 2;
a = String(a);

console.log(a, typeof a);

function questionsOrganizer() {
  if (qusetionsLeft >= 2) {
    return `Questions Left ${qusetionsLeft}`;
  } else {
    return `Last Question!`;
  }
}

// let qusetionsLeft = 3;
// const ques1 = prompt(`Qusetion 1 | ${questionsOrganizer()}`);
// qusetionsLeft -= 1;
// const ques2 = prompt(`Qusetion 2 | ${questionsOrganizer()}`);
// qusetionsLeft -= 1;
// const ques3 = prompt(`Qusetion 3 | ${questionsOrganizer()}`);
// console.log(`Inputs ${ques1}, ${ques2} & ${ques3}`);

console.log(a + 1 - 1 === a);

const a1 = 0.1,
  b2 = 0.2,
  c3 = 0.3;

console.log(a1 + b2 + 3 === a1 + (b2 + c3));
