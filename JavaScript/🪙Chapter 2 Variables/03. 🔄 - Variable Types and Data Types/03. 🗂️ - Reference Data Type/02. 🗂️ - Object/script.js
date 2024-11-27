'use strict';

function data() {
  return {
    a: 1,
    b: { c: 3, d: 4 },
  };
  //   return;
}

let temp = data() || {};
let a = temp.a,
  b = temp.b,
  c = temp.c;

console.log(a, b, c);

let { ...third } = data() || {};

console.log(a, third);

// let o = {
//   prop: value,
// };

// let obj = {};
// console.log(typeof obj);

// let obj2 = new Object();
// console.log(typeof obj2);

// let temp = data();
// let first, second;

// first = temp.a;
// second = temp.b;

// console.log(first, second);

// ({ b: second, a: first } = data());
// console.log(first, second);

//  Functions
const name = 'Sakib';

const great = () => 'Hello';

let result1 = great();
console.log(result1);

// Methods

const objA = {
  a: 1,
  b: 2,
  c: 3,
};

const objB = {
  ...objA,
  x: 98,
  y: 99,
  z: 100,
};

// const completeObj = Object.assign({}, objA, objB);
const completeObj = { ...objA, ...objB };
console.log(completeObj);

console.log(objA);
console.log(objB);

let box = {};
box.material = 'cardboard';

console.log(box);
console.log(box.material);

let cb = box.material;
console.log(cb);

box.material = 'titeniam';

console.log(box.material);
console.log(cb);
