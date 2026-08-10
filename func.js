// # Questions

// **Fundamentals**

// - What is a function?
// Functions are a reference data types in js.

// - What makes functions first-class?
// Other programming languages have class, module, prototype, tect. JS have functions, so that makes it so powerfull. Thats why

// - Function declaration vs expression?
// Function Declaration
// function Declaration() {
// }

// Function Expression
// const Expression = function () {
// }

// - Named vs anonymous function?
// Named
// function Named() { }
// Anonymous
// const Anonymous = function () { }
// const AltAnonymousArrow = () => { }

// - What is an IIFE?
// Imedietly Invoked Function Expression
// (function () { })()

// - Function vs method?
// Function
// function() {
// }

// Method
// const FuncObject = {
//     foo: function () {
//         console.log()
//     }
// }
// FuncObject.foo()

// **Hoisting**

// -What gets hoisted ?
// Variables, functions, maybe class?

// -What is initialized during environment setup ?
//  DOn't know

// -Why does `function foo(){}` behave differently from`const foo = () => {}` ?
// function foo(){} is a function statement what get hoisted, const foo = () => {} is function expression

// **Arrow functions**

// -What makes arrow functions different ?
// They are much more compact than traditional functions, they get there this from lexecal scope, they don't have constructior & prototype

// - How does lexical `this` work?
// It refer the sorrunding area of the arrow function

// -Do arrow functions have their own scope ?
// Yes, they get it from there lexical scope

// - What do they lack compared with regular functions?
// Contructor, prototype

// **Callbacks**

// - What is a callback?
// When a function retunrs a function

// - Why pass functions around?
// For the ease of use

// -Where are callbacks used ?
// Dont know

// -Callback vs higher - order function?
// They seems similar, callbacks returns a function, higher - order function calls another function

// **`this`**

// - What determines `this`?
// Scope

// - How does method invocation work?
// Methods are functions inside a object, they have access to the scopre inside tha object value and this

// -What happens when you detach a method ?
// Dont' know

// -What does `bind()` do?
// Don't know

// - Why doesn't an arrow function get its own `this`?
// Arrow functions have their own this, they get it fron the lexical scope

// - [ ] What exactly is a function object?
// In js functions are data types, object

// - [ ] Why are functions objects?
// In js functions are data types, object

// - [ ] What does "first-class" actually mean?
// Functions are most powerfull tool in JS

// - [ ] Can a function be stored in an object?

// Yes. Its called method
// - [ ] Can it be stored in an array?
// Yes. Its called method

// - [ ] Can it be returned from another function?
// Yes.

// - [ ] What does Function.prototype have to do with this?
// Don't know

// # Implement

// - [ ] function declaration
// function Declaration() {}

// - [ ] function expression
// const Expression = function () { };

// - [ ] arrow function
// const ArrowFunction = () => {};

// - [ ] named function expression
// const NamedFunctionExpression = function Named() {};

// - [ ] IIFE
// (function () { })();

// - [ ] method
// const FuncObject = {
//   foo: function () {},
// };

// FuncObject.foo(); Method

// - [ ] callback

// function foo(func) {
//   return func;
// }

// function bar() {
//   console.log('O_o');
// }

// foo(bar()); // Function calling a function

// Exercise Hoisting prediction
// 1
// foo(); // A

// function foo() {
//   console.log('A');
// }

// 2
// foo(); // Reference Error, cause of TDZ

// const foo = function () {
//   console.log('B');
// };

// 3
// foo(); // Type Error, cause foo = undefined

// var foo = function () {
//   console.log('C');
// };

// 4
// foo(); // Reference Error, cause of TDZ

// const foo = () => {
//   console.log('D');
// };

// # Experiment
// ## This

const MethodDemo = {
  name: 'Sakib',

  greetingsAlt() {
    console.log(this);
  },

  greetings: () => {
    console.log(this);
  },
};

// MethodDemo.greetings(); // {} | Cause Arrow Function's scope
// MethodDemo.greetingsAlt(); //{ name: 'Sakib', greetings: [Function: greetings], greetingsAlt: Function: greetingsAlt]} | Function scope

// MethodDemo.greetings(); // Arrow function's this gets its value from the lexical scope, in this case which is {}
// MethodDemo.greetingsAlt(); // Function statement's this has wider scope and it can retun the complete object

const fn = MethodDemo.greetingsAlt();
const fnAlt = MethodDemo.greetingsAlt;
// fn; // fn here will return the complete object (odDemo ) as it is returned by this of greetingsAlt(). fn just calling the method greetingsAlt(). fn is function call

// fnAlt(); // this returns the Object + <ref *1> Object [global] {} don't know why? fn vs fnAlt() whats the difference?

const bound = MethodDemo.greetingsAlt.bind(MethodDemo); // What is going on here?
// bound();

// ## first-class functions
