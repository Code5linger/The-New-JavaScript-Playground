console.groupCollapsed('🎴 24-07-24');

// alert('o_O');

let temp = 351;
console.log(temp + 60 + 9);

let now = Date();
console.log(now, typeof now);

let nowObj = new Date();
console.log(nowObj, typeof nowObj);

// console.log(clear);
console.log(console);
console.count();
console.time();
console.timeLog();
console.log(typeof 69);

console.timeLog();
console.count();
console.log(typeof 'Copa');
console.count();
console.log(
  typeof 420,
  typeof 'xXx',
  typeof true,
  typeof null,
  typeof undefined,
  typeof [1, 2, 3],
  typeof { a: 'A', b: 'B' }
);

let x = 100;

console.log(x);

console.error('Error');

console.warn('Warning!');

console.table({ firstName: 'Elrick', lastName: 'Ashford', age: 29 });
console.log('Test');

console.groupEnd();

console.trace('Set A');

let style = 'padding: 10px; border: 2px solid crimson; color: crimson';

console.log('%cHello World!', style);

console.timeLog();
console.dir(screen);
console.timeLog();
console.count();

console.timeLog();

function bottom() {
  function top() {
    function nest() {
      console.trace('Nest');
    }
    console.trace('Top');
    nest();
  }
  console.trace('Bottom');
  top();
}
bottom();



//  ❌   18  19 20  23  25  26  27  
