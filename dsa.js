// 0(n) ---> Linear Time
// const array = new Array(100000).fill('nemo'); //  ---> O(n) || Linear Time
const array = ['nemo']; // ---> O(1) || Linear Time

function findNemo(array) {
  const start = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo🐡');
    }
  }

  const end = performance.now();
  console.log(Math.floor(end - start) / 1000 + ' Second(s)');
}

// findNemo(array); // 100 0.014 Second(s)
// findNemo(array); // 1000 0.745 Second(s)
// findNemo(array); // 1000 7.009 Second(s)    ---> O(n) || Linear Time

// O(1) ---> Constant Time

function compressFirstBox(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
  console.log(boxes[2]); // O(1)
}

// compressFirstBox(boxes); // O(3) ~ O(1)

// O(n^2)
const boxes = [0, 1, 2, 3, 4, 5];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// logAllPairs(boxes); // O(n * n) = O(n^2)

// O(n!)

const strings = ['a', 'b', 'c', 'd']; // 4 * 4 = 16 bytes of storage

strings.push('e'); // O(1)

strings.pop(); // O(1)

strings.unshift('z'); // O(n) -> It will update every value in the array

strings.splice(2, 0, 'O_o'); // O(n)

// console.log(strings);

// console.log([] === []); // false
// console.log([1] === [1]); // false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// console.log(object1 === object2); // true
// console.log(object2 === object3); // false
// console.log(object2.value === object3.value); // true

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

// newArray.push('hi');
// newArray.push('you');
// newArray.push('i');
// newArray.pop();

// console.log(newArray);

function mergeSortedArrays(arrayA, arrayB) {
  let mergeArray = [];

  let array1Item = arrayA[0];
  let array2Item = arrayB[0];

  let i = 1;
  let j = 1;

  while (array1Item !== undefined || array2Item !== undefined) {
    // console.log(array1Item, array2Item);

    if (array2Item === undefined || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = arrayA[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = arrayB[j];
      j++;
    }
  }

  return mergeArray;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// Function Expression
// Functions that are assigned as a value. In JS functions can passed as arguments to other function, returned from functions. It is also called first class value. IT is a value that can be passed around.

// Function Expression have two types
// Anonymous function
// More common
const Expression = function () {};

// Named function
// Preferred | Recommended
const ExpressionX = function named() {};

var age = 39;

age = 2 + age * 2;

console.log(age);

const convertToLiters = new Function('gallons', 'return gallons * 3.785');

