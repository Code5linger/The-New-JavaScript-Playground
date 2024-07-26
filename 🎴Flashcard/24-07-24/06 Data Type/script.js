let string = 'Test';

console.log(string[1]);
console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string.indexOf('st'));

let num = 69;
console.log(typeof num);

let boolA = true;
console.log(!boolA);

let tempMail = '69420';
console.log(tempMail.includes('@'));

let nullType = null;
console.log(nullType);

let undef = undefined;
console.log(undef, typeof undef);

let id = Symbol('id');
console.log(typeof id);

const numBig =
  -9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

console.log(typeof numBig);

console.log(1.2e10);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE);

console.log(typeof 1n);

console.log(1_000_560_000_000n);

// String
let name = 'Sakib';
let upperCaseName = name.toUpperCase(); // SAKIB
console.log(name.length);

let x = 5,
  y = 2;

let result = x * y ** 2;
