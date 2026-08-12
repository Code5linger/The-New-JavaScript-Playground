// **Fundamentals**

// - What is a function?
// A function is an datatype in JS, it has two part, function body and function call. Calling the function call will run all the instructions inside the function body.

// - What makes functions first-class? ⚠️
// In JS, function can be stored in variables, passed as arguments, a function can return function, can be stored in data structures like array and object. This is what makes functions in js first class.

// - Function declaration vs expression?
// Function declaration
// function declaration() {}

// Function Expression
// const expression = function(){}

// - Named vs anonymous function?
// Named
function Named() {}

// Anonymous
const anon = () => {
  console.log('O_o');
}; // here () => { console.log('O_o')}; is anon function

// - What is an IIFE?
// Immediately invoked function expression
(function Named() {})();

// - Function vs method?
// Function
function Demo() {}

const obj = {
  demo: function () {},
};

obj.demo(); // Method

// **Hoisting**

// - What gets hoisted?
// During the process og JS code execution, var, function and classes are initialed first without value in them. This is called hoisted.

// - What is initialized during environment setup?
// Variables, functions

// - Why does `function foo(){}` behave differently from `const foo = () => {}`?
// `function foo(){}` is a function statement while `const foo = () => {}` function expression

// **Arrow functions**

// - What makes arrow functions different?
// They are compact version of traditional funcs introdused in ES6. The biggest difference is in scope, althoug arrow function have lexical scope they don't have there own this, protoype,

// - How does lexical `this` work?
// it is the scope inside the arrow function

// - Do arrow functions have their own scope?
// Yes, they get it from the lexical scope

// -What do they lack compared with regular functions ?
// this, constructior, prototype

// **Callbacks**

// - What is a callback? ⚠️
// Callback are functions that are passed into another function ex
// function callBack(HOF) {
//   return HOF;
// }

// setTimeout(callBack(), 1000);
// // OR

// function HighOrderFunction(CB) {
//   return CB;
// }

// HighOrderFunction(callBack); // here callBack is a callback

// - Why pass functions around?
// So function can execute codes that is passed down to them based on senario. Need clarifiation on that

// - Where are callbacks used?
// in Functions?

// - Callback vs higher-order function? ⚠️
// Higher order functions can accept functions as parameter and return functions.
// Callback are funtions passed into another functions ex higherOrderFunction(callback())

// **`this`**

// - What determines `this`?
// Don't know, scopre i guess, environment too

// - How does method invocation work?
// Methods are functions inside an object, when call a method it runs with this being the object

// - What happens when you detach a method?
// DOn't know

// - What does `bind()` do?
// it connects a functions this to a method

// - Why doesn't an arrow function get its own `this`?
// DOn't know

//  Functions

// - [ ] What exactly is a function object?
//
// - [ ] Why are functions objects?
//
// - [ ] What does "first-class" actually mean?
// In JS it means being trated like a variable, ex js is first class cause it can be stored in variable, passed and returned into functions, etc

// - [ ] Can a function be stored in an object?
//  Yes. Llike method

// - [ ] Can it be stored in an array?
//  Yes

// - [ ] Can it be returned from another function?
// Yes, the another funtion will be an higerorder function

// -[] What does Function.prototype have to do with this ?
// Don't know

// const MethodDemo = {
//   name: 'Sakib',

//   greetingsAlt() {
//     console.log(this);
//   },

//   greetings: () => {
//     console.log(this);
//   },
// };

// MethodDemo.greetings(); // {} Function Expression, it's this dont have access to all the whole object

// MethodDemo.greetingsAlt(); // {name: 'Sakib', [Function], [Function]}, this here have access to all the values

// const fn = MethodDemo.greetings();
// fn; // {} Same as before, this in greetings don't have access to all the values in the object

// const func = MethodDemo.greetingsAlt();
// func; // {} Again it will return all the values cause this in greetingsAlt have access to all the values in the object
// func();

// const bound = MethodDemo.greetingsAlt.bind(MethodDemo);
// bound(); // .bind here bind the scope of MethodDemo to .greetingsAlt

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// function logIn() {
//   return function () {
//     console.log('loginX');
//   };
// }

// function logOut() {
//   return function () {
//     console.log('logOutX');
//   };
// }

// eventEmitter.on('login', logIn());
// eventEmitter.on('logout', logOut());

// eventEmitter.emit('login');
// eventEmitter.emit('logout');

function createGreeter(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetSakib = createGreeter('Sakib');
const greetAhmed = createGreeter('Ahmed');

// greetSakib();
// greetAhmed();

// Question 1 Where does "Sakib" live after createGreeter() finishes?
// Inside greetSakib variable

// Question 2 Why can the returned function still access name?
//  closure

// Question 3 Why don't these interfere with each other?
// Different closure
// createGreeter('Sakib') > closure A > Sakib
// createGreeter('Ahmed') > closure B > Ahmed

// Question 4 What happens if you create 1,000 greeters?
//  1000 cosures, they wound interfre with each other

// function createCounter() {
//   let num = 0;
//   return () => ++num;
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// const counterA = createCounter();
// const counterB = createCounter();

// console.log(counterA()); // 1 Closure A
// console.log(counterA()); // 2 Closure A

// console.log(counterB()); // 1 Closure B
// console.log(counterB()); // 2 Closure B

function once(fn) {
  let hasRan = false;

  return (...params) => {
    if (!hasRan) {
      //   hasRan = true;
      //   console.log(params);
      return fn((name = params[0]), (age = params[1]));
    }
  };
}

// const greet = once((name) => {
//   console.log(`Hello ${name}`);
// });

// greet('Sakib'); // Hello Sakib
// greet('Ahmed'); // nothing
// greet('Rahim'); // nothing

const add = once((a, b) => console.log(a + b));

add(2, 3); // 5
add(10, 20); // 5

const greet = once((name, age) => {
  return `${name} is ${age}`;
});

console.log(greet('Sakib', 33)); // Sakib is 33
console.log(greet('Ahmed', 40)); // Sakib is 33

// const counter = createCounter();

// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.getValue(); // 1
// counter.reset();
// counter.getValue(); // 0
