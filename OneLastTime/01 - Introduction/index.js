// console.log('O_o');

// let x = 69

// console.log(x++); // 69
// console.log(x); //70
// console.log(x++); // 70
// console.log(x++); // 71

// console.log(++x); //70
// console.log(++x); //71
// console.log(++x); //72

// x++
// ++x

// x = x + 1

// console.log(x); //70
// ++x // x = x + 1
// console.log(x); //71

// let y = '5'

// console.log(typeof (y));

// x = x + y // 70 + '5'

// console.log(x); // 705
// console.log(typeof(x));

// console.log(++y);// 51? 6?

// let h = parseInt('9A')
    
// console.log(++h);

// let z = x + y
// console.log(z);
//
// console.log(y++);
// console.log(++y);

'use strict'

var msg = 'Welcome to JS'

console.log(msg);

let firstName = 'Sakib'
let lastName = 'Ahamed'

let numYearsEmployed = 5
let dateBirth = new Date('August 26, 1994')

numYearsEmployed = 7

var dog = '🐕'

console.log(dog);

var scopeTest = 10

function scopeTestFunc() {
    var scopeTest = 20
    console.log('O_o', scopeTest);
}   

console.log(scopeTest);
scopeTestFunc()
console.log(scopeTest);

// 