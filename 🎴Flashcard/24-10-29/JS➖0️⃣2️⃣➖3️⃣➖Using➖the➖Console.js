// // alert('Yo!');

// console.log(2 + 2);

// let obj = { type: 'Fiat', model: '500', color: 'white' };

// console.log(
//   typeof 'String',
//   typeof 69,
//   typeof true,
//   typeof undefined,
//   typeof null,
//   typeof ['a', 'b'],
//   typeof obj
// );

// console.groupCollapsed('🔻');
// console.error('Error');

// let x = 100;
// console.log(x);

// console.warn('Warn');
// console.warn('Warn');
// console.warn('Warn');
// console.warn('Warn');
// console.warn('Warn');

// console.groupEnd('🔼');
// console.table({ firstName: 'Elrick', lastName: 'Ashford' });

// const style = 'background: crimson; padding: 10px; border: 2px solid white';

// console.log('%cHello World!', style);

let box = {};

console.log(box);

box['material'] = 'cardboard';

console.log(box);

box[('material', 'width')] = ('cardboard', '3');

console.log(box);
console.log(box.material);
console.log(box.width);

box.width = 69;
console.log(box.width);

let key = 'material';
console.log(key);

key = box.material;

console.log(key);
